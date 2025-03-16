import Button from "./Button";
import MainFeatures from "../data/MainFeatures";

export default function FeatureContent() {
  return (
    <>
      <Button title="What About Us" styleClass="orange-button" />
      <h2 className="secondary-title">
        The Heart And Science Of Medicate Test
      </h2>
      <p className="body-paragraph">
        Nam pharetra nec neque congue finibus. Etiam consequat molestie
        tincidunt. Vestibulum commodo vulputate rhoncus.
      </p>
      <ul className="custom-list">
        {MainFeatures.map((item, index) => (
          <li key={index}>{item.content}</li>
        ))}
      </ul>
      <Button
        title="Read More"
        styleClass="appointments-btn blue-read-more-button"
      />
    </>
  );
}
