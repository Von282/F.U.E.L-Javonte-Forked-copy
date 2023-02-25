import React, { useState } from 'react';
import './styleSheet.css';


export default function Quote () {
    const [gallonAmount, setAmount] = useState(0);
    const [quote, setQuote] = useState(0);
    const [submitted, setSub] = useState(false);

    const loggedIn = false;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isNaN(gallonAmount) && gallonAmount > 0) {
            setQuote(calcQuote(gallonAmount))
            setSub(true);
        }
        else{
            alert("Please Enter Positive Integer Value For Valid Quote");
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
                <label> Enter Delivery Address:
                    <input
                        type='text'
                        placeholder="State"
                    />
                    <input
                        type='text'
                        placeholder="City"
                    />
                    <input
                        type='text'
                        placeholder="Address"
                    />
                </label>
                <label> Select Date for Delivery:
                    <input
                        type='text'
                        placeholder="MM/DD/YYYY"
                    />
                </label>
                <input className='submit' type='submit' />
                <h2 className='h2'> Quoted a suggested price: $XX.XX per gallon </h2>
                <h2 className='h2'> Projected Total: {quote}$</h2>
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