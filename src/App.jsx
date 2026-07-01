import { useState } from "react";
import "./App.css";

function App() {
  const dogs = [
    {
      image: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
      breed: "Afghan Hound",
      origin: "Afghanistan",
      group: "Hound",
    },
    {
      image: "https://images.dog.ceo/breeds/retriever-golden/n02099601_200.jpg",
      breed: "Golden Retriever",
      origin: "Scotland",
      group: "Sporting",
    },
    {
      image: "https://images.dog.ceo/breeds/husky/n02110185_1469.jpg",
      breed: "Siberian Husky",
      origin: "Russia",
      group: "Working",
    },
    {
      image: "https://images.dog.ceo/breeds/poodle-standard/n02113799_447.jpg",
      breed: "Poodle",
      origin: "Germany",
      group: "Non-Sporting",
    },
    {
      image: "https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg",
      breed: "Beagle",
      origin: "England",
      group: "Hound",
    },
  ];

  const [currentDog, setCurrentDog] = useState(null);
  const [banList, setBanList] = useState([]);

  const discoverDog = () => {
    let availableDogs = dogs.filter(
      (dog) =>
        !banList.includes(dog.breed) &&
        !banList.includes(dog.origin) &&
        !banList.includes(dog.group)
    );

    if (availableDogs.length === 0) {
      alert("Everything is banned! Remove something from the ban list.");
      return;
    }

    const randomDog =
      availableDogs[Math.floor(Math.random() * availableDogs.length)];

    setCurrentDog(randomDog);
  };

  const toggleBan = (value) => {
    if (banList.includes(value)) {
      setBanList(banList.filter((item) => item !== value));
    } else {
      setBanList([...banList, value]);
    }
  };

  return (
    <div className="App">
      <h1>Veni Vici - Discover Dogs!</h1>
      <p>Discover random dog breeds from around the world.</p>

      <button onClick={discoverDog}>Discover</button>

      {currentDog && (
        <div>
          <img src={currentDog.image} width="400" alt={currentDog.breed} />

          <h2
            onClick={() => toggleBan(currentDog.breed)}
            style={{ cursor: "pointer" }}
          >
            Breed: {currentDog.breed}
          </h2>

          <h3
            onClick={() => toggleBan(currentDog.origin)}
            style={{ cursor: "pointer" }}
          >
            Origin: {currentDog.origin}
          </h3>

          <p
            onClick={() => toggleBan(currentDog.group)}
            style={{ cursor: "pointer" }}
          >
            Group: {currentDog.group}
          </p>
        </div>
      )}

      <h2>Ban List</h2>

      {banList.map((item, index) => (
        <button key={index} onClick={() => toggleBan(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default App;