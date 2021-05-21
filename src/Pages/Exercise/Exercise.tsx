import React, {useEffect, useState} from 'react';
import './Exercise.scss';
import TestGenerator from "../../Components/TestGenerator";
import CountDown from "../../Components/CountDown";

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

    return (
        <section className="exercise">
            {showCountDown ?
                <CountDown setShowCountDown={setShowCountDown}/>
                :
                <TestGenerator
                    text="Hello Hello Hello!"
                    backgroundColor="black"
                    fontColor="white"
                    fontFamily="sans-serif"
                    fontSize="26px"
                    setShowCountDown={setShowCountDown}
                />
            }
        </section>
    );
};

export default Exercise;
