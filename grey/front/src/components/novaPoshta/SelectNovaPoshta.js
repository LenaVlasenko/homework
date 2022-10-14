import {useState} from "react";


export default function SelectNovaPoshta(props){
    // console.log("Props")
    // console.log(props)

    //ключ
    const key = process.env.REACT_APP_NOVAPOSHTA_API_KEY

    //Место хранения областей
    const [areas, setAreas] = useState([]);

    //Метод получения областей
    const loadAreas = () => {
        let data = {
            "apiKey": key,
            "modelName": "Address",
            "calledMethod": "getAreas"
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

    //Метод получения городов
    const [cities, setCities] = useState([])
    const changeSelectedArea=(ev) =>{
        // console.log("User Select area: ")
        // console.log(ev.target.value)

        let data = {
            "apiKey": key,
            "modelName": "Address",
            "calledMethod": "getCities",
            "methodProperties": {
                "AreaRef" :ev.target.value,
            }
        }

        //появление данных
        fetch('https://api.novaposhta.ua/v2.0/json/', {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(res => {
                return res.json()
            })
            .then(inCities => {
                console.log(inCities)
                setCities(inCities.data)
            })
            .catch(err=> {
                console.log("err")
                console.log(err)
            })
    }

    //Метод получения отделений
    const [warehouses, setWarehouses] = useState([])
    const changeSelectedCity = (ev)=> {
        // console.log("User Select area: ")
        // console.log(ev.target.value)

        let data = {
            "apiKey": key,
            "modelName": "Address",
            "calledMethod": "getWarehouses",
            "methodProperties": {
                "CityRef" :ev.target.value,
            }
        }

        fetch('https://api.novaposhta.ua/v2.0/json/', {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(res => {
                return res.json()
            })
            .then(inWarehouses => {
                console.log(inWarehouses)
                setWarehouses(inWarehouses.data)
            })
            .catch(err=> {
                console.log("err")
                console.log(err)
            })
    }




    return(
        <>
            <button type="button" onClick={loadAreas}>load</button>
            <select onChange={changeSelectedArea}>
                {areas.map(area => (
                    <option key={area.Ref} value={area.Ref}>{area.Description}</option>

                ))}
            </select>
            <select onChange={changeSelectedCity}>
                {cities.map(city => (
                    <option key={city.Ref} value={city.Ref}>{city.Description}</option>
                ))}
            </select>
            <select>
                {warehouses.map(warehouse => (
                    <option key={warehouse.Ref} value={warehouse.Ref}>{warehouse.Description}</option>
                ))}
            </select>

            {/*<div className="btn-group">*/}
            {/*    <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown"*/}
            {/*            aria-expanded="false" onClick={loadAreas}>*/}
            {/*        load*/}
            {/*    </button>*/}

            {/*    <ul className="dropdown-menu">*/}
            {/*        {areas.map(area =>(*/}
            {/*            <li key={area.Ref}>*/}
            {/*                <a className="dropdown-item" href="#" >*/}
            {/*                    {area.Description}*/}
            {/*                </a>*/}
            {/*             </li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}

            {/*</div>*/}



            {/*<table className="table" onChange={changeSelectedCity}>*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th scope="col">Область</th>*/}
            {/*        <th scope="col">Населений пункт</th>*/}
            {/*        <th scope="col">Відділення до</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    <tr>*/}
            {/*        <th scope="row">*/}
            {/*        {*/}
            {/*            <p>{areas.Description}</p>*/}
            {/*        }*/}
            {/*        </th>*/}

            {/*            <td>*/}
            {/*                {cities.map(city => (*/}
            {/*                    <p key={city.Ref} value={city.Ref}>{city.Description}</p>*/}
            {/*                ))}*/}
            {/*            </td>*/}

            {/*            <td>*/}
            {/*                {warehouses.map(warehouse => (*/}
            {/*                    <p key={warehouse.Ref} value={warehouse.Ref}>{warehouse.Description}</p>*/}
            {/*                ))}*/}
            {/*            </td>*/}
            {/*        /!*<th scope="row">{area.Description}</th>*!/*/}
            {/*        /!*<td>{city.Description}</td>*!/*/}
            {/*        /!*<td>{warehouses.Description}</td>*!/*/}
            {/*    </tr>*/}
            {/*    </tbody>*/}
            {/*</table>*/}
        </>
    )
}