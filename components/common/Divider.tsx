import { css } from "@emotion/react"

const Divider = () => {
  return <div css={dividerStyle}></div>
}

const dividerStyle = css({
  position: "sticky",
  top: "105px",
  zIndex: 1,

  height: "10px",
  backgroundColor: "#F1F1F1",
})

export default Divider
