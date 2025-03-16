import InfoBox from "./InfoBox";
import Button from "./Button";
import openingHours from "../data/OpeningHours";

export default function InfoBoxes() {
  return (
    <>
      <InfoBox
        styleClass="deep-blue info-box"
        src="emmergency-icon.png"
        title="Emergency Cases"
      >
        <p className="infobox-main-paragraph">
          Sed sit amet mollis nulla. Nullam ligula urna, malesuada vitae nisl
          non, luctus finibus tellus. Duis euismod, ex id accumsan.
        </p>
        <div className="call-container">
          <img
            src="/images/phone-icon.png"
            className="info-box-child-icon"
            alt=""
          />
          <p className="phone-number">+60 12-345 6789</p>
        </div>
      </InfoBox>
      <InfoBox
        styleClass="sky-blue info-box"
        src="doctor-icon.png"
        title="Doctors Timetable"
      >
        <p className="infobox-main-paragraph">
          Mauris sapien nisl, commodo et fringilla sed, egestas non ipsum. Donec
          laoreet tellus in mollis vulputate.
        </p>
        <Button title="Time Table" styleClass="timetable-btn" />
      </InfoBox>
      <InfoBox
        styleClass="info-box orange"
        src="clock-icon.png"
        title="Opening Hours"
      >
        <table className="opening-time-table">
          <tbody>
            {openingHours.map((item, index) => (
              <tr className="opening-time-table-tr" key={index}>
                <td className="opening-time-table-first">{item.label}</td>
                <td className="opening-time-table-second opening-time-table-first">
                  {item.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </InfoBox>
    </>
  );
}
