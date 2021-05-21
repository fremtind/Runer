import React, {useEffect, useState} from 'react';
import './Exercise.scss';
import TestGenerator from "../../Components/TestGenerator";
import CountDown from "../../Components/CountDown";
import history from "../../Utilities/History";
import {customStyles} from "../../Utilities/Types";

import textData from '../../TextData/textData.json';

const Exercise = () => {
    useEffect(() => {
        document.title = 'Exercise';
    }, []);

    const [showCountDown, setShowCountDown] = useState<boolean>(true);
    const [testNumber, setTestNumber] = useState<number>(-1);
    useEffect(() => {
        if (testNumber === textData.textDataArray.length - 1) {
            history.push('/thankyou');
            return;
        }
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
                    text={textData.textDataArray[testNumber]}
                    customStyles={customStyles[testNumber]}
                    setShowCountDown={setShowCountDown}
                />
            }
        </section>
    );
};

export default Exercise;
