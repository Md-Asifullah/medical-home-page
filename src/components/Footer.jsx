import FooterLogoSection from "./FooterLogoSection";
import FooterMainPages from "./FooterMainPages";
import FooterBlogs from "./FooterBlogs";
import FooterContact from "./FooterContact";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-col">
          <FooterLogoSection />
        </div>
        <div className="footer-col">
          <FooterMainPages />
        </div>
        <div className="footer-col">
          <FooterBlogs />
        </div>
        <div className="footer-col">
          <FooterContact />
        </div>
      </div>
    </div>
  );
}
