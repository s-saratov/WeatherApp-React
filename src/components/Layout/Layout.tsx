import { Link, useNavigate } from "react-router-dom"

import {
  LayoutComponent,
  Header,
  NavContainer,
  LogoContainer,
  Main,
  StyledNavLink,
} from "./styles"
import { EmployeeDataContextTypes, LayoutProps } from "./types"
import { createContext, useState } from "react"

// Создаём и экспортируем контекст
export const EmployeeDataContext = createContext<EmployeeDataContextTypes>({
  employee: undefined,
  setEmployeeData: () => {},
})

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()

  return (
    <LayoutComponent>
      <Header>
        <LogoContainer onClick={() => navigate("/")}>Weather App</LogoContainer>
        <NavContainer>
          <StyledNavLink
            to="/"
            style={({ isActive }) => ({
              fontWeight: isActive ? "700" : "400",
            })}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            to="/history"
            style={({ isActive }) => ({
              fontWeight: isActive ? "700" : "400",
            })}
          >
            History
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
    </LayoutComponent>
  )
}

export default Layout
