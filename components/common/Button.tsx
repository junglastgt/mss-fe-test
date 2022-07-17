import { ReactNode } from "react"
import { css } from "@emotion/react"

interface ButtonProps {
  children: ReactNode
  onClick?: () => void

  /* 
    버튼의 상태
    - normal: 기본 상태
    - checked: 버튼이 선택되어 글자 색상이 강조
    - highlighted: 배경 색상이 강조
  */
  status: "normal" | "checked" | "highlighted"
}

const Button = ({ children, onClick, status }: ButtonProps) => {
  return (
    <button
      css={[
        buttonStyle,
        status === "checked" && buttonChecked,
        status === "highlighted" && buttonHighlighted,
      ]}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

const buttonStyle = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  height: "35px",

  cursor: "pointer",

  borderRadius: "18px",
  border: "1px solid #EEEEEE",

  color: "#000000",
  fontSize: "14px",
  fontWeight: "400",

  boxShadow: "none",
  backgroundColor: "#FFFFFF",

  padding: "7px 15px",
})

const buttonChecked = css({
  color: "#0078FF",
})

const buttonHighlighted = css({
  backgroundColor: "#0078FF",
  color: "#FFFFFF",
  border: "1px solid #0078FF",
})

export default Button
