
import {useState} from "react";
import {useEffect} from "react";
import {getData} from "../helper/getData";

export const useFetchData = (id) => {

    const [state, setState] = useState({data: {}, loading: true});

    useEffect(() => {
            getData(id).then(weatherData => {
                console.log(weatherData);
            setTimeout(() => {
                setState({data: weatherData, loading: false})
            }, 3000);
        })
    }, [id]);
    console.log(state);

    return state;
}