import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Status = (params) => {
    const [Api, setApi] = useState([]);
    var Num = 1;

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}/`).then((res) => {

            setApi(res.data.stats);
        }).catch((err) => {
            console.error(err);
        })
    }, [params.id]);
    return (
        <div>
            <div className="accordion accordion-flush" id="accordation3">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="true" aria-controls="flush-collapseThree">
                            Stats
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordation3">
                        <div className="accordion-body">
                        <table className="table table-striped mt-2 table-responsive">
                               <thead>
                                    <tr>
                                        <th>S.N.</th>
                                        <th>Name</th>
                                        <th>Points</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                {Api.map(a => (
                                    <tr key={a.stat.name + "huwdgsgy"}>
                                        <td style={{ textTransform: "capitalize", fontWeight: "bold" }}>{Num++}</td>
                                        <td style={{ textTransform: "capitalize", fontWeight: "bold" }}>{a.stat.name}</td>
                                        <td style={{ textTransform: "capitalize", fontWeight: "bold" }}>{a.base_stat}</td>
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

export default Status;
