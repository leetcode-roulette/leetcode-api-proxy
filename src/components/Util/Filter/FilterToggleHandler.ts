import { Filter } from ".";

export default function filterToggleHandler(callback: (filter: Filter) => void, filter: Filter): void {
	callback(filter);
}
