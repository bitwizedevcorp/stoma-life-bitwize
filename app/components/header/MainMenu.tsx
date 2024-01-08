import Link from "next/link";

import { useRouter } from "next/router";

const MainMenu = () => {
  // const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <img src="/images/logo/logo_01.png" alt="" width={95} />
              </Link>
            </div>
          </li>
          {/* End li */}

          <li className="nav-item">
            <Link className="nav-link" href="/home" role="button">
              Acasa
            </Link>
          </li>
          {/* End li (home mega menu) */}

          <li className="nav-item  dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Pacienti
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link href="/adauga-pacient" className="dropdown-item">
                  <span>Adauga Pacient</span>
                </Link>
              </li>
              <li>
                <Link href="/adauga-programare" className="dropdown-item">
                  <span>Adauga Programare</span>
                </Link>
              </li>
              <li>
                <Link href="/pacientii-tai" className="dropdown-item">
                  <span>Pacientii tai</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* End li (pages) */}

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Documente
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link href="/adauga-pacient" className="dropdown-item">
                  <span>Document 1</span>
                </Link>
              </li>
              <li>
                <Link href="/adauga-programare" className="dropdown-item">
                  <span>Document 2</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* End li (portfolio) */}

          {/* End li (blog) */}

          {/* End li (contact) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link href="/contact" className="btn-twentyOne fw-500 tran3s">
              Contacteaza-ne
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
