import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import Routing from './services/Routing';
import { useDispatch } from 'react-redux';
import { setRestaurants } from "./components/redux/restaurants/RestaurantsSlicer";
import { fetchChefsData, fetchDishesData, fetchRestaurantsData, getChef, getDishesByID } from './fetchData';
import { setChefs } from './components/redux/chefs/ChefsSlicer';
import { setDishes, setDishID } from './components/redux/dishes/DishesSlicer';
import { setChef } from './components/redux/chef/ChefSlicer';
import { setDishArray } from './components/redux/dish/DishSlicer';
import { useSelector } from 'react-redux';
import { ScrollContext, useScroll } from './Helpers/ScrollContext';



function App() {

  const scroll = useScroll();


  const dishesID = useSelector((state: any) => state.dishesID.value)
  const dispatch = useDispatch();
  const fetchRestaurants = useCallback(async () => {
    const restaurants = await fetchRestaurantsData();
    if(restaurants){
      dispatch(setRestaurants(restaurants))
    }
  }, []);
  const fetchChefs = useCallback(async () => {
    const chefs = await fetchChefsData();
    if(chefs){
      dispatch(setChefs(chefs))
    }
  }, []);

  const fetchDishes = useCallback(async () => {
    const dishes = await fetchDishesData();
    if(dishes){
      dispatch(setDishes(dishes))
    }
  }, []);

  const fetchChef= useCallback(async () => {
    var chef = await getChef("Gordon Ramsay");
    if(chef){
      dispatch(setChef(chef))
      const newChef = chef
      dispatch(setChef(newChef))

    }
  }, [getChef]);
  const fetchDish= useCallback(async () => {
    var dish = await getDishesByID(dishesID);
    if(dish.length > 0){
      dispatch(setDishArray(dish))
    }
  }, [getChef]);




  useEffect(() => {
    fetchChef();
    fetchDish();
    fetchRestaurants();
    fetchChefs();
    fetchDishes();
  }, [fetchRestaurants, fetchChefs, fetchDish, getChef, fetchDishes])



  return (
    <ScrollContext.Provider value={scroll}>
    <Routing/>
    </ScrollContext.Provider>

  )
};

export default App;
