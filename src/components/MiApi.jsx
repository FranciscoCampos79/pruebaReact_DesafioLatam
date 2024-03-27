//MiApi.jsx
import { useEffect, useState } from "react";

const MiApi = () => {
  const [api, setApi] = useState([]);
  

  useEffect(() => {
    consultarApi()
  }, []);
 
  const consultarApi = async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink';
    const response = await fetch(url);
    const data = await response.json();
    setApi(data.drinks);
    console.log(data)
  };

  return (
    <div className="row">
      {api.map(cocktail => (
        <div key={cocktail.idDrink} className="col-md-4 col-lg-3 col-xl-2 mb-2">
          <div className="card">
            <img src={cocktail.strDrinkThumb} className="card-img-top" alt={cocktail.strDrink} />
            <div className="card-body">
              <h5 className="card-title">{cocktail.strDrink}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MiApi;