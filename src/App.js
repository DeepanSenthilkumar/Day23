import React from 'react';
import PriceCard from './Pricecard';
import './App.css';

const App = () => {
  return (
    <div>
        <h2>Price Card Using React</h2>
        <div className="container">
        <PriceCard
        plan="Free"
        price={0}
        features={['Single User', '50GB Storage', 'Public Projects' ,
        'Community Access', 'private Projects', 'Phone Support',
        'Free Subdoman', 'Monthly Status Reports']}
        />
        <PriceCard
        plan="Plus"
        price={9}
        features={['Single User', '50GB Storage', 'Public Projects' ,
        'Community Access', 'private Projects', 'Phone Support',
        'Free Subdoman', 'Monthly Status Reports']}
        />
        <PriceCard
        plan="Pro"
        price={49}
        features={['Single User', '50GB Storage', 'Public Projects' ,
        'Community Access', 'private Projects', 'Phone Support',
        'Free Subdoman', 'Monthly Status Reports']}
        />
    </div>
  </div>
  );
};

export default App;
