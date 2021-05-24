import { Link } from "@fremtind/jkl-core";
import history from "../../Utilities/History";
import "./Nav.scss";

export const Nav = () => {
    const goToHomePage = () => {
        history.push('/');
    };

    return (
        <nav className="heading-nav">
            <p onClick={goToHomePage} className="heading-nav__brand">Runer</p>
            <p className="heading-nav__story">En lesbarhetstest laget av Fremtind</p>
            <Link href="https://jokul.fremtind.no">Gå til designsystemet →</Link>
        </nav>
    );
};
