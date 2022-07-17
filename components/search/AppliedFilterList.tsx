import { css } from "@emotion/react"
import { useContext } from "react"

import Tag from "components/common/Tag"

import { SearchContext } from "components/search"
import { SearchFilterCriteria } from "types"

const AppliedFilterList = () => {
  const { searchFilter, setSearchFilter } = useContext(SearchContext)
  const { keyword, appliedCriteria, criteriaMetadata } = searchFilter

  const handleKeywordTagClick = () => {
    setSearchFilter({
      ...searchFilter,
      keyword: "",
    })
  }

  const handleCriteriaTagClick = (criteria: SearchFilterCriteria) => {
    setSearchFilter({
      ...searchFilter,
      appliedCriteria: appliedCriteria.filter((item) => item !== criteria),
    })
  }

  const handleResetButtonClick = () => {
    setSearchFilter({
      ...searchFilter,
      keyword: "",
      appliedCriteria: [],
    })
  }

  if (!appliedCriteria.length && !keyword) return null

  return (
    <div css={wrapper}>
      <div css={tagList}>
        {keyword && <Tag onClose={handleKeywordTagClick}>{keyword}</Tag>}
        {appliedCriteria.map((item) => (
          <Tag
            key={item}
            onClose={() => {
              handleCriteriaTagClick(item)
            }}
          >
            {criteriaMetadata[item].name}
          </Tag>
        ))}
      </div>
      <button css={resetButton} onClick={handleResetButtonClick}>
        <img src="/images/refresh.svg" alt="초기화" />
      </button>
    </div>
  )
}

const wrapper = css({
  display: "flex",

  height: "50px",
})

const tagList = css({
  flex: 1,

  display: "flex",
  alignItems: "center",
  columnGap: "5px",

  height: "50px",
  padding: "12px 15px",
})

const resetButton = css({
  width: "50px",
  height: "50px",

  "& > img": {
    width: "22px",
    height: "22px",
  },
})

export default AppliedFilterList
