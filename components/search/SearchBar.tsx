import { useContext, ChangeEvent } from "react"
import { css } from "@emotion/react"

import { SearchContext } from "components/search"

const SearchBar = () => {
  const { searchFilter, setSearchFilter } = useContext(SearchContext)

  const onKeywordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter({
      ...searchFilter,
      keyword: e.target.value,
    })
  }

  return (
    <section css={searchBarWrapper}>
      <form>
        <div css={searchBarInputWrapper}>
          <img src="/images/search.svg" alt="검색" />
          <input
            value={searchFilter.keyword}
            type="text"
            placeholder="상품명 검색"
            onChange={onKeywordInput}
          />
        </div>
      </form>
    </section>
  )
}

const searchBarWrapper = css({
  height: "80px",
  background: "#F9F9F9",

  padding: "20px 15px",
})

const searchBarInputWrapper = css({
  display: "flex",
  height: "40px",
  backgroundColor: "#FFFFFF",
  border: "1px solid #CCCCCC",

  padding: "8px 10px",

  "& > img": {
    width: "22px",
    height: "22px",

    marginRight: "4px",
  },

  "& > input": {
    flex: 1,

    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",

    border: "none",
    borderRadius: "0px",
    outline: "none",

    "&::placeholder": {
      color: "#AAAAAA",
    },
  },
})

export default SearchBar
