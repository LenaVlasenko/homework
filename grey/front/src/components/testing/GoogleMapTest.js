import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React from "react";

import env from "react-dotenv";

export default function GoogleMapTest(props){

    const render = () => {
        return <h1>status</h1>
    }
    // console.log('Key')
    // console.log(env.REACT_APP_GOOGLE_MAP_API_KEY);


    const ref = React.useRef(null);
    const [map, setMap] = React.useState();

    React.useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref, map]);


    return(
        <>
            <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY} render={render}>
                <p>карта начало</p>
                <div style={{"height": "300px"}} ref={ref} />
                <p>карта конец</p>
            </Wrapper>

        </>
    )
}