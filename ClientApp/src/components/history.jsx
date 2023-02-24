import React, { Component } from 'react'

export default function History() {
    const purchases = [15, 20, 25, 18]
    return (
        <React.Fragment>

            <h1>History Page!</h1>
            
            {purchases.map((item, index) => (
                <div className='histBox'>
                    <span className='histItem'> DATE OF PURCHASE </span>
                    <span className='histItem'> MEMO HERE </span>
                    <span className='histItem'> {item} GALLONS PROCESSING </span>
                    <button className='histButton' key={index}> CANCEL </button>
                </div>
            ))}
            
            

        </React.Fragment>
    );
}