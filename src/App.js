import Card from "./Components/Card/Card";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import jokeElements from "./Components/Jokes/JokesData";
import Navbar from "./Components/Navbar/Navbar";
import felix from "./Images/felix.png";
import cards from "./Components/Card/Data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
      {/* {jokeElements} */}

      {/* <div className="contacts">
        <Contact
          img="./images/mr-whiskerson.png"
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact
          img="img/fluffykins.png"
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
        <Contact
          img={felix}
          name="Felix"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
        />
        <Contact
          img={require("./Images/pumpkin.png")}
          name="Pumpkin"
          phone="(0800) CAT KING"
          email="pumpkin@scrimba.com"
        />
      </div> */}
    </div>
  );
}

export default App;
