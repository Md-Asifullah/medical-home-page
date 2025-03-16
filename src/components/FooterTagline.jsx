import FooterTaglineMenu from "./FooterTaglineMenu";

export default function FooterTagline() {
  const year = new Date().getFullYear();
  return (
    <div className="footer-tagline">
      <div className="container">
        <FooterTaglineMenu />
        <p>{`© ${year} Placeholder Corp. All rights reserved.`}</p>
      </div>
    </div>
  );
}
