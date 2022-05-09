import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import "./styles.css";

function Navbar() {
      return (
            <header>
                  <nav className="container">
                        <div className="dsmovie-nav-content">
                              <h1 className="display-5">DSMovie</h1>
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
