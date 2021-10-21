import axios from 'axios';
import React, { useState, useEffect } from 'react';


export const Moves = (params) => {
    const [Api, setApi] = useState([]);
    var Num = 1;

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}/`).then((res) => {

            setApi(res.data.moves);
            console.log(res.data.moves);
        }).catch((err) => {
            console.error(err);
        })

    }, []);
    return (
        <div>
            <div className="accordion accordion-flush" id="accordation2">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                            Moves
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordation2">
                        <div className="accordion-body">
                            <table className="table table-striped mt-2 table-responsive">
                                <thead>
                                    <tr>
                                        <th>S.N.</th>
                                        <th>Name</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {Api.map(a => (
                                        <tr key={a.move.name + "huwdgsgy"}>
                                            <td style={{ textTransform: "capitalize", fontWeight: 'bold' }}>{Num++}</td>
                                            <td style={{ textTransform: "capitalize", fontWeight: 'bold' }}>{a.move.name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Moves;
