import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  color: #222222;
  font-size: 25px;
  font-family: Tungsten, Impact;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Header = () => (
  <header
    css={css`
      background: #fff;

      display: flex;
      justify-content: space-between;
      padding: 3rem 5vw;

      @media (min-width: calc(550px + 10vw)) {
        padding-left: calc((100vw - 550px - 0.5rem) / 2);
        padding-right: calc((100vw - 550px - 0.5rem) / 2);
      }
    `}
  >
    <NavLink to="/" fontWeight="bold">
      FEM Workshop
    </NavLink>

    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about/">About</NavLink>
      <NavLink to="/contact/">Contact</NavLink>
    </nav>
  </header>
)

export default Header
