export interface Product {
  goodsNo: number
  goodsName: string
  price: number
  brandName: string
  imageUrl: string
  linkUrl: string
  brandLinkUrl: string
  normalPrice: number
  isSale: boolean
  saleRate: number
  isSoldOut: boolean
  isExclusive: boolean
}

export type SearchFilterCriteria = "sale" | "exclusive" | "soldout"

export interface SearchFilter {
  keyword: string
  isSearchBarOpen: boolean
  appliedCriteria: SearchFilterCriteria[]
  criteriaMetadata: Record<
    SearchFilterCriteria,
    {
      id: string
      name: string
      key: keyof Product
    }
  >
}
