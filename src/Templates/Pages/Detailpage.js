import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const Detailpage = () => {
  const [Api, setApi] = useState([]);
  const params = useParams();
  var id = params.id;
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((res) => {
      console.log(res);
      let arr = [];
      arr.push(res.data);
      setApi(arr);

    })
  }, [id]);
  return (<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="localhost:3000">Poke'Dex</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="row row-cols-md-2">

      </div>
    </div>
    <div>{Api.map(a => (<>
                <div class="col">
              <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+a.name+'.png'} class="img-fluid" alt=''/>
                </div>
                
                <div class="col">
    
                </div></>

    ))}</div>
  </>);
}
export default Detailpage;