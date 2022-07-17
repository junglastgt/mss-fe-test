import { css } from "@emotion/react"

const Header = () => {
  return (
    <header css={header}>
      <img src="/images/logo_musinsa.svg" alt="musinsa" css={logoImage} />
    </header>
  )
}

const header = css({
  position: "sticky",
  top: "0px",
  zIndex: 1,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "#FFFFFF",

  width: "100%",
  height: "50px",
  textAlign: "center",
})

const logoImage = css({
  width: "94.89px",
  height: "16px",
})

export default Header
