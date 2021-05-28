import { Logo } from "@fremtind/jkl-logo-react";
import { Link } from "react-router-dom";
import { Link as JklLink } from "@fremtind/jkl-core";
import "./Nav.scss";

interface Props {
    back?: boolean;
    varde?: boolean;
}

export const Nav = ({ back, varde }: Props) => {
    return (
        <nav className={`heading-nav ${varde ? "heading-nav--varde" : ""}`}>
            <Link to="/" title="Til forsiden">
                <Logo />
            </Link>
            {back && <JklLink href="/">Gå til forsiden</JklLink>}
        </nav>
    );
};
