import { useContext, useMemo } from "react"
import { css, keyframes } from "@emotion/react"

import ProductItem from "components/search/ProductItem"
import useProductQuery from "hooks/useProductQuery"
import useInfiniteScroll from "hooks/useInfiniteScroll"
import { SearchContext } from "components/search"

const ProductList = () => {
  /* 상품 데이터 불러오기 */
  const { productQueryResult, isLoading, hasMore, setPage } = useProductQuery()

  /* 마지막 요소에 IntersectionObserver 부착 */
  const { lastElementRef } = useInfiniteScroll({
    onIntersect: () => setPage((page) => page + 1),
    hasMore,
  })

  const { searchFilter } = useContext(SearchContext)

  /* 검색어와 필터 기반으로 원본 데이터 필터링 */
  const filteredResult = useMemo(() => {
    /* 1. '품절포함'을 선택하지 않았다면 품절 상품 제외 */
    const filteredBySoldOut = searchFilter.appliedCriteria.includes("soldout")
      ? productQueryResult
      : productQueryResult.filter((item) => !item.isSoldOut)

    /* 2. 검색어 필터링 */
    const filteredByKeyword = searchFilter.keyword
      ? filteredBySoldOut.filter((item) => item.goodsName.includes(searchFilter.keyword))
      : filteredBySoldOut

    /* 3. 선택된 필터 항목으로 필터링 */
    const filteredByCriteria = searchFilter.appliedCriteria.reduce((prev, criteria) => {
      /* '품절포함' 이외의 필터만 고려 */
      if (criteria === "soldout") return prev

      return prev.filter((item) => item[searchFilter.criteriaMetadata[criteria].key])
    }, filteredByKeyword)

    return filteredByCriteria
  }, [searchFilter.keyword, searchFilter.appliedCriteria, productQueryResult])

  return (
    <>
      {!filteredResult.length && (
        <div css={noItem}>
          <img src="/images/empty.svg" alt="검색결과 없음" />
          <span>검색결과 없음</span>
        </div>
      )}

      {filteredResult.length > 0 && (
        <>
          <ul css={listWrapper}>
            {filteredResult.map((productData, index) =>
              index === filteredResult.length - 1 ? (
                <ProductItem productData={productData} key={index} ref={lastElementRef} />
              ) : (
                <ProductItem productData={productData} key={index} />
              )
            )}
          </ul>

          {isLoading && (
            <div css={loadingIndicator}>
              <img src="/images/loading.svg" />
            </div>
          )}
        </>
      )}
    </>
  )
}

const listWrapper = css({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
})

const noItem = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  width: "100%",
  height: "calc(100vh - 245px)",

  "& > img": {
    width: "90px",
    height: "90px",

    marginBottom: "4px",
  },

  "& > span": {
    fontSize: "14px",
    lineHeight: "21px",
    color: "#AAAAAA",
  },
})

const rotateKeyframe = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const loadingIndicator = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  height: "56px",

  padding: "20px 0px",

  "& > img": {
    width: "16px",
    height: "16px",

    transformOrigin: "50% 50%",
    animation: `${rotateKeyframe} 1s linear infinite`,
  },
})

export default ProductList
