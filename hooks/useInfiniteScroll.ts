import { useRef, useCallback } from "react"

interface UseInfiniteScrollParams {
  /* 해당 요소가 viewport에 보일 떄 실행할 작업 */
  onIntersect: () => void

  /* 추가로 가져올 데이터가 있는지 */
  hasMore: boolean
}

const useInfiniteScroll = ({ onIntersect, hasMore }: UseInfiniteScrollParams) => {
  const intersectionObserverRef = useRef<IntersectionObserver>()

  /* lastElementRef가 가리키는 DOM 요소가 변경될 때마다 observer 재설정 */
  const lastElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (!node) return
      if (intersectionObserverRef.current) intersectionObserverRef.current.disconnect()

      intersectionObserverRef.current = new IntersectionObserver(
        (entries, currentObserver) => {
          if (!entries[0].isIntersecting) return
          if (!hasMore) return currentObserver.disconnect()

          onIntersect()
        },
        {
          threshold: 0.8,
        }
      )

      intersectionObserverRef.current.observe(node)
    },
    [hasMore]
  )

  return { lastElementRef }
}

export default useInfiniteScroll
