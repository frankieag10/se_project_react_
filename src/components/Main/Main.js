import React from "react";
import "../Main/Main.css";
import { defaultClothingItems } from "../../utils/constants";
import WeatherBackground from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
function Main({ onSelectCard, temp, cardBackground, dayType }) {
  const getWeatherType = () => {
    if (temp >= 84) {
      return "hot";
    } else if (temp >= 66 && temp <= 83) {
      return "warm";
    } else if (temp <= 66) {
      return "cold";
    }
  };
  const weatherType = getWeatherType();

  const filteredCards = defaultClothingItems.filter((card) => {
    return card.weather.toLowerCase() === weatherType;
  });
  return (
    <div className="Main">
      <section
        className="weather"
        id="weather-section"
      >
        <span className="weather__temperature">{temp} °F</span>
        <WeatherBackground
          day={dayType}
          type={cardBackground}
        />
      </section>
      <section
        className="items"
        id="items-section"
      >
        <span className="weather__suggest">Today is {temp}°F / You may want to wear:</span>

        <div className="card-container">
          {filteredCards.map((item) => {
            return (
              <ItemCard
                item={item}
                onSelectCard={onSelectCard}
                key={item._id}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Main;