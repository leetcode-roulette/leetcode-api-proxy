import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import { Filter, filterToggleHandler } from "./Filter";
import FilterToggle from "./FilterToggle";

const FilterBar: FC<PropsWithChildren> = () => {
  const premium: Filter = {
    id: 1,
    text: "Premium",
    data: "premium",
    type: "premium",
    toggled: false
  };

  const difficulties: Filter[] = ["Easy", "Medium", "Hard"].map((difficulty, id): Filter => {
    return {
      id,
      text: difficulty,
      data: id.toString(),
      type: "difficulties",
      toggled: false
    }
  });

  const Premium = (
    <FilterToggle
      styles="toggle toggle-white-outline"
      filter={premium}
      toggled={premium.toggled}
      onClick={() => filterToggleHandler(premium)}
    >
      {premium.text}
    </FilterToggle>
  )

  const Difficulties = difficulties.map(difficulty => {
    return (
      <FilterToggle
        styles="toggle toggle-white-outline"
        filter={difficulty}
        toggled={difficulty.toggled}
        onClick={() => filterToggleHandler(difficulty)}
      >
        {difficulty.text}
      </FilterToggle>
    )
  })

  return (
    <div className="container-fluid pt-3">
			<div className="col">
				<div className="d-flex flex-wrap justify-content-center">
          {Difficulties.map((Difficulty, i) => (
              <div key={i} className="mx-2 mb-2">
                {Difficulty}
              </div>
          ))}
          <div className="mx-2 mb-2">
            {Premium}
          </div>
				</div>
			</div>
		</div>
  )
}

export default FilterBar;