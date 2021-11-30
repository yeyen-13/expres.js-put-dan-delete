import { useContext, useEffect } from "react";
import { CatContext } from "../CatContext/CatContext";
import { useHistory } from "react-router-dom";
function Cat() {
  let history = useHistory();
  console.log(CatContext);
  let { cat, setCat } = useContext(CatContext);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds")
      .then((respons) => respons.json())
      .then((data) => setCat(data));
  }, []);

  let handleCat = (kucing) => {
    history.push(`/cat/${kucing}`);
    console.log(kucing);
  };
  console.log(cat);

  return (
    <div>
      <div>
        {cat.map((cats) => (
          <div>
            <h3>{cats.name}</h3>
            <img src={cats.image?.url} width="150" />
            <p>{cats.description}</p>
            <button  onClick={() => handleCat(cats.name)}>More Detail</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Cat;
