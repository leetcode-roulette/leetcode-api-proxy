import { Tag } from "leetcode-roulette-api";
import { api } from "../../../api";

export interface Filter {
	id: number;
	text: string;
	slug: string;
	toggled?: boolean;
}

export const getTags = (async () : Promise<Filter[]> => {
	let tags: Tag[] = [];

	try {
		tags = await api.getTags();
	} catch(e) {
		console.log("Exception caught fetching tags: " + e);
	}

	const filters : Filter[] = [];

	tags.forEach((tag, i) => {
		filters.push({
			id: i,
			text: tag.name,
			slug: tag.tag_slug,
			toggled: false
		});
	});

	return filters;
});
