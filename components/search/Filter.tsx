import { useContext } from "react"

import AppliedFilterList from "./AppliedFilterList"
import FilterButtonList from "./FilterButtonList"
import SearchBar from "./SearchBar"
import Divider from "components/common/Divider"

import { SearchContext } from "components/search"
import { css } from "@emotion/react"

const Filter = () => {
  const { searchFilter } = useContext(SearchContext)

  return (
    <section css={filterWrapper}>
      <FilterButtonList />
      {searchFilter.isSearchBarOpen && <SearchBar />}
      <AppliedFilterList />
      <Divider />
    </section>
  )
}

const filterWrapper = css({
  position: "sticky",
  top: "50px",
  zIndex: 1,

  backgroundColor: "#FFFFFF",
})

export default Filter
