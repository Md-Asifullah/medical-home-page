export default function Department({ title, img = "angioplasty" }) {
  return (
    <div className="box">
      <img src={`/images/department-icons/${img}-icon.png`} alt="" />
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum
        lectus.
      </p>
      <a href="#">Read More</a>
    </div>
  );
}
