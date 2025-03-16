import MainNavItems from "../data/MainNavItems";

export default function NavBar({ menuItems }) {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <a className="navbar-brand" href="#">
          Medical
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
            {MainNavItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" aria-current="page" href={item.url}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="d-flex">
            <button className="appointments-btn" type="submit">
              Appointments
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
