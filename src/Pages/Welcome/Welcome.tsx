import React, { useEffect } from "react";
import { PrimaryButton } from "@fremtind/jkl-button-react";
import "@fremtind/jkl-button/button.min.css";
import history from "../../Utilities/History";
import "./Welcome.scss";
import { Nav } from "../../Components/Nav";

const Welcome = () => {
    useEffect(() => {
        document.title = "Velkommen til Runer";
    }, []);

    return (
        <>
            <Nav />
            <main className="welcome-page">
                <h1>Velkommen til en lesbarhetstest av vår font Fremtind Grotesk</h1>
                <section className="welcome-hero welcome-hero--with-cells">
                    <div className="welcome-hero__cell">
                        <p>
                            Denne lesbarhetstesten vil ta deg gjennom ulike tekster med ulike omstendigheter. Du bidrar
                            til å gjøre lesbarheten bedre for våre brukere.
                        </p>
                        <PrimaryButton
                            className="welcome__hero__cell--actionBtn"
                            onClick={() => {
                                history.push("/guidelines");
                            }}
                        >
                            Kom i gang
                        </PrimaryButton>
                    </div>
                    <div className="welcome-hero__cell">
                        <img
                            className="welcome-hero__img welcome-hero__img--vertical-push"
                            src="./assets/images/Runer.jpg"
                            alt="Runer Logo"
                        />
                    </div>
                </section>

                <div className="welcome-hero__inverted-wrapper">
                    <section className="welcome-hero  welcome-hero--with-cells">
                        <div className="welcome-hero__cell">
                            <h2>Hvorfor gjør vi dette?</h2>
                            <p>
                                Målet med denne testen er å finne ut om hvor lesbar tekst satt i Fremtind fonten er.
                                Lesbarhet påvirker ikke bare brukervennligheten, men også opplevelsen av nettsiden.
                            </p>
                            <p>
                                Vi vil teste hvordan fonten til Fremtind fungerer under ulike omstendigheter, som for
                                eksempel lys og mørk bakgrunn, ulike størrelser, ulike vekter, ulike nettlesere og
                                operativsystem.
                            </p>
                        </div>
                    </section>

                    <section className="welcome-hero  welcome-hero--with-cells">
                        <div className="welcome-hero__cell">
                            <h2>Hvem er vi?</h2>
                            <p>
                                Vi er designere og utviklere som brenner for bedre brukeropplevelse for våre brukere. Vi
                                jobber i designsystemet og ulike leveranseteam i Fremtind.
                            </p>
                            <p>
                                Vi er tre interaksjonsdesignere og to utviklere med ulik bakgrunn og ekspertise. Sammen
                                skal vi sørge for at våre løsninger har den beste brukeropplevelsen.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default Welcome;
