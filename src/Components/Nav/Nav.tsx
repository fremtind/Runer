import { Logo } from "@fremtind/jkl-logo-react";
import { Link } from "react-router-dom";
import "./Nav.scss";

export const Nav = () => {
    return (
        <nav className="heading-nav">
            <Link to="/" title="Til forsiden">
                <Logo isSymbol centered={false} />
            </Link>
        </nav>
    );
};
