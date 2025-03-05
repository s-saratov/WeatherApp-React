import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom'
import bgImage from "../../assets/pic-2.jpeg";

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
  padding: 10px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), rgba(18, 45, 77, 0.5);
  color: white;
  border-bottom: 1px solid #D2D2D2;
  backdrop-filter: blur(8.9px);
`
export const LogoContainer = styled.div`
 border-radius: 50%;
`

export const NavContainer = styled.nav`
 display: flex;
 gap: 25px;
`

export const StyledNavLink = styled(NavLink)`
 text-decoration: none;
 font-size: 20px;
 color: #000000;
 padding: 10px;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  min-height: calc(100vh - 80px);
`

