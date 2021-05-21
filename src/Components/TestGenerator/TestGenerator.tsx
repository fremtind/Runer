import React, { useEffect } from 'react';
import './TestGenerator.scss';
import history from "../../Utilities/History";
import { PrimaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import "@fremtind/jkl-button/button.min.css";
import {ITestGenerator} from "../../Utilities/Interfaces";

const TestGenerator: React.FC<ITestGenerator> = ({
    text,
    customStyles,
    setShowCountDown,
}) => {
    useEffect(() => {
        document.title = 'Test';
        const textContainer:HTMLDivElement|null = document.querySelector('.testGenerator__textContainer');
        const textBox:HTMLDivElement|null = document.querySelector('.testGenerator__textContainer--text');
        console.log(textContainer);
        console.log(textBox);
        if (textContainer && textBox) {
            textContainer.style.backgroundColor = customStyles.backgroundColor;
            textBox.style.color = customStyles.fontColor;
            textBox.style.fontFamily = customStyles.fontFamily;
            textBox.style.fontSize = customStyles.fontSize;
        }
    }, [customStyles]);

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
                            setShowCountDown(true);
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
