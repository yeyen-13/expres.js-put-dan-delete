import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import { Navbar, Nav, Row, Col, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Login from "./Component/Login";

import CatDetail from "./Component/CatDetail";
import Bloct from "./Component/Bloct";
import { useHistory } from "react-router-dom";
import Home from "./Component/Home";
import { useContext } from "react";
import { UserContext } from "./CatContext/UserContext";
function App() {
  // let history=useHistory();
  let { isLogin,setIsLogin } = useContext(UserContext);
  console.log(isLogin);

 function LogOut(){
  setIsLogin(false)
 localStorage["isLogin"]= false
 }

 
  // let takeData = localStorage.getItem("isLogin");
  // let history = useHistory();


  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">YEYEN</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Row md={3}>
                <Col>
                  <Link to="/">Home</Link>
                </Col>
                <Col >
                { isLogin ? <Button onClick={LogOut}>Log Out</Button> : <Link to="/login"
                  
                  >Login</Link>
                 }
          
                </Col>
                {/* <Col>
                  <Link to="/cat/:namaKucing">Cat Detail</Link>
                </Col> */}
              </Row>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          { isLogin  ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
         {isLogin ?  <Redirect to="/"/> :  <Login /> }
        
        </Route>
        <Route path="/cat/:namaKucing">
          <CatDetail />
        </Route>
        <Route path="/:NotFound404">
          <Bloct />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
