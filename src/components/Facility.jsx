export default function Facility({ src }) {
  return (
    <div className="facility">
      <img src={`/images/${src}`} alt="" />
      <div className="text">
        <p className="facility-category">Medical Pediatrics</p>
        <p className="facility-title">Dental Services</p>
      </div>
    </div>
  );
}
