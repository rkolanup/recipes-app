import React, {useState} from "react";
import './App.css';
import {Container} from 'react-bootstrap';
import RecipieCard from './components/RecipieCard/RecipieCard';
import Searchform from './components/Searchform/Searchform';

function App() {
  const [data, setData] = useState([]);
  const [, setError] = useState();
  const [, setSearch] = useState('');

  const sendSearchToApp = (food)=>{   
    setSearch(food);

    fetch(`https://api.edamam.com/search?q=${food}&app_id=${process.env.REACT_APP_CLIENT_ID}&app_key=${process.env.REACT_APP_MY_API_KEY}&from=0&to=100`)
      .then((response)=>response.json())
      .then((data)=> {
        console.log('Hello: ',data)
        setData(data);
      })
      .catch((err) => {
        setError(err);
      });
      
    setSearch('');   
  }
  return (
  <Container fluid className = "App app-wrapper">
    <div className = "recipe-wrapper">
      <h1 className = "app-title">Welcome to Food App</h1>
      <Searchform sendSearchToApp={sendSearchToApp}/>
      <RecipieCard data={data}/>
    </div>
  </Container>  
  );
}

export default App;
