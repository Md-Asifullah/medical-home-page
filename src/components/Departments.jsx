import SubSectionTitle from "./SubSectionTitle";
import Department from "./Department";
import DepartmentsData from "../data/DepartmentsData";

export default function Departments() {
  return (
    <div className="container department-container">
      <SubSectionTitle title="We Provide Various Directions" />
      <div className="department-boxes-container mt-5">
        {DepartmentsData.map((item, index) => (
          <Department title={item.title} img={item.img} key={index} />
        ))}
      </div>
    </div>
  );
}
