import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';

import Home from './Components/Home';
import OrderForm from "./Components/OrderForm";

import * as yup from 'yup';
import formSchema from './Validation/formSchema';
import axios from "axios";

import './App.css';

// ~~~ A homepage that has a "/" route and links to your form (button, nav bar, or any other type of link is acceptable but must have an id of "order-pizza")

// ~~~ A order form that has a "/pizza" route and shows the form
// ~~~ A form with an id of "pizza-form"

//  ~~~ A name text input field with an id of "name-input"
//  ~~~ Validation for name and the error message is "name must be at least 2 characters" (Use this exact error message to make sure tests pass) ::: VERY IMPORTANT TO USE THAT EXACT ERROR MESSAGE (casing included!)

//  ~~~ A dropdown for pizza size with an id of "size-dropdown"
// ~~~ A checklist for toppings - at least 4 (hint: name each separately!)
// ~~~ Text input for special instructions with an id of "special-text"

// ~~~ An Add to Order button that has an id of "order-button" and that submits form and returns a database record of name, size, toppings and special instructions

const initialFormValues = {
  name: '',
  crust: '',
  sauce: '',
  cheese: '',
  size: '',
  noTop: false,
  pepperoni: false,
  onion: false,
  spinach: false,
  mushroom: false,
  pineapple: false,
  sausage: false,
  everything: false,
  special: '',

}

const initialDisabled = true;

const initialOrderError = {name:''};

const initialOrder = [];

const App = () => {

const [ orders, setOrders ] = useState(initialOrder);

const [formValues, setFormValues] = useState(initialFormValues)

const [orderError, setOrderError] = useState(initialOrderError);

const [ disabled, setDisabled ] = useState(initialDisabled);



  // const validate = (name, value) => {
  //   yup.reach(schema, name)
  //     .validate(value)
  //     .then(() => setOrderError({
  //       ...orderError, [name]: ''}))
  //     .catch(err => setOrderError({ ...orderError, [name]: err.errors[0]}))
  // }

  // const inputChange = (name, value) => {
  //   validate(name,value);
  //   setOrder({ ...order ,
  //     [name]: value
  //   })
  // }

  
    
    const postNewOrder = (order) => {
      axios.post('https://reqres.in/api/orders', order)
      .then(res => {
        console.log(`Results for New Order`, res )
        setOrders([...orders, res.data]);
        
      })
      .catch(err => console.error(err))
    }
    
    const onInputChange = (evt) => {
      const { name, value} = evt.target
      yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setOrderError({
          ...orderError,
          [name]:"",
        })
      })
      .catch((error) => {
        setOrderError({
          ...orderError,
          [name]:error.errors[0],
        })
      })
      setFormValues({
        ...formValues,
        [name]:value,
      })
    }

    const onCheckboxChange = (e) => {
      console.log(`event`, e.target)
      const { name, checked } = e.target
      setFormValues({...formValues, [name]: checked })
    }

  const onSubmit = event => {
    event.preventDefault();
    const newOrder = {
      name: formValues.name,
      crust: formValues.crust,
      sauce: formValues.sauce,
      cheese: formValues.cheese,
      size: formValues.size,
      noTop: formValues.noTop,
      pepperoni: formValues.pepperoni,
      onion: formValues.onion,
      spinach: formValues.spinach,
      mushroom: formValues.mushroom,
      pineapple: formValues.pineapple,
      sausage: formValues.sausage,
      everything: formValues.everything,
      // .filter(top => !!formValues[top]),
      special: formValues.special
      }
      postNewOrder(newOrder);
}
    formSchema.isValid(orders)
      .then(valid => setDisabled(!valid))

  return  ( 
    <div>
        <nav className="constant-header">
          <h1>Lambda Eats</h1>
          <div className="nav-links">
            <Link to='/'>Home</Link>
            <Link to='/pizza'>Order Pizza</Link>
          </div>
        </nav>

      <Switch>
        <Route path='/pizza'>
          <OrderForm
            change={onInputChange}
            onCheckboxChange={onCheckboxChange}
            values={formValues}
            error={orderError}
            submit={onSubmit}
            disabled={disabled}
             />
        </Route>

        <Route exact path='/' id='order-pizza'>
          <Home />
        </Route>

      </Switch> 
      
    </div>
  )
};
export default App;
