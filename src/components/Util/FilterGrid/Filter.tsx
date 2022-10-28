import { Tag } from "leetcode-roulette-api";
import { api } from "../../../api";

export interface Filter {
	id: number;
	text: string;
	data: string;
	type: string;
	toggled?: boolean;
}

export function filterToggleHandler(filter: Filter): void {
	
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
			data: tag.tag_slug,
			type: "tags",
			toggled: false
		});
	});

	return filters;
});
