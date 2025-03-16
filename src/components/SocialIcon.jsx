export default function SocialIcon({ icon }) {
  return (
    <button className="social-btn">
      <i className={`bi ${icon}`}></i>
    </button>
  );
}
