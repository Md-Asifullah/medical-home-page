export default function Specialist({ img, name, designation, style }) {
  return (
    <>
      <div className="individual-specialist">
        <img src={`/images/${img}`} alt={name} />
        <div className="doctor-info">
          <h4>{name}</h4>
          <p className={style ? "orange-text" : "sky-blue-text"}>
            {designation}
          </p>
        </div>
      </div>
    </>
  );
}
