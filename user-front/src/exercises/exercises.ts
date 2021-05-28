import { CSSProperties } from "react";

/**
 * dark: definerer hvorvidt knappene skal være inverted eller ikke i forbindelse med mørk/lys bakgrunn
 * styles: CSS-objekt stiler som legges på selve siden
 */

interface Test {
    dark: boolean;
    styles: CSSProperties;
}

export const baseLine: Test = {
    dark: false,
    styles: {
        backgroundColor: "white",
        color: "black",
        fontFamily: "arial",
        fontSize: "20px",
        lineHeight: "28px",
    },
};

const textData: Test[] = [
    {
        dark: false,
        styles: {
            backgroundColor: "white",
            color: "black",
            fontSize: "20px",
            lineHeight: "32px",
        },
    },
    {
        dark: true,
        styles: {
            backgroundColor: "black",
            color: "white",
            fontSize: "20px",
            lineHeight: "32px",
        },
    },
    {
        dark: false,
        styles: {
            backgroundColor: "white",
            color: "black",
            fontSize: "16px",
            lineHeight: "24px",
        },
    },
];

export default textData;
