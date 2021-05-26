import React, { useEffect } from "react";
import { PrimaryButton } from "@fremtind/jkl-button-react";
import "@fremtind/jkl-button/button.min.css";
import "./Welcome.scss";
import { Nav } from "../../Components/Nav";
import { useHistory } from "react-router";
import { Link, NavLink } from "@fremtind/jkl-core";

const Welcome = () => {
    useEffect(() => {
        document.title = "Velkommen til Runer";
    }, []);

    const history = useHistory();

    return (
        <>
            <Nav />
            <main className="welcome-page">
                <h1>Kan du hjelpe oss å gjøre nettsidene mer behagelige å lese?</h1>
                <section className="welcome-hero welcome-hero--with-cells">
                    <div className="welcome-hero__cell">
                        <p>
                            Dette er en test av skrifttypen vår, “Fremtind Grotesk”. På de neste sidene vil du bli bedt
                            om å lese tekster med ulike skriftstørrelser og bakgrunnsfarger Resultatet hjelper oss å ta
                            bedre, mer leservennlige, valg. Det hele er 100% anonymt.{" "}
                        </p>
                        <PrimaryButton
                            className="welcome__hero__cell--actionBtn"
                            onClick={() => {
                                history.push("/retningslinjer");
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
                            <h2>Hva vil vil oppnå?</h2>
                            <p>
                                Funnene fra testen vil føre til en bedre brukeropplevelse og universiell utforming.
                                Dette vil føre til bedre informerte design avgjørelser i løsningene våre.
                            </p>
                            <p>
                                Vi vil gjøre det lettere å lese og forstå tekster for brukere av våre løsninger. Det vil
                                føre til at brukere navigerer seg gjennom våre løsninger raskt og enkelt.
                            </p>
                        </div>
                    </section>

                    <section className="welcome-hero  welcome-hero--with-cells">
                        <div className="welcome-hero__cell">
                            <h2>Hvem er vi?</h2>
                            <p>
                                Vi er designere og utviklere som brenner for bedre brukeropplevelse for våre brukere. Vi
                                jobber i designsystemet og ulike leveranse team i Fremtind.
                            </p>
                            <p>
                                Vi er tre interaksjonsdesignere og to utviklere med ulik bakgrunn og ekspertise. Sammen
                                skal vi sørge for at våre løsninger har den beste brukeropplevelsen.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
            <footer className="welcome-footer">
                <h2>Runer</h2>
                <p>
                    Programvare for lesbarhetstesting, laget av{" "}
                    <Link negative href="https://fremtind.no">
                        Fremtind
                    </Link>
                </p>
                <ul>
                    <li>
                        <NavLink inverted href="https://github.com/fremtind/runer">
                            Kildekode
                        </NavLink>
                    </li>
                    <li>
                        <NavLink inverted href="https://jokul.fremtind.no">
                            Jøkul, vårt designsystem
                        </NavLink>
                    </li>
                </ul>
            </footer>
        </>
    );
};

export default Welcome;
