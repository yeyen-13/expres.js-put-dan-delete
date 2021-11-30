import { useEffect, useState } from "react";
import { useParams } from "react-router";

function CatDetail() {
  let { namaKucing } = useParams();
  console.log(namaKucing);
  let [cat, setCat] = useState([]);
  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/breeds/search?q=${namaKucing}`)
    .then((respons) => respons.json())
      .then((data) => setCat(data));
  }, []);

  console.log(cat);

  return (
    <div>
      <h3>More Info Your Cat</h3>
      {cat.map((cats) =>  (
<div>
<h5>{cats.name}</h5>
        <p>{cats.description}</p>
</div>
       
       ) )}
    </div>
  );
}
export default CatDetail;
