import { useContext } from "react"
import { css } from "@emotion/react"

import Button from "components/common/Button"

import { SearchContext } from "components/search"
import type { SearchFilterCriteria } from "types"

const FilterButtonList = () => {
  const { searchFilter, setSearchFilter } = useContext(SearchContext)
  const { keyword, isSearchBarOpen, appliedCriteria, criteriaMetadata } = searchFilter

  const availableCriteria = Object.keys(criteriaMetadata) as SearchFilterCriteria[]

  const handleSearchButtonClick = () => {
    setSearchFilter({
      ...searchFilter,
      isSearchBarOpen: !isSearchBarOpen,
    })
  }

  const handleCriteriaButtonClick = (criteria: SearchFilterCriteria) => {
    if (appliedCriteria.includes(criteria)) {
      setSearchFilter({
        ...searchFilter,
        appliedCriteria: appliedCriteria.filter((item) => item !== criteria),
      })
    } else {
      setSearchFilter({
        ...searchFilter,
        appliedCriteria: [...appliedCriteria, criteria],
      })
    }
  }

  return (
    <div css={filterButtonWrapper}>
      <Button
        status={isSearchBarOpen ? "highlighted" : keyword ? "checked" : "normal"}
        onClick={handleSearchButtonClick}
      >
        <span css={searchButtonText}>검색</span>
        <img src="/images/search.svg" css={searchButtonImage} alt="검색" />
      </Button>

      {availableCriteria.map((item) => (
        <Button
          key={item}
          status={appliedCriteria.includes(item) ? "checked" : "normal"}
          onClick={() => handleCriteriaButtonClick(item)}
        >
          {criteriaMetadata[item].name}
        </Button>
      ))}
    </div>
  )
}

const filterButtonWrapper = css({
  display: "flex",
  columnGap: "5px",
  height: "55px",
  padding: "10px 7px",
})

const searchButtonText = css({
  marginRight: "3px",
})

const searchButtonImage = css({
  width: "18px",
  height: "18px",
})

export default FilterButtonList
