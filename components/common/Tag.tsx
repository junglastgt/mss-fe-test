import { css } from "@emotion/react"
import { ReactNode } from "react"

interface TagProps {
  children: ReactNode
  onClose?: () => void
}

const Tag = ({ children, onClose }: TagProps) => {
  return (
    <span css={tagStyle}>
      <span css={tagText}>{children}</span>
      {onClose && (
        <img src="/images/close.svg" alt="필터 삭제" css={closeButton} onClick={onClose} />
      )}
    </span>
  )
}

const tagStyle = css({
  display: "flex",
  alignItems: "center",
  columnGap: "4px",

  height: "26px",

  borderRadius: "4px",

  backgroundColor: "#0078FF",

  padding: "4px 10px",
})

const tagText = css({
  fontSize: "12px",
  fontWeight: "400",
  color: "#FFFFFF",
})

const closeButton = css({
  width: "14px",
  height: "14px",

  cursor: "pointer",
})

export default Tag
