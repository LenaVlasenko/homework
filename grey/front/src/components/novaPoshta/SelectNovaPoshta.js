import {useState} from "react";


export default function SelectNovaPoshta(){


    const key = "edcb75117704d71c9355d8f535288be4"

    //Место хранения областей
    const [areas, setAreas] = useState([]);

    //Место получения областей
    const loadAreas = () => {
        let data = {
            "apiKey": key,
            "modelName": "Address",
            "calledMethod": "getAreas",
        }

        //появление данных
        fetch('https://api.novaposhta.ua/v2.0/json/', {
            method: 'POST',
            body: JSON.stringify(data)
        })

            .then(res => {
                return res.json()
            })
            .then(inAreas => {
                console.log(inAreas)
                setAreas(inAreas.data)
            })
            .catch(err=> {
                console.log("err")
                console.log(err)
            })

    }



    return(
        <>
            {/*<button type="button" onClick={loadAreas}>load</button>*/}

            <div className="btn-group">
                <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false" onClick={loadAreas}>
                    load
                </button>

                <ul className="dropdown-menu">
                    {areas.map(area =>(
                        <li key={area.ref}>
                            <a className="dropdown-item" href="#" >
                                {area.Description}
                            </a>
                         </li>
                    ))}
                </ul>

            </div>
        </>
    )
}