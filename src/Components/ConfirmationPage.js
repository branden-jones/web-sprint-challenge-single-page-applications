import React from "react";

function Confirmation({ details }) {
    console.log(details);
    if(!details) {
        return <h3>One Second as we prepare your pizza...</h3>
    }
    return (
        <div className="confirmation">
            <h2>Thanks</h2>
        </div>
    )
}