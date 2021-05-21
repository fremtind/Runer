import { Link } from "@fremtind/jkl-core";
import "./Nav.scss";

export const Nav = () => {
    return (
        <nav className="heading-nav">
            <p className="heading-nav__brand">Runer</p>
            <p className="heading-nav__story">En lesbarhetstest laget av Fremtind</p>
            <Link href="https://jokul.fremtind.no">Gå til Designsystemet</Link>
        </nav>
    );
};
