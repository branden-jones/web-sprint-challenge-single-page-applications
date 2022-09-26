import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Components/Home';
import OrderForm from "./Components/OrderForm";
import * as yup from 'yup';
import schema from './Validation/formSchema'


// ~~~ A homepage that has a "/" route and links to your form (button, nav bar, or any other type of link is acceptable but must have an id of "order-pizza")

// ~~~ A order form that has a "/pizza" route and shows the form
// ~~~ A form with an id of "pizza-form"

//  ~~~ A name text input field with an id of "name-input"
//  ~~~ Validation for name and the error message is "name must be at least 2 characters" (Use this exact error message to make sure tests pass) ::: VERY IMPORTANT TO USE THAT EXACT ERROR MESSAGE (casing included!)

//  ~~~ A dropdown for pizza size with an id of "size-dropdown"
// ~~~ A checklist for toppings - at least 4 (hint: name each separately!)
// ~~~ Text input for special instructions with an id of "special-text"

// ~~~ An Add to Order button that has an id of "order-button" and that submits form and returns a database record of name, size, toppings and special instructions

const initialOrder = {
  name: '',
  crust: 'hand-tossed',
  sauce: 'tomato/marinara',
  cheese: 'regular',
  size: '16in',
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



const App = () => {

const [ order, setOrder ] = useState({initialOrder});

const [orderError, setOrderError] = useState('');

const [ disabled, setDisabled ] = useState(initialDisabled)


const postNewOrder = newOrder => {
  console.log(`you forgot to post new order... ding dong!!`, newOrder)
  // .then(res => {
    // console.log(res);
  // })
  // .catch(err => console.error(err))
  // .finally(() => setOrder(initialOrder))
}

  const validate = (name, value) => {
    yup.reach(schema,name)
      .validate(value)
      .then(() => setOrderError({
        // console.log(`results`, res);
        ...orderError, [name]: ''}))
      .catch(err => setOrderError({ ...orderError, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name,value);
    setOrder({
      ...order,
      [name]: value
    })
  }

  const orderSubmit = () => {
    const newOrder = {
    name: order.name.trim(),
    crust: order.crust.trim(),
    sauce: order.sauce.trim(),
    cheese: order.cheese.trim(),
    size: order.size.trim(),
    toppings: [
      'noTop',
      'pepperoni',
      'onion',
      'spinach',
      'mushroom',
      'pineapple',
      'sausage',
      'everything'
    ].filter(top => !!order[top]),
    special: order.special

    }
    postNewOrder(newOrder);
  }

  useEffect(() => {
    schema.isValid(order).then(valid => setDisabled(!valid))
  }, [order])

  return (
    <div>
        <nav className="constant-header">
          <h1>Lambda Eats</h1>
          <div className="nav-links">
            <Link to='/'>Home</Link>
            <Link to='/pizza'>Order Some Pizza</Link>
          </div>
        </nav>

      <Switch>
       
        <Route path='/pizza'>
          <OrderForm 
            change={inputChange}
            values={order}
            error={orderError}
            submit={orderSubmit}
            disabled={disabled}
             />
        </Route>

        <Route path='/'>
          <Home />
        </Route>

      </Switch>
    </div>
  );
};
export default App;
