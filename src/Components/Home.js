import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {

    return (
        <div id='order-pizza' >
            <h1>Lambda Eats</h1>
            <h2>Build Your Own Pizza!</h2>
            <h4>Cause we only got on person willing to work and they NEED to told how to make a pizza...</h4>
            <img className='home-image' src='https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVwcGVyb25pJTIwcGl6emF8ZW58MHx8MHx8&w=1000&q=80' alt='Delicious Pepperoni Pizza' />
        </div>
    )
}