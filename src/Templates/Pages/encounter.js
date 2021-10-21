import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Encounter = (params) => {
    const [Api, setApi] = useState([]);
    const [Version_details, setVersion_details] = useState([]);
    var Num = 1;

    useEffect(() => {
        axios.get(params.url).then((res) => {
            setApi(res.data);
            console.log(res);
            console.log(res.data.map(a=>a.version_details));
            console.log(res.data.map(a=>a.version_details.map(a=>a)));
            setVersion_details(res.data.map(a=>a.version_details.map(a=>{return a})));
        }).catch((err) => {
            console.error(err);
        })
    }, []);
    return (
        <div>
            <div className="accordion accordion-flush" id="accordation5">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="true" aria-controls="flush-collapseFive">
                            Encounter Area
                        </button>
                    </h2>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordation5">
                        <div className="accordion-body">
                            <table className="table table-striped mt-2 table-responsive">
                                <thead>
                                    <tr>
                                        <th>S.N.</th>
                                        <th>Name of Area</th>
                               

                                    </tr>
                                </thead>
                                <tbody>
                                    {Api.map(a => (
                                        <tr key={a.location_area.name + "huwdgsgy"+ Num}>
                                            <td style={{ textTransform: "capitalize", fontWeight: "bold" }}>{Num++}</td>
                                            <td style={{ textTransform: "capitalize", fontWeight: "bold" }}>{a.location_area.name}</td>

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

export default Encounter
