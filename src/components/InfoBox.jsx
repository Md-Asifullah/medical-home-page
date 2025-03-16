export default function InfoBox({ children, styleClass, title, src }) {
  return (
    <div className={styleClass}>
      <div className="info-box-img-container">
        <img
          src={`/images/${src}`}
          className="info-box-img-container-first"
          alt=""
        />
        <img
          src={`/images/${src}`}
          className="info-box-img-container-second"
          alt=""
        />
      </div>
      <h2 className="infobox-title">{title}</h2>
      {children}
    </div>
  );
}
