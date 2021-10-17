import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import grass from '../Static/Type-grass.png';
import bug from '../Static/Type-bug.png';
import dark from '../Static/Type-dark.png';
import dragon from '../Static/Type-dragon.png';
import electric from '../Static/Type-electric.png';
import fairy from '../Static/Type-fairy.png';
import fighting from '../Static/Type-fighting.png';
import fire from '../Static/Type-fire.png';
import flying from '../Static/Type-flying.png';
import ghost from '../Static/Type-ghost.png';
import ground from '../Static/Type-ground.png';
import ice from '../Static/Type-ice.png';
import normal from '../Static/Type-normal.png';
import phychic from '../Static/Type-phychic.png';
import poison from '../Static/Type-poison.png';
import rock from '../Static/Type-rock.png';
import steel from '../Static/Type-steel.png';
import water from '../Static/Type-water.png';
import '../Static/css/style.css';


const Detailpage = () => {
  const [Api, setApi] = useState([]);
  const [Type, setType] = useState([]);
  const [Timage, setTimage] = useState('');
  const [Tsimage, setTsimage] = useState('');
  const [Typesecond, setTypesecond] = useState([]);
const params = useParams();

  var id = params.id;
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((result) => {
      console.log(result);
      let arr = [];
      arr.push(result.data);
      setApi(arr);

      let array = [];
      array.push(result.data.types[0].type);
      if (result.data.types[0].type.name === 'grass') {
          setTimage(grass);
      } else if (result.data.types[0].type.name === 'bug') {
          setTimage(bug);
      } else if (result.data.types[0].type.name === 'dark') {
          setTimage(dark);
      } else if (result.data.types[0].type.name === 'dragon') {
          setTimage(dragon);
      } else if (result.data.types[0].type.name === 'electric') {
          setTimage(electric);
      } else if (result.data.types[0].type.name === 'fairy') {
          setTimage(fairy);
      } else if (result.data.types[0].type.name === 'fighting') {
          setTimage(fighting);
      } else if (result.data.types[0].type.name === 'fire') {
          setTimage(fire);
      } else if (result.data.types[0].type.name === 'ghost') {
          setTimage(ghost);
      } else if (result.data.types[0].type.name === 'ground') {
          setTimage(ground);
      } else if (result.data.types[0].type.name === 'ice') {
          setTimage(ice);
      } else if (result.data.types[0].type.name === 'normal') {
          setTimage(normal);
      } else if (result.data.types[0].type.name === 'phychic') {
          setTimage(phychic);
      } else if (result.data.types[0].type.name === 'poison') {
          setTimage(poison);
      } else if (result.data.types[0].type.name === 'rock') {
          setTimage(rock);
      } else if (result.data.types[0].type.name === 'steel') {
          setTimage(steel);
      } else if (result.data.types[0].type.name === 'water') {
          setTimage(water);
      } else {
          setTimage(flying);
      }
      setType(array);
      let array2 = [];
      if (result.data.types.length === 2) {
          array2.push(result.data.types[1].type);
          setTypesecond(array2);

          if (result.data.types[1].type.name === 'grass') {
              setTsimage(grass);
          } else if (result.data.types[1].type.name === 'bug') {
              setTsimage(bug);
          } else if (result.data.types[1].type.name === 'dark') {
              setTsimage(dark);
          } else if (result.data.types[1].type.name === 'dragon') {
              setTsimage(dragon);
          } else if (result.data.types[1].type.name === 'electric') {
              setTsimage(electric);
          } else if (result.data.types[1].type.name === 'fairy') {
              setTsimage(fairy);
          } else if (result.data.types[1].type.name === 'fighting') {
              setTsimage(fighting);
          } else if (result.data.types[1].type.name === 'fire') {
              setTsimage(fire);
          } else if (result.data.types[1].type.name === 'ghost') {
              setTsimage(ghost);
          } else if (result.data.types[1].type.name === 'ground') {
              setTsimage(ground);
          } else if (result.data.types[1].type.name === 'ice') {
              setTsimage(ice);
          } else if (result.data.types[1].type.name === 'normal') {
              setTsimage(normal);
          } else if (result.data.types[1].type.name === 'phychic') {
              setTsimage(phychic);
          } else if (result.data.types[1].type.name === 'poison') {
              setTsimage(poison);
          } else if (result.data.types[1].type.name === 'rock') {
              setTsimage(rock);
          } else if (result.data.types[1].type.name === 'steel') {
              setTsimage(steel);
          } else if (result.data.types[1].type.name === 'water') {
              setTsimage(water);
          } else {
              setTsimage(flying);
          }
      }

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
    <div className="container">
      <div className="row row-cols-md-2">
    {Api.map(a => (<>
                <div className="col-md-6 container-fluid p-0">
                <div className="card" style={{transform: 'none'}}>
                  <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+a.id+".png"} className="rounded container-fluid" alt={a.name}  />
                 <div className=" row row-cols-md-4">
                   <div className="col">
                   <img src={a.sprites.front_default} className="img-fluid container-fluid p-0" alt={a.name} />
                   </div>
                   <div className="col">
                   <img src={a.sprites.front_shiny} className="img-fluid container-fluid p-0" alt={a.name} />
                   </div>
                   <div className="col">
                   <img src={a.sprites.back_default} className="img-fluid container-fluid p-0" alt={a.name} />
                   </div>
                   <div className="col">
                   <img src={a.sprites.back_shiny} className="img-fluid container-fluid p-0" alt={a.name} />
                   </div>
                 </div>
                  </div>
                </div>
                <div className="col-md-6 container-fluid p-0">
                <div className="card" style={{transform: 'none'}}>
                  <h1 className="text-center mt-5" style={{color: 'red', textTransform:'capitalize', fontWeight:'bold'}}>{a.name}</h1>
                  <h3 className="text-center mt-2">Pokemon Details</h3>
                  <table className="table table-striped table-responsive">
                      <tbody>
                        <tr>
                          <td >Id:</td>
                          <td style={{textTransform: "capitalize",fontWeight: "bold"}}>{a.id}</td>
                        </tr>
                        <tr>
                          <td>Name:</td>
                          <td style={{textTransform: "capitalize",fontWeight: "bold"}}>{a.name}</td>
                          
                        </tr>
                        <tr>
                          <td>Weight:
                          </td>
                          <td style={{textTransform: "capitalize",fontWeight: "bold"}}>{a.weight / 10} kg || {parseFloat((a.weight / 10) * 2.20462).toFixed(3)} lbs.</td>
                        </tr>
                        <tr>
                          <td>Height:</td>
                          <td style={{textTransform: "capitalize",fontWeight: "bold"}}>{a.height * 10} cm || {(a.height * 10) / 100} m</td>
                        </tr>
                        <tr>
                          <td>Base Experience(Exp.):</td>
                          <td style={{textTransform: "capitalize",fontWeight: "bold"}}>{a.base_experience}</td>
                        </tr>
                        <tr>
                          <td>Order Num:</td>
                          <td style={{textTransform: "capitalize",fontWeight: "bold"}}>{a.order}</td>
                        </tr>
                        <tr>
                          <td>Is Default:</td>
                          <td style={{textTransform: "capitalize",fontWeight: "bold"}}>{a.is_default?<>Yes</>:<>No</>}</td>
                        </tr>
                        <tr>
                          <td>Type/Types:</td>
                          <td style={{textTransform: "capitalize",fontWeight: "bold"}}>{Type.map(a => (
                                        <div key={a.name + "njxn"}>
                                            <div> <img src={Timage} alt={Timage} style={{ maxWidth: "1cm" }} /> <strong style={{ textTransform: "capitalize" }} key={a.name + "njxn"}>{a.name}</strong></div>
                                            <div> <img src={Tsimage} alt={Tsimage} style={{ maxWidth: "1cm" }} /> {Typesecond.map(a => (<strong style={{ textTransform: "capitalize" }} key={a.name + "njxn"}>{a.name}</strong>))}</div>
                                        </div>
                                    ))}</td>
                        </tr>
                      </tbody>
                  </table>
                  
                  </div>
                </div></>

    ))}</div></div>
  </>);
}
export default Detailpage;