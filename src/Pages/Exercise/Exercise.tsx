import React, {useEffect, useState} from 'react';
import './Exercise.scss';
import TestGenerator from "../../Components/TestGenerator";
import CountDown from "../../Components/CountDown";
import {customStyles} from "../../Utilities/Types";

const Exercise = () => {
    useEffect(() => {
        document.title = 'Exercise';
    }, []);

    const [showCountDown, setShowCountDown] = useState<boolean>(true);
    const [testNumber, setTestNumber] = useState<number>(0);
    useEffect(() => {
        if (!showCountDown) {
            setTestNumber(testNumber + 1);
        }
        console.log('testNumber', testNumber);
    }, [showCountDown]);

    const customStyles: Array<customStyles> = [
        {
            backgroundColor: "black",
            fontColor: "white",
            fontFamily: "sans-serif",
            fontSize: "26px",
        }, {
            backgroundColor: "pink",
            fontColor: "white",
            fontFamily: "arial",
            fontSize: "46px",
        },
        {
            backgroundColor: "yellow",
            fontColor: "black",
            fontFamily: "arial",
            fontSize: "12px",
        }
    ];

    return (
        <section className="exercise">
            {showCountDown ?
                <CountDown setShowCountDown={setShowCountDown}/>
                :
                <TestGenerator
                    text="Hello Hello Hello!"
                    customStyles={customStyles[testNumber]}
                    setShowCountDown={setShowCountDown}
                />
            }
        </section>
    );
};

export default Exercise;
