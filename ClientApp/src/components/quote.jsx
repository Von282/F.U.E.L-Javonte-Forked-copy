import React, { useState } from 'react';
import './styleSheet.css';


export default function Quote () {
    const [gallonAmount, setAmount] = useState(0);
    const [quote, setQuote] = useState(0);
    const [submitted, setSub] = useState(false);

    const loggedIn = false;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isNaN(gallonAmount)) {
            setQuote(calcQuote(gallonAmount))
            setSub(true);
        }
        else{
            alert("Must Enter Positive Integer Value");
        }
    }

    return (
        <React.Fragment>
            <h1>Get A Quote Today!</h1>
            <form onSubmit={ handleSubmit } >
                <label> Enter Fuel Amount in Gallons: 
                    <input
                        type='text'
                        inputMode = 'numeric'
                        placeholder="gallon amount"
                        onChange={(e) => { setAmount(e.target.value); } }
                    />
                </label>
                <input className = 'submit' type = 'submit'/>
                <h2 className = 'h2'> Charge Amount: {quote}$</h2>
            </form>
            {submitted && <button type='button' className={!loggedIn ? 'login' : 'purchase'}>{!loggedIn ? 'Login to Purchase' : 'Purchase Now'}</button>}
        </React.Fragment>
    );
}

function calcQuote(gallons) {
    /* Placeholder Calculation */
    console.log(gallons);
    let x = 0;
    if (gallons > 1000) {
        x = 2 * gallons + 1000;
    }
    else {
        x = 3 * gallons;
    }
    return x;
}