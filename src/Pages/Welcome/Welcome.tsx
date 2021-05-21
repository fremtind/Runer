import React, { useEffect } from 'react';
import { PrimaryButton } from "@fremtind/jkl-button-react";
import "@fremtind/jkl-button/button.min.css";
import history from '../../Utilities/History';
import './Welcome.scss';

const Welcome = () => {
    useEffect(() => {
        document.title = 'Velkommen til Runer';
    }, []);

    return (
        <section className="welcome">
            <h1>Velkommen til en lesbarhetstest av vår font Fremtind Grotesk</h1>
            <section className="welcome__hero">
                <div className="welcome__hero__cell">
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <PrimaryButton
                        className="welcome__hero__cell--actionBtn"
                        onClick={() => {
                            history.push('/guidelines');
                        }}
                    >
                        Kom i gang
                    </PrimaryButton>
                </div>
                <div className="welcome__hero__cell">
                    <img className="welcome__hero__cell--bannerImg" src="./assets/images/Runer.jpg" />
                </div>
            </section>
            <hr
                style={{
                    color: 'black',
                    backgroundColor: 'white',
                    height: 1
                }}
            />
            <section className="welcome__content">
                <h2>Hvorfor gjør vi dette?</h2>
                <p>
                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                </p>
                <p>
                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
                </p>
            </section>
        </section>
    );
};

export default Welcome;
