import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './Card';
// import Navbar from './Components/Navbar';


const Index = () => {
    const [Api, setApi] = useState([]);
    const [Mainlink, setMainlink] = useState(`https://pokeapi.co/api/v2/pokemon/`);
    const [Next, setNext] = useState(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20`);
    const [Previous, setPrevious] = useState(null);
    const [Count, setCount] = useState();
    const [id, setid] = useState(1);
    const [Mode, setMode] = useState('All');
    const [toggler, settoggler] = useState(false);
    const [MainApi, setMainApi] = useState('');

    const Search = () => {
      var a = document.getElementById('search').value;
      a.setAttribute('value','')
    }

    function filterByValue(array, string) {
        return array.filter(o =>
            Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
    }
    const SearchChange = (e) => {

        if (e.target.value === '') {
            setApi(MainApi)
        } else {
            setApi(filterByValue(Api, e.target.value))
        }



    }

    useEffect(() => {
        axios.get(Mainlink).then((res) => {
            setApi(res.data.results);
            setNext(res.data.next);
            setMainApi(res.data.results);
            setPrevious(res.data.previous);
            setCount(res.data.count)
            
        })
            .catch((err) => {
                console.error(err);
            })
    }, [Mainlink]);

    const Nextslice = () => {
        if (Next !== null) {
            setMainlink(Next);
            setid(id + 1);
        }

    }
    useEffect(() => {
        if (toggler === true) {
            setMainlink(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118`)
        } else {
            setMainlink(`https://pokeapi.co/api/v2/pokemon/`)
        }
    }, [toggler]);
    const ModeChanger = () => {

        toggler ? settoggler(false) : settoggler(true);
        setMode('All');


    }
    const Previousslice = () => {
        if (Previous !== null) {
            setMainlink(Previous);
            setid(id - 1);
        }
    }
    if (Api === 0) {
        return <><div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div></>
    }

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
                    <form className="d-flex ">
                        <input className="form-control me-1" type="text" placeholder="Search" aria-label="Search" id="search" onChange={SearchChange} />
                        <button className="btn btn-outline-success me-4" type="submit" onClick={Search} >Clear</button>
                    </form>
                    <div className="form-check form-switch">
                        <label className="form-check-label" style={{ color: "white" }} htmlFor="flexSwitchCheckDefault">{Mode}</label>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={ModeChanger}
                        />

                    </div>
                </div>
            </div>
        </nav>

        <div className="container-fluid text-center ">

            <h1 className="text-center">Pokémon</h1>
            <h3 style={{ color: 'red', fontWeight: 'bold' }}>Total Pokémons:-{Count}</h3>
            <div className="row row-cols-md-4">
                {Api.map(a => (
                    <div key={"2dwm,32" + a.url} >
                        <Card url={a.url}
                            key={"2dwm,32" + a.url} />
                    </div>
                ))}
            </div>
            <div className="btn-group text-center mt-2 mb-2" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary" onClick={Previousslice}>&lt;&lt;&lt;Previous</button>
                <button type="button" className="btn btn-outline-primary">{id}</button>
                <button type="button" className="btn btn-outline-primary" onClick={Nextslice}>Next&gt;&gt;&gt;</button>
            </div>
        </div></>);
}
export default Index;