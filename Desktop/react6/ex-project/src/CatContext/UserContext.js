import { useEffect } from "react"
import { createContext, useState } from "react"
export let UserContext= createContext()
function UserProvider(props){
    let [isLogin,setIsLogin]=useState(false)
    useEffect(()=>{
 let DataLogin = localStorage.getItem("isLogin")
 let parsData = JSON.parse(DataLogin)
 setIsLogin(parsData)

  
    },[])
  
    return(
        <UserContext.Provider value={{ isLogin , setIsLogin }}>
      {props.children}
    </UserContext.Provider>
    )
}
export default UserProvider