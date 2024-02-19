import React from 'react';
import './Pricecard.css';

const PriceCard = ({ plan, price, features }) => {
    const renderSymbol = (index) => {
      if (plan === 'Pro') {
        return '✔️'; // All features have "correct" symbol
      } else if (plan === 'Plus' && index < 7) {
        return '✔️'; // All features have "correct" symbol
      } else if (plan === 'Free' && index < 4) {
        return '✔️'; // First four features have "correct" symbol
      } else {
        return '❌'; // Last feature has "wrong" symbol
      }
    };
  
    return (
      <div className="price-card">
        <h2>{plan}</h2>
        <p className="price">${price}/month</p>
        <ul className="features">
          {features.map((feature, index) => (
            <li key={index}>
              <span className="symbol">{renderSymbol(index)}</span> {feature}
            </li>
          ))}
        </ul>
        <button className="btn">Subscribe</button>
      </div>
    );
};

export default PriceCard;
