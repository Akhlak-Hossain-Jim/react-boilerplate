// added packages here
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

// add layout components here
import Footer from "./layout/Footer";
import Header from "./layout/Header";

// add pages here
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background-color: #20232a;
  color: #61dafb;
  min-height: 100vh;
  width: 100vw;
  text-align: center;
  display: grid;
  place-items: center;
`;

export default App;
