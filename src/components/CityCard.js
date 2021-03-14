import React from 'react';
import {useFetchData} from "../hooks/useFetchData";

//import images
import day01 from ".././img/weather/01d.png";
import nig01 from ".././img/weather/01n.png";
import day02 from ".././img/weather/02d.png";
import nig02 from ".././img/weather/02n.png";
import day03 from ".././img/weather/03d.png";
import nig03 from ".././img/weather/03n.png";
import day04 from ".././img/weather/04d.png";
import nig04 from ".././img/weather/04n.png";
import day09 from ".././img/weather/09d.png";
import nig09 from ".././img/weather/09n.png";
import day10 from ".././img/weather/10d.png";
import nig10 from ".././img/weather/10n.png";
import day11 from ".././img/weather/11d.png";
import nig11 from ".././img/weather/11n.png";
import day13 from ".././img/weather/13d.png";
import nig13 from ".././img/weather/13n.png";
import day50 from ".././img/weather/50d.png";
import nig50 from ".././img/weather/50n.png";

export const CityCard = ({id}) => {

    const {data, loading} = useFetchData(id);

    const funImg = (icon) => {

        switch (icon) {
            case "01d":
                return day01;
            case "01n":
                return nig01;
            case "02d":
                return day02;
            case "02n":
                return nig02;
            case "03d":
                return day03;
            case "03n":
                return nig03;
            case "04d":
                return day04;
            case "04n":
                return nig04;
            case "09d":
                return day09;
            case "09n":
                return nig09;
            case "10d":
                return day10;
            case "10n":
                return nig10;
            case "11d":
                return day11;
            case "11n":
                return nig11;
            case "13d":
                return day13;
            case "13n":
                return nig13;
            case "50d":
                return day50;
            case "50n":
                return nig50;
            default:
                return day01;
        }
    }

    // eslint-disable-next-line no-extend-native
    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    return (
        <div className="h-48 w-full 2xl:w-1/5 md:w-5/12 bg-gray-800 shadow-2xl rounded-lg flex align-items m-0 mt-4 mb-4 lg:m-4 md:m-4 p-6">
            {loading ?
                <h1>Loading...</h1> :
                <>
                    <div className="flex flex-col justify-center h-full w-3/5">
                        <h3 className="text-lg lg:text-xl md:text-lg font-bold mb-1">{data.weather.description.toString().capitalize()}</h3>
                        <h1 className="text-xl lg:text-5xl md:text-3xl mb-2">{parseInt(data.temp.temp)}<sup>ºC</sup></h1>
                        <h5 className="text-base lg:text-lg md:text-base mb-1">{`${data.name}, ${data.country}`}</h5>
                    </div>
                    <img className="h-3/5 lg:h-4/5 md:h-3/5 w-auto"
                         src={funImg(data.weather.icon)}
                         style={{placeSelf: "center center"}}
                         alt={data.weather.description}/>
                </>
            }
        </div>
    );
}