import FeatureContent from "./FeatureContent";

export default function FeaturesSection() {
  return (
    <div className="features-section-container pb-4">
      <div className="features-image">
        <img src="/images/featured-img.jpg" alt="Happy Doctor and Patient" />
      </div>
      <div className="features-content">
        <FeatureContent />
      </div>
    </div>
  );
}
