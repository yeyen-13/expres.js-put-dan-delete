import { useContext, useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { Card, Button, Nav, Link } from "react-bootstrap";
import { UserContext } from "../CatContext/UserContext";
function Login() {

let{isLogin,setIsLogin}=useContext(UserContext)

  let history = useHistory();
  let [user, setUser] = useState({
    username: "",
    password: "",
  });
let [dataUser, setDataUser] = useState([]);

  let handleUser = (event) => {
    let { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  console.log(user);
 
  useEffect(() => {
    fetch("https://618e642750e24d0017ce1265.mockapi.io/user")
      .then((respons) => respons.json())

      .then((data) => setDataUser(data));
    console.log(dataUser);
  
  }, []);

  let handleLogin = (e) => {
    e.preventDefault();
    let userDataLogin = dataUser.find(item => item.username === user.username && item.password === user.password )
    if(userDataLogin){
      localStorage.setItem('isLogin',true)
    setIsLogin(true)
      history.push("/")
    }else{
      alert("priksa kembali nama dan passwoard anda")
    }
  };
  console.log(isLogin)
 
  

  return (
    <div>
      <>
        <Card className="col-md-5 mx-auto">
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <Card.Title>Plese Login</Card.Title>

            <input
              type="text"
              placeholder="username"
              onChange={handleUser}
              label="username"
              name="username"
              value={user.username}
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="password"
              onChange={handleUser}
              label="password"
              name="password"
              value={user.password}
            />

            <br />
            <br />
            <Button
              variant="primary"
              onClick={handleLogin}
          
              type="submit"
           
            >
              login
            </Button>
            <p>
              <a href="#">forget Fasswoard ?</a>
            </p>
            <p>
              {" "}
              <a href="./Register">cread acun</a>
            </p>
          </Card.Body>
        </Card>
      </>
    </div>
  );
}
export default Login;
