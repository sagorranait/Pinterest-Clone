import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Mainboard from './components/Mainboard'
import unsplash from './api/unsplash'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login'
import { getUser } from './features/userSlice'
import { useSelector } from 'react-redux'


function App() {
  const user = useSelector(getUser)
  const [pins, setNewPins] = useState([])

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/", {
      params: {
        query: term
      }
    })
  }

  const onSearchSubmit = (term) => {
    getImages(term).then((res) => {
      let results = res.data.photos.results;
      let newPins = [
        ...results,
        ...pins
      ];
      newPins.sort(function(a, b){
        return 0.5 - Math.random()
      })
      setNewPins(newPins)
    })
  }

  const getFixedPins = () => {
    let promises = [];
    let pinData = [];

    let pins = ['car', 'food', 'cartoon', 'vegetable', 'carrot', 'broccoli', 'cauliflower', 'corn', 'green pepper'];

    pins.forEach((pinsTerm)=>{
      promises.push(
        getImages(pinsTerm).then((res)=>{
          let results = res.data.photos.results;
          pinData = pinData.concat(results)
          pinData.sort(function(a, b){
            return 0.5 - Math.random()
          })
        })
      )
    })
    Promise.all(promises).then(()=>{
      setNewPins(pinData)
    })
  }

  useEffect(() => {
    getFixedPins()
  }, [])

  return (
    <div className="app">
      {!user ? (
         <Login />
      ):(
        <Router>
        <Switch>
          <Route path="/">
            <Header onSubmit = {onSearchSubmit} />
            <Mainboard pins = {pins} />
          </Route>
        </Switch>
      </Router>
      )}
    </div>
  );
}

export default App;
