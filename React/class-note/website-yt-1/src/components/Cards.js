
import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards_items">
                    <CardItem
                    src="images/img-9.jpg"
                    text="explore the hidden waterfall deep inside the Amazon Jungle"
                    label='Adventure'
                    path='/services'
                    />
                    <CardItem
                    src="images/img-2.jpg"
                    text="Travel through the Island of Bali in a Private Cruise"
                    label='Luxury'
                    path='/services'
                    />
                </ul>
                <ul className="cards_items">
                    <CardItem
                    src="images/img-3.jpg"
                    text="Set sail in the Atlantic Ocean visiting Uncharted Waters"
                    label='Adventure'
                    path='/services'
                    />
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;
