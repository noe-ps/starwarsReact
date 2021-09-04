import {useState, useEffect} from 'react';
import { NavBar } from './components/NavBar';
import './App.css';

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchPeople(){
      let res = await fetch('https://swapi.dev/api/people');
      let data = await res.json();
      setPeople(data.results);
    }
    async function  fetchPlanets(){
      let res = await fetch('https://swapi.dev/api/planets')
      let data = await res.json();
      setPlanets(data.results);
    }

    fetchPeople();
    fetchPlanets();
  }, []);


  return (
    <div className="App">
      <NavBar/>
    </div>
  );
}

export default App;
