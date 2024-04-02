import TechDomainDetails from './DomainDetailsCode';
import { TechdomainData } from './tech_domains';
const DomainDataRenderer = () => {
  return (
    <div>
      {TechdomainData.map((item, index) => (
        <TechDomainDetails
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

export default DomainDataRenderer;
