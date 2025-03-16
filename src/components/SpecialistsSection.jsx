import Button from "./Button";
import Specialist from "./Specialist";
import SpecialistsData from "../data/SpecialistsData";

export default function SpecialistsSection() {
  return (
    <div className="specialists-section">
      <div className="container">
        <Button title="Our Team" styleClass="gray-button" />
        <h2 className="secondary-title specialists-section-title">
          Meet Our Heart Specialists
        </h2>

        <div className="specialists-container">
          {SpecialistsData.map((item, index) => (
            <Specialist
              key={index}
              img={item.img}
              name={item.name}
              designation={item.designation}
              style={item.style}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
