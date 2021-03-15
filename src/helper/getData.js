export const getData = async (id) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=ae529f25215a1fd78d6086852aaa6579&units=metric`;
    const resp = await fetch(url);

    const data = await resp.json();
    console.log(data);
    const weatherData =  {
        id:id,
        name:data.name,
        country:data.sys.country,
        weather:data.weather[0],
        temp:data.main,
    };
console.log(weatherData);
    return weatherData;
}