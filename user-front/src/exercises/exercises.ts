import { CSSProperties } from "react";

/**
 * dark: definerer hvorvidt knappene skal være inverted eller ikke i forbindelse med mørk/lys bakgrunn
 * styles: CSS-objekt stiler som legges på selve siden
 * ! Font family kreves på alle stiler fordi dynamodb er teit
 */

export interface Exercise {
    dark: boolean;
    styles: Pick<CSSProperties, "backgroundColor" | "color" | "fontFamily" | "fontSize" | "lineHeight">;
}

export const baseLine: Exercise = {
    dark: false,
    styles: {
        backgroundColor: "white",
        color: "black",
        fontFamily: "arial",
        fontSize: "20px",
        lineHeight: "28px",
    },
};

const textData: Exercise[] = [
    {
        dark: false,
        styles: {
            backgroundColor: "white",
            color: "black",
            fontSize: "20px",
            lineHeight: "32px",
            fontFamily: "Fremtind Grotesk",
        },
    },
    {
        dark: true,
        styles: {
            backgroundColor: "black",
            color: "white",
            fontSize: "20px",
            lineHeight: "32px",
            fontFamily: "Fremtind Grotesk",
        },
    },
    {
        dark: false,
        styles: {
            backgroundColor: "white",
            color: "black",
            fontSize: "16px",
            lineHeight: "24px",
            fontFamily: "Fremtind Grotesk",
        },
    },
];

export default textData;
