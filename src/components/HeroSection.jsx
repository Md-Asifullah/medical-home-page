import Button from "./Button";

export default function HeroSection() {
  return (
    <div className="hero-background">
      <div className="container hero-container">
        <Button title="Passion for caring" styleClass="orange-button" />
        <h1 className="main-title">
          Genuine To <br /> Your Health
        </h1>
        <p className="hero-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis
          sapien nunc. Sed molestie, orci non facilisis dignissim, nisl nunc
          pretium nibh, at malesuada mi nisl in nibh.
        </p>
        <Button
          title="Read More"
          styleClass="appointments-btn blue-read-more-button"
        />
      </div>
    </div>
  );
}
