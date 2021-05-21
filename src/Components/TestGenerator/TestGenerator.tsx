import React, { useEffect } from 'react';
import './TestGenerator.scss';
import history from "../../Utilities/History";
import { PrimaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import "@fremtind/jkl-button/button.min.css";

interface ITestGenerator {
    text: string;
    backgroundColor: string;
    fontColor: string;
    fontFamily: string;
    fontSize: string;
}

const TestGenerator: React.FC<ITestGenerator> = ({
    text,
    backgroundColor,
    fontColor,
    fontFamily,
    fontSize,
}) => {
    useEffect(() => {
        document.title = 'Test';
    }, []);

    return (
        <section className="testGenerator">
            <div className="testGenerator__textContainer">
                <p className="testGenerator__textContainer--text">{text}</p>
            </div>
            <div className="testGenerator__bottomMenu">
                <hr
                    style={{
                        color: 'black',
                        backgroundColor: 'white',
                        height: 1
                    }}
                />
                <div className="testGenerator__bottomMenu__buttonContainer">
                    <div></div>
                    <PrimaryButton
                        onClick={() => {
                            history.push('/guidelines');
                        }}
                    >
                        Ferdig å lese
                    </PrimaryButton>
                    <TertiaryButton
                        onClick={() => {
                            history.push('/');
                        }}
                    >
                        Avbryt testen
                    </TertiaryButton>
                </div>
            </div>
        </section>
    );
};

export default TestGenerator;
