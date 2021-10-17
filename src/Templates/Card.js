import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import grass from './Static/Type-grass.png';
import bug from './Static/Type-bug.png';
import dark from './Static/Type-dark.png';
import dragon from './Static/Type-dragon.png';
import electric from './Static/Type-electric.png';
import fairy from './Static/Type-fairy.png';
import fighting from './Static/Type-fighting.png';
import fire from './Static/Type-fire.png';
import flying from './Static/Type-flying.png';
import ghost from './Static/Type-ghost.png';
import ground from './Static/Type-ground.png';
import ice from './Static/Type-ice.png';
import normal from './Static/Type-normal.png';
import phychic from './Static/Type-phychic.png';
import poison from './Static/Type-poison.png';
import rock from './Static/Type-rock.png';
import steel from './Static/Type-steel.png';
import water from './Static/Type-water.png';
import './Static/css/style.css';


const Card = (props) => {
    const [Api, setApi] = useState([]);
    const [Image, setImage] = useState('');
    const [Type, setType] = useState([]);
    const [Timage, setTimage] = useState('');
    const [Tsimage, setTsimage] = useState('');
    const [Typesecond, setTypesecond] = useState([]);


    useEffect(() => {
        axios.get(props.url).then((result) => {
            let arr = [];
            arr.push(result.data);

            var a = result.data.id;
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
            setImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${a}.png`);

        })
    }, [props.url]);
    return (<>
        {Api.map(a => (
            <div key={a.id}>

                <div className="col mt-4 mb-2 p-2 container-fluid p-0  " key={a.id}>
                    <Link to={"detailpage/" + Api.map(a => a.id)} style={{ textDecoration: 'none', color: 'black' }} >
                        <div className="card shadow m-2 container-fluid" key={a.id} >{Image === '' ? <div className="d-flex justify-content-center" key={a.id}>
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> : <img src={Image} className="card-img-top" key={a.id} alt={a.name} />}

                            <div className="card-body text-left">
                                <h3 className="card-title text-center" style={{ textTransform: "capitalize" }} key={a.id}>{a.id}.{a.name}</h3>
                                <ul type="none">
                                    <li className="card-text text-center font-weight-bold">Type/Types: {Type.map(a => (
                                        <div key={a.name + "njxn"}>
                                            <div> <img src={Timage} alt={Timage} style={{ maxWidth: "1cm" }} /> <strong style={{ textTransform: "capitalize" }} key={a.name + "njxn"}>{a.name}</strong></div>
                                            <div> <img src={Tsimage} alt={Tsimage} style={{ maxWidth: "1cm" }} /> {Typesecond.map(a => (<strong style={{ textTransform: "capitalize" }} key={a.name + "njxn"}>{a.name}</strong>))}</div>
                                        </div>
                                    ))}</li>
                                    <li>
                                        Base Experience(Exp.): <strong key={a.id}>{a.base_experience}</strong>
                                    </li>
                                    <li>
                                        Weight: <strong key={a.id}>{a.weight / 10} kg || {parseFloat((a.weight / 10) * 2.20462).toFixed(3)} lbs.</strong>
                                    </li>
                                    <li>
                                        Height: <strong key={a.id}>{a.height * 10} cm || {(a.height * 10) / 100} m</strong>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        ))}

    </>);
}
export default Card;