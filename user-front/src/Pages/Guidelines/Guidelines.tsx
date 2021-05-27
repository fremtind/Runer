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
                <h1>Slik foregår det</h1>
                <ol>
                    <li>Begynn å lese når teksten dukker opp, rett etter nedtellingen.</li>
                    <li>Les i eget tempo, så ta deg tid til å lese hver tekst. </li>
                    <li>Trykk på «Ferdig å lese» med en gang du er ferdig å lese..</li>
                </ol>
                <p>
                    Det vil til sammen være «X-antall» omstendigheter du skal lese i. Ha gjerne musepekeren, eller en
                    finger, klar på «Ferdig å lese»-knappen så blir målingene mer nøyaktige. Du kan avbryte testen om du
                    vil, men om du holder ut til slutt, vil du bli bedt om å svare på et par spørsmål.
                </p>
            </main>
            <Footer>
                <PrimaryButton onClick={() => history.push("/lesetester")}>Start nå</PrimaryButton>
            </Footer>
        </>
    );
};

export default Guidelines;
