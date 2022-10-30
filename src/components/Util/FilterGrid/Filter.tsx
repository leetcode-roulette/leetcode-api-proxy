import { Tag } from "leetcode-roulette-api";
import { api } from "../../../api";

export interface Filter {
	id: number;
	text: string;
	data: string;
	type: string;
	toggled: boolean;
}

export function filterToggleHandler(callback: (filter: Filter) => void, filter: Filter): void {
	callback(filter);
}

export const getTags = (async () : Promise<Filter[]> => {
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
