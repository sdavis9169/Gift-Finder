import React, { Fragment, useContext } from 'react';
import GiftItem from './GiftItem';
import GiftContext from '../../context/gift/giftContext';

const Gifts = () => {
  const giftContext = useContext(GiftContext);

  const { gifts } = giftContext;
  return (
    <Fragment>
      {gifts.map(gift => (
        <GiftItem gift={gift} />
      ))}
    </Fragment>
  );
};

export default Gifts;
