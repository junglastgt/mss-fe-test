import React, { forwardRef, SyntheticEvent } from "react"
import { css } from "@emotion/react"
import type { Product } from "types"
import { URL } from "constants/"

interface ProductItemProps {
  productData: Product
}

const ProductItem = forwardRef<HTMLDivElement, ProductItemProps>(
  ({ productData }: ProductItemProps, ref) => {
    const {
      goodsNo,
      goodsName,
      price,
      brandName,
      imageUrl,
      linkUrl,
      brandLinkUrl,
      normalPrice,
      isSale,
      saleRate,
      isSoldOut,
      isExclusive,
    } = productData

    /* 이미지가 없는 상품일 때 처리 */
    const handleImageNotFoundError = (e: SyntheticEvent<HTMLImageElement>) => {
      e.currentTarget.src = URL.IMAGE_PLACEHOLDER
    }

    return (
      <div ref={ref} css={item}>
        <div css={imageWrapper}>
          <img src={imageUrl} alt={goodsName} onError={handleImageNotFoundError} />
          {isSoldOut && <div css={soldOutOverlay}>SOLD OUT</div>}
        </div>
        <div css={textDataWrapper}>
          {isExclusive && <span css={exclusiveTag}>단독</span>}
          <span css={brandNameText}>{brandName}</span>
          <span css={goodsNameText}>{goodsName}</span>
          <div css={priceTextWrapper}>
            <span css={priceText}>{price?.toLocaleString()}원</span>
            {isSale && <span css={saleRateText}>{saleRate}%</span>}
          </div>
          {isSale && <span css={normalPriceText}>{normalPrice?.toLocaleString()}원</span>}
        </div>
      </div>
    )
  }
)

const item = css({
  display: "flex",
  flexDirection: "column",

  minWidth: "154px",
  maxWidth: "250px",
  minHeight: "366px",
  maxHeight: "450px",
})

const imageWrapper = css({
  position: "relative",

  width: "100%",
  aspectRatio: "188/226",
  overflow: "hidden",

  "& > img": {
    width: "100%",
    height: "100%",

    objectFit: "contain",
  },
})

const soldOutOverlay = css({
  position: "absolute",
  top: "0px",
  left: "0px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  opacity: "0.8",

  width: "100%",
  height: "100%",

  backgroundColor: "#FFFFFF",

  color: "#777777",
  fontWeight: "500",
  fontSize: "20px",
  fontFamily: "Musinsa",
  lineHeight: "22px",
})

const textDataWrapper = css({
  display: "flex",
  flexDirection: "column",

  position: "relative",

  padding: "20px 10px",
})

const exclusiveTag = css({
  position: "absolute",
  top: 0,
  left: "10px",
  transform: "translateY(-50%)",

  backgroundColor: "#18A286",

  fontSize: "12px",
  lineHeight: "18px",
  letterSpacing: "-0.5px",
  color: "#FFFFFF",

  padding: "4px 6px",
})

const brandNameText = css({
  fontSize: "11px",
  fontWeight: "400",
  lineHeight: "16px",

  marginBottom: "8px",
})

const goodsNameText = css({
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "18px",

  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",

  marginBottom: "4px",
})

const priceTextWrapper = css({
  display: "flex",
  alignItems: "center",
})

const priceText = css({
  flex: 1,

  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "24px",
  fontFamily: "Musinsa",
})

const saleRateText = css({
  width: "fit-content",

  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "24px",
  fontFamily: "Musinsa",

  color: "#FF0000",
})

const normalPriceText = css({
  fontSize: "11px",
  fontWeight: "500",
  lineHeight: "12px",
  fontFamily: "Musinsa",

  textDecorationLine: "line-through",
  color: "#AAAAAA",
})

export default ProductItem
