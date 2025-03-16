import Facility from "./Facility";
import SubSectionTitle from "./SubSectionTitle";

export default function Facilities() {
  return (
    <div className="container facilities-container">
      <SubSectionTitle title="What Facilities We Provide" />
      <div className="facility-container">
        <Facility src="dental-service.jpg" />
        <Facility src="cardiology-service.jpg" />
        <Facility src="eye-care-service.jpg" />
      </div>
    </div>
  );
}
