// Buscador.jsx
import { useState } from 'react';

const Buscador = ( {api, setApi} ) => {
  const [buscar, setBuscar] = useState("");
  const [orden, setOrden] = useState('');

  const buscado = (e) => {
    const value = e.target.value.toLowerCase();
    setBuscar(value);

    let filtrarApi = api.filter((item) => {
      return item.strDrink.toLowerCase().includes(value);
    });
    filtrarApi.length > 0 ? setApi(filtrarApi) : setApi(api);
  };

  const ordenarDatos = (e) => {
    const value = e.target.value;
    setOrden(value);

    let datosOrdenados = [...api];
    if (value === '1') {
      datosOrdenados.sort((a, b) => a.strDrink.localeCompare(b.strDrink));
    } else if (value === '2') {
      datosOrdenados.sort((a, b) => b.strDrink.localeCompare(a.strDrink));
    }

    setApi(datosOrdenados);
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <input
          className="form-control d-flex m-3"
          type="search"
          placeholder="Busca por el Nombre del cocktail"
          aria-label="Search"
          value={buscar}
          onChange={buscado}
        />
        <select 
            className="form-select" 
            aria-label="Default select example"  
            onChange={ordenarDatos} 
            value={orden}>
          <option selected>Selecciona el orden</option>
          <option value="1">orden alfabetico A - Z</option>
          <option value="2">orden alfabetico Z - A</option>
        </select>
      </div>
    </nav>
  );
};

export default Buscador;