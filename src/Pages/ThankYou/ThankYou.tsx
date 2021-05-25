import { useEffect } from "react";
import { Nav } from "../../Components/Nav";
import "./ThankYou.scss";

const ThankYou = () => {
    useEffect(() => {
        document.title = "Takk! | Runer";
    }, []);

    return (
        <>
            <Nav />
            <main className="thankyou-page">
                <section className="thankyou__intro">
                    <h1>Takk! Da var du ferdig!</h1>
                    <p>
                        Vi setter stor pris på ditt bidrag, det vil komme godt med i vårt arbeid. Takk for at du tok deg
                        tid!
                    </p>
                </section>
            </main>
        </>
    );
};

export default ThankYou;
