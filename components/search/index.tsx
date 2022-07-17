import { createContext, useState } from "react"

import Header from "components/common/Header"
import Filter from "./Filter"
import ProductList from "./ProductList"

import type { SearchFilter } from "types"

/* '검색' 영역에서 사용할 전역 상태 */
const initialState: SearchFilter = {
  keyword: "",
  isSearchBarOpen: false,
  appliedCriteria: [],
  criteriaMetadata: {
    sale: { id: "sale", name: "세일상품", key: "isSale" },
    exclusive: { id: "exclusive", name: "단독상품", key: "isExclusive" },
    soldout: { id: "soldout", name: "품절포함", key: "isSoldOut" },
  },
}

export const SearchContext = createContext({
  searchFilter: initialState,
  setSearchFilter: (state: SearchFilter) => {},
})

const Search = () => {
  const [searchFilter, setSearchFilter] = useState<SearchFilter>(initialState)

  return (
    <SearchContext.Provider
      value={{
        searchFilter,
        setSearchFilter,
      }}
    >
      <Header />
      <Filter />
      <ProductList />
    </SearchContext.Provider>
  )
}

export default Search
