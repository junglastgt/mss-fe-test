import { useEffect, useState } from "react"
import { Product } from "types"
import { URL } from "constants/"

/* 특정 page에 대해 데이터를 가져온 후, 기존 데이터에 계속해서 누적 */
const useProductQuery = () => {
  const [page, setPage] = useState(0)
  const [productQueryResult, setProductQueryResult] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    fetch(`${URL.PRODUCT}${page}.json`)
      .then((res) => res.json())
      .then((res) => {
        setProductQueryResult((prev) => [...prev, ...res.data.list])
      })
      .catch(() => {
        setHasMore(false)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [page])

  return { productQueryResult, isLoading, hasMore, page, setPage }
}

export default useProductQuery
