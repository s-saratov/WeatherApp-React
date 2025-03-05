import { Link, useNavigate } from "react-router-dom";

import {
  LayoutComponent,
  Header,
  NavContainer,
  LogoContainer,
  Main,
  StyledNavLink,
} from "./styles";
import { EmployeeDataContextTypes, LayoutProps } from "./types";
import { createContext, useState } from "react";

// Создаём и экспортируем контекст
export const EmployeeDataContext = createContext<EmployeeDataContextTypes>({
  employee: undefined,
  setEmployeeData: () => {},
});

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  // Создаём state для хранения значений полей ввода формы
  const [employeeData, setEmployeeData] = useState<
    EmployeeDataTypes | undefined
  >();

  return (
    <EmployeeDataContext.Provider
      value={{
        employee: employeeData,
        setEmployeeData: setEmployeeData,
      }}
    >
      <LayoutComponent>
        <Header>
          <LogoContainer onClick={() => navigate("/")}>Weather App</LogoContainer>
          <NavContainer>
            <StyledNavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Home
            </StyledNavLink>
            <StyledNavLink
              to="/history"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              History
            </StyledNavLink>
          </NavContainer>
        </Header>
        <Main>{children}</Main>
      </LayoutComponent>
    </EmployeeDataContext.Provider>
  );
}

export default Layout;