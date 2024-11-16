import { useState } from 'react';
import OfferCard from './OfferCard';
import { OfferObject } from '../../types/types';


type OfferListProps = {
  offers: OfferObject[];
  cardcssname: string;
};

const OfferList = ({ offers, cardcssname}: OfferListProps) => {
  const [activeOfferId, setActiveOfferId] = useState<number | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <div
          key={offer.id}
          onMouseEnter={() => setActiveOfferId(offer.id)}
          onMouseLeave={() => setActiveOfferId(null)}
        >
          <OfferCard offer={offer} cardcssname={cardcssname} />
        </div>
      ))}
      <div>{activeOfferId && <p>Active Offer ID: {activeOfferId}</p>}</div>
    </div>
  );
};

export default OfferList;
