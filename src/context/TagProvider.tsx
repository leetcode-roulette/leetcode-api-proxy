import { FC, useState, useEffect, useContext, createContext, PropsWithChildren } from "react";
import { Filter } from "../components/Util/Filter";
import { api } from "../api";
import { Tag } from "leetcode-roulette-api";

const TagsContext = createContext<Array<Filter>>([]);
const SetTagsContext = createContext<Function>(() => {});

export const useTagsContext = (): [Array<Filter>, Function] => {
    const state = useContext(TagsContext);
    const dispatch = useContext(SetTagsContext);
    return [state, dispatch];
};

const getTags = (async () : Promise<Filter[]> => {
	const filters : Filter[] = [];

	try {
		const tags: Tag[] = await api.getTags();

		tags.forEach((tag, i) => {
			filters.push({
				id: i,
				text: tag.name,
				data: tag.tag_slug,
				type: "tags",
				toggled: false
			});
		});

		return filters;
	} catch(e) {
		console.log("Exception caught fetching tags: " + e);
		return [];
	}
});

const TagProvider: FC<PropsWithChildren> = ({ children }) => {
	const [tags, setTags] = useState<Array<Filter>>([]);

	useEffect(() => {
		getTags().then((tags) => {
			setTags(tags);
		});
	}, []);

	const updateTags = (tags: Array<Filter>) => {
		setTags(tags);
	};

	return (
		<>
			<TagsContext.Provider value={tags}>
				<SetTagsContext.Provider value={updateTags}>
					{ children }
				</SetTagsContext.Provider>
			</TagsContext.Provider>
		</>
	);
};

export default TagProvider;
