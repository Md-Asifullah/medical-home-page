import Button from "./Button";

export default function SubSectionTitle({ title }) {
  return (
    <>
      <Button title="Facilities we Have" styleClass="orange-button" />
      <h2 className="secondary-title">{title}</h2>
    </>
  );
}
