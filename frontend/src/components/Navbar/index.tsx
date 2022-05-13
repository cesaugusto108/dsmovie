import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import { ReactComponent as MovieIcon } from "assets/img/film.svg";
import "./styles.css";

function Navbar() {
      return (
            <header>
                  <nav className="container">
                        <div className="dsmovie-nav-content">
                              <a href="/">
                                    <div className="dsmovie-logo">
                                          <MovieIcon className="dsmovie-film-icon" />
                                          <h1 className="display-5 ms-3">DSMovie</h1>
                                    </div>
                              </a>
                              <a href="https://github.com/cesaugusto108">
                                    <GithubIcon className="dsmovie-contact-link-icon" />
                                    <span className="dsmovie-contact-link">/devsuperior</span>
                              </a>
                        </div>
                  </nav>
            </header>
      );
}

export default Navbar;
