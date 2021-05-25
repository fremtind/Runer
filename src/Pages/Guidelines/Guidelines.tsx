import { useEffect } from "react";
import { PrimaryButton } from "@fremtind/jkl-button-react";
import { useHistory } from "react-router";
import { Footer } from "../../Components/Footer/Footer";
import { Nav } from "../../Components/Nav";
import "./Guidelines.scss";

const Guidelines = () => {
    const history = useHistory();

    useEffect(() => {
        document.title = "Retningslinjer | Runer";
    }, []);

    return (
        <>
            <Nav />
            <main className="guidelines-page">
                <h1>Slik vil testen foregå</h1>
                <p>
                    Du vil bli presentert ulike tekster i denne testen med ulike omstendigheter. Det telles ned før hver
                    tekst presenteres, du kan avbryte testen når du vil. Til slutt vil du bli bedt om å svare på et par
                    spørsmål.
                </p>
                <ol>
                    <li>
                        Første side vil være en tekst der vi setter en “baseline”. Trykk videre når du er ferdig med å
                        lese.
                    </li>
                    <li>
                        Du blir presentert første test av Fremtind fonten, les nøye og trykk videre når du er ferdig.
                    </li>
                    <li>
                        Når du er ferdig med alle casene, for du oversikt over hvor lang tid du brukte og blir bedt om å
                        svare på et par spørsmål.
                    </li>
                </ol>
            </main>
            <Footer>
                <PrimaryButton onClick={() => history.push("/lesetester")}>Start testen nå</PrimaryButton>
            </Footer>
        </>
    );
};

export default Guidelines;
