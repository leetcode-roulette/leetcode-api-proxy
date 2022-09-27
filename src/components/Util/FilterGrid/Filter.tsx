export interface Filter {
	id: number;
	text: string;
	toggled?: boolean;
}

export const DEFAULT_FILTERS = (() : Filter[] => {
	const filterTextArray : string[] = [
		"Array", "String", "Hash Table", 
		"Dynamic Programming", "Sorting", 
		"Math", "Greedy", "Binary Search",
		"Heaps"
	];

	const filters : Filter[] = [];

	for (let i = 0; i < 71; i++) {
		filters[i] = {
			id: i,
			text: filterTextArray[Math.floor(Math.random() * filterTextArray.length)],
			toggled: false
		};
	}

	return filters;
})();