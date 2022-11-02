import { FC, PropsWithChildren, createContext, useContext, useState } from "react";
import { Filter } from "../components/Util/Filter";

interface ProblemFilter {
  tags: Set<string>;
  difficulty: Set<number>;
  premium: boolean;
}

const FilterContext = createContext<ProblemFilter>({
  tags: new Set(),
  difficulty: new Set(),
  premium: false
});
const SetFilterContext = createContext<(filter: Filter) => void>(() => {});

export const useFilterContext = (): [ProblemFilter, (filter: Filter) => void] => {
	const state = useContext(FilterContext);
  const dispatch = useContext(SetFilterContext);
	return [state, dispatch];
};

const FilterProvider: FC<PropsWithChildren> = ({ children }) => {
  const [problemFilter, setProblemFilter] = useState<ProblemFilter>({
    tags: new Set(),
    difficulty: new Set(),
    premium: false
  });

  function getNewSet<T>(oldSet: Set<T>, val: T): Set<T> {
		const newSet: Set<T> = new Set(oldSet);

		if (newSet.has(val)) {
			newSet.delete(val);
		} else {
			newSet.add(val);
		}

		return newSet;
	}

  function updateFilters(filter: Filter): void {
    switch (filter.type) {
      case "tags":
        setProblemFilter({
          ...problemFilter,
          tags: getNewSet(problemFilter.tags, filter.data)
        });
        break;
      case "premium":
        setProblemFilter({
          ...problemFilter,
          premium: !problemFilter.premium
        });
        break;
      case "difficulty":
        setProblemFilter({
          ...problemFilter,
          difficulty: getNewSet(problemFilter.difficulty, parseInt(filter.data))
        });
        break;
    }
  }

	return (
		<FilterContext.Provider value={problemFilter}>
			<SetFilterContext.Provider value={updateFilters}>{children}</SetFilterContext.Provider>
		</FilterContext.Provider>
	);
};

export default FilterProvider;
