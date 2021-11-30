import { createContext, useState } from "react";
export let CatContext = createContext();
function CatProvider(props) {
  let [cat, setCat] = useState([]);
 
  return (
    <CatContext.Provider value={{ cat, setCat }}>
      {props.children}
    </CatContext.Provider>
  );
}
export default CatProvider;
