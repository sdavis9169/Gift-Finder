import React, { useReducer } from 'react';
import uuid from 'uuid';
import GiftContext from './giftContext';
import giftReducer from './giftReducer';
import {
  ADD_GIFT,
  DELETE_GIFT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_GIFT,
  FILTER_GIFT,
  CLEAR_FILTER
} from '../types';

const GiftState = props => {
  const initialState = {
    gifts: [
      {
        item: 'xbox',
        price: 599,
        link: 'www.xbox.com',
        picture: 'www.xbox.com'
      },
      {
        item: 'ps5',
        price: 699,
        link: 'www.ps5.com',
        picture: 'www.ps5.com'
      },
      {
        item: 'car',
        price: 60000,
        link: 'www.ford.com',
        picture: 'www.ford.com'
      }
    ]
  };

  const [state, dispatch] = useReducer(giftReducer, initialState);

  // Add Gift

  // Delete Gift

  // Set Current Gift

  // Clear Current Gift

  // Update Gift

  // Clear Filter

  return (
    <GiftContext.Provider
      value={{
        gifts: state.gifts
      }}
    >
      {props.children}
    </GiftContext.Provider>
  );
};

export default GiftState;
