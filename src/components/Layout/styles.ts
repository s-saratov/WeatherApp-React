import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"
import bgImage from "../../assets/pic-2.jpeg"

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding-left: 70px;
  padding-right: 70px;
  background:
    linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
    rgba(18, 45, 77, 0.5);
  color: white;
  border-bottom: 1px solid #d2d2d2;
  backdrop-filter: blur(8.9px);
`
export const LogoContainer = styled.div`
  color: rgba(255, 255, 255, 1);
  font-family: Inter, Lato, Geneva, Tahoma, sans-serif;
  font-weight: 700;
  font-size: 24px;
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 50px;
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: rgba(255, 255, 255, 1);
  font-weight: 400;
  font-size: 20px;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  min-height: calc(100vh - 80px);
`
