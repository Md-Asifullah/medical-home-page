import FooterContactData from "../data/FooterContactData";

export default function FooterContact() {
  return (
    <div className="contact-component">
      <h3>Contact Us</h3>
      {FooterContactData.map((item, index) => (
        <div className="contact-item" key={index}>
          <div>
            <i className={`bi bi-${item.icon}`}></i>
          </div>
          <div>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
