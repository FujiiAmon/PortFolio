import "./App.css";
import styled from "styled-components";
import { Link, BrowserRouter } from "react-router-dom";
import { MyRouter } from "./components/router/MyRouter";

function App() {
  return (
    <BrowserRouter>
      <SHeader>
        PortFolio
        <Link to="/">About</Link>
        <Link to="/tools">Tools</Link>
        <Link to="/works">Works</Link>
      </SHeader>
      <MyRouter />
      <SFooter>
        <p>amondealwis@gmail.com</p>
      </SFooter>
    </BrowserRouter>
  );
}

export default App;

const SHeader = styled.header`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 10px;
  margin-top: 0;
  margin-bottom: 10px;
  position: left;
  display: flex;
  justify-content: space-around;
  background-color: #b2b0b0;
`;

const SFooter = styled.div`
  width: 100%;
  padding-top: 10px;
  margin-bottom: 0;
  padding-bottom: 50px;
  margin-top: 10px;
  background-color: #b2b0b0;
`;
