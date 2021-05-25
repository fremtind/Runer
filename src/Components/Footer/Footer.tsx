import React, { Children } from "react";
import "./Footer.scss";

export const Footer: React.FC = ({ children }) => {
    return <footer className={`footer ${Children.count(children) === 1 ? "footer--single" : ""}`}>{children}</footer>;
};
