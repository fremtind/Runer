import { CSSProperties } from "react";

/**
 * dark: definerer hvorvidt knappene skal være inverted eller ikke i forbindelse med mørk/lys bakgrunn
 * styles: CSS-objekt stiler som legges på selve siden
 * text: selve teksten for lesbarhetstesten
 */

const textData: { dark: boolean; styles: CSSProperties; text: string }[] = [
    {
        dark: true,
        styles: {
            backgroundColor: "black",
            color: "white",
            fontFamily: "sans-serif",
            fontSize: "26px",
        },
        text: `Hva lykke er?
            Gå på en gressgrodd setervei
            i tynne, tynne sommerklær,
            klø sine ferske myggstikk
            med doven ettertenksomhet
            og være ung og meget rik
            på uopplevet kjærlighet.
            Å få et florlett spindelvev
            som kjærtegn over munn og kinn
            og tenke litt på vær og vind.
            Be prestekravene om råd
            og kanskje ja – og kanskje nei –
            han elsker – elsker ikke meg.

            Men ennå ikke kjenne deg.`,
    },
    {
        dark: false,
        styles: {
            backgroundColor: "white",
            color: "black",
            fontFamily: "sans-serif",
            fontSize: "26px",
        },
        text: `Hva lykke er?
            Gå på en gressgrodd setervei
            i tynne, tynne sommerklær,
            klø sine ferske myggstikk
            med doven ettertenksomhet
            og være ung og meget rik
            på uopplevet kjærlighet.
            Å få et florlett spindelvev
            som kjærtegn over munn og kinn
            og tenke litt på vær og vind.
            Be prestekravene om råd
            og kanskje ja – og kanskje nei –
            han elsker – elsker ikke meg.

            Men ennå ikke kjenne deg.`,
    },
    {
        dark: false,
        styles: {
            backgroundColor: "pink",
            color: "white",
            fontFamily: "arial",
            fontSize: "46px",
        },
        text: `Hva lykke er?
            Gå på en gressgrodd setervei
            i tynne, tynne sommerklær,
            klø sine ferske myggstikk
            med doven ettertenksomhet
            og være ung og meget rik
            på uopplevet kjærlighet.
            Å få et florlett spindelvev
            som kjærtegn over munn og kinn
            og tenke litt på vær og vind.
            Be prestekravene om råd
            og kanskje ja – og kanskje nei –
            han elsker – elsker ikke meg.

            Men ennå ikke kjenne deg.`,
    },
    {
        dark: false,
        styles: {
            backgroundColor: "yellow",
            color: "black",
            fontFamily: "arial",
            fontSize: "12px",
        },
        text: `Hva lykke er?
            Gå på en gressgrodd setervei
            i tynne, tynne sommerklær,
            klø sine ferske myggstikk
            med doven ettertenksomhet
            og være ung og meget rik
            på uopplevet kjærlighet.
            Å få et florlett spindelvev
            som kjærtegn over munn og kinn
            og tenke litt på vær og vind.
            Be prestekravene om råd
            og kanskje ja – og kanskje nei –
            han elsker – elsker ikke meg.

            Men ennå ikke kjenne deg.`,
    },
];

export default textData;
