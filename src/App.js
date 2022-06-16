import React, {useState, useEffect} from "react";
import CardList from "./CardList";
import Searchfield from "./Searchfield";
import Scroll from "./Scroll";
import styles from "./App.module.css"


const App = () => {
  const [robotsarray, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => setRobots(users))
    }, [])

  const Onsearchchange = (event) => {
    setSearchfield(event.target.value)
  }

  const filteredrobots = robotsarray.filter(
    robots => {
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    });

  return (
    <div>
      <h1 className={styles.heading}><center>Robo Friends</center></h1>
      <Searchfield searchchange={Onsearchchange}/>
      {(() => {
        if (robotsarray.length === 0) {
          return ( <h1 className={styles.load}>Loading!</h1> );
        } else {
          return (
            <div>
              <Scroll>
                <CardList robots={filteredrobots}/>
              </Scroll>
            </div>
          )
        }
      })()}
      
    </div>
  );
}

export default App;