import { BrowserRouter, Routes, Route } from "react-router-dom"

import GlobalStyles from "./styles/GlobalStyles"
import Layout from "components/Layout/Layout"
import HomePage from "pages/Home/HomePage"
import HistoryPage from "pages/History/HistoryPage"

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/history" element={<HistoryPage/>} />
          <Route path="*" element="Page not found" />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
