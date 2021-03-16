import React,{useState} from 'react';
import {AddCity} from "./components/AddCity";
import {CityCard} from "./components/CityCard";
import logo from "./img/logo.png";

function WeatherApp() {
    const [selections,setSelections] = useState([]);

    return (
      <div className="w-full  text-white" style={{height:"100vh"}}>
          <header className="w-full h-16 shadow-lg p-4 flex">
              <img className="h-full w-auto mr-4" src={logo} alt=""/>
              <h1 className="text-xl font-medium">Weather app</h1>
          </header>
          <main className="w-full h-auto p-4 sm:p-10">
              <h1 className="text-xl font-medium">See your city weather or your interest cities</h1>
              <AddCity setSelections={setSelections}   />
              <section className="w-full flex flex-wrap">
                  { selections.map(city => (<CityCard id={city}/>))}
              </section>
          </main>
      </div>
  );
}

export default WeatherApp;
