import React from 'react';
import CreativeDomainDetails from './creativeDomains'; // Import CreativeDomainDetails component
import { creativeDomainData } from './creative_domain';

const CreativeDomainDataRenderer = () => {
  return (
    <div>
      {creativeDomainData.map((item, index) => (
        <CreativeDomainDetails
          key={index}
          image={item.image}
          name={item.name}
          description={item.description}
          buttonLink={item.buttonLink}
        />
      ))}
    </div>
  );
};

export default CreativeDomainDataRenderer;
