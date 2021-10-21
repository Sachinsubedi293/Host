import axios from 'axios';
import React, { useState, useEffect } from 'react'


export const Ability = (params) => {
  const [Api, setApi] = useState([]);
  var Num = 1;

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}/`).then((res) => {
  
      setApi(res.data.abilities);
    }).catch((err) => {
      console.error(err);
    })
  }, [params.id]);
  return (
    <div>
      <div className="accordion accordion-flush" id="accordation1">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="true" aria-controls="flush-collapseTwo">
              Abilities
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordation1">
            <div className="accordion-body">
              <table className="table table-striped mt-2 table-responsive">
                <thead>
                  <tr>
                    <th>S.N.</th>
                    <th>Name</th>
                    <th>Hidden</th>
                    <th>Slot</th>
                  </tr>
                  </thead>
                  <tbody>
                  {Api.map(a => (
                    <tr key={a.ability.name+"huwdggy"}>
                      <td style={{ textTransform: "capitalize",fontWeight:'bold'}}>{Num++}</td>
                      <td style={{ textTransform: "capitalize",fontWeight:'bold'}}>{a.ability.name}</td>
                      <td style={{ textTransform: "capitalize",fontWeight:'bold'}}>{a.is_hidden?<>Yes</>:<>No</>}</td>
                      <td style={{ textTransform: "capitalize",fontWeight:'bold'}}>{a.slot}</td>
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
export default Ability;
