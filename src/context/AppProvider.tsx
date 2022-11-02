import { FC, useState, useEffect, useContext, createContext, PropsWithChildren } from "react";
import { getTags } from "../components/Util/FilterGrid/Filter";
import { Filter } from "../components/Util/FilterGrid/Filter";

const TagsContext = createContext<Array<Filter>>([]);
const SetTagsContext = createContext<Function>(() => {});

export const useTagsContext = (): [Array<Filter>, Function] => {
	const state = useContext(TagsContext);
	const dispatch = useContext(SetTagsContext);
	return [state, dispatch];
};

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	const [tags, setTags] = useState<Array<Filter>>([]);

	useEffect(() => {
		getTags().then((tags) => {
			console.log(tags);
			setTags(tags);
		});
	}, []);

	const updateTags = (tags: Array<Filter>) => {
		setTags(tags);
	};

	return (
		<>
			<TagsContext.Provider value={tags}>
				<SetTagsContext.Provider value={updateTags}>{children}</SetTagsContext.Provider>
			</TagsContext.Provider>
		</>
	);
};

export default AppProvider;
