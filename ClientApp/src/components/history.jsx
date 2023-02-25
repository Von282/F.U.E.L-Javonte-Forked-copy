import React, { Component } from 'react'

export default function History() {
    const purchases = [100, 200, 250, 180, 500]; /* Note this should be a stack when fully implemented */
    const orderStates = ['Processing', 'Transit', 'Fulfilled'];
    return (
        <React.Fragment>

            <h1>History Page!</h1>
            
            {purchases.map((item, index) => (
                <div className='histBox'>
                    <span className='histItem'> Quoted '##/##/##' </span>
                    <span className='histItem'> {item} GALLONS</span>
                    <span className='histItem'> STATUS: {item%3===1? 'FULFILLED' : 'UNFULFILLED'} </span>
                </div>
            ))}
            
            

        </React.Fragment>
    );
}