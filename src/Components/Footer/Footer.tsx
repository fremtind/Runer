import React, { Children, CSSProperties } from "react";
import styled from "styled-components";
import "./Footer.scss";

interface Props {
    style?: CSSProperties;
}

const StyledFooter = styled.footer((props: CSSProperties) => ({ ...props }));

export const Footer: React.FC<Props> = ({ children, style }) => {
    return (
        <StyledFooter className={`footer ${Children.count(children) === 1 ? "footer--single" : ""}`} style={style}>
            {children}
        </StyledFooter>
    );
};
