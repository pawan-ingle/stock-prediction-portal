import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Button from './Button'


const Main = () => {
  return (
    <>
    
    <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text-light'>Stock Prediction Portal</h1>
            <p className='text-light lead'>
                Predict smarter investments with AI-powered stock market analysis. Our platform combines historical data, machine learning models, 
                and interactive visualizations to deliver accurate stock price forecasts and market insights.
            </p>
            <Button text='Login' class="btn-outline-info" />
            

        </div>

    </div>
    

    </>
  )
}

export default Main