import axios from 'axios';
import React, { useState, useEffect } from 'react';

const HeldItem = (params) => {
    const [Api, setApi] = useState([]);
    var Num = 1;

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}/`).then((res) => {

            setApi(res.data.held_items);
        }).catch((err) => {
            console.error(err);
        })
    }, [params.id]);
    return (
        <div>
            {Api.map(a => (
                <div>
                    <div className="accordion accordion-flush" id="accordation4">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="true" aria-controls="flush-collapseFour">
                                    Held Items
                                </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordation4">
                                <div className="accordion-body">
                                    <table className="table table-striped mt-2 table-responsive">
                                        <thead>
                                            <tr>
                                                <th>S.N.</th>
                                                <th>Name</th>
                                            </tr></thead>
                                            <tbody>
                                            {Api.map(a => (
                                                <tr key={a.item.name + "huwdgdsgy" + Num}>
                                                    <td style={{ textTransform: "capitalize", fontWeight: "bold" }}>{Num++}</td>
                                                    <td style={{ textTransform: "capitalize", fontWeight: "bold" }}>{a.item.name}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HeldItem;
