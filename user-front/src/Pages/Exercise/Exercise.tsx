import { useEffect, useState, CSSProperties, useMemo } from "react";
import { useHistory } from "react-router";
import { PrimaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import styled from "styled-components";
import { Footer } from "../../Components/Footer";
import CountDown from "../../Components/CountDown";
import exercises from "../../exercises/exercises";
import "./Exercise.scss";

const StyledMain = styled.main((props: CSSProperties) => ({
    ...props,
}));

const useSlideControl = () => {
    const history = useHistory();

    const [state, setState] = useState<{
        showCountdown: boolean;
        activeTest: number;
        testStart: null | Date;
    }>({
        showCountdown: true,
        activeTest: 0,
        testStart: null,
    });

    const onCountdownFinish = () => {
        setState({
            ...state,
            showCountdown: false,
            testStart: new Date(),
        });
    };

    const onFinishExercise = () => {
        // TODO send data to backend
        console.log(Date.now() / 1000 - state.testStart!.getTime() / 1000);

        if (state.activeTest + 1 >= exercises.length) {
            history.push("/tusen-takk");
            return;
        }

        setState({
            showCountdown: true,
            activeTest: state.activeTest + 1,
            testStart: null,
        });
    };

    const currentExercise = useMemo(() => {
        return exercises[state.activeTest];
    }, [state]);

    return { currentExercise, showCountdown: state.showCountdown, onCountdownFinish, onFinishExercise };
};

const Exercise = () => {
    const history = useHistory();

    useEffect(() => {
        document.title = "Lesetest | Runer";
    }, []);

    const { currentExercise, onCountdownFinish, onFinishExercise, showCountdown } = useSlideControl();

    if (showCountdown) {
        return (
            <>
                <StyledMain className="exercise-page" style={currentExercise.styles}>
                    <CountDown onFinish={onCountdownFinish} />
                </StyledMain>
                <Footer style={currentExercise.styles}>
                    <PrimaryButton disabled>Ferdig å lese</PrimaryButton>
                    <TertiaryButton inverted={currentExercise.dark} onClick={() => history.push("/tusen-takk")}>
                        Avbryt testen
                    </TertiaryButton>
                </Footer>
            </>
        );
    }

    return (
        <>
            <StyledMain className="exercise-page" style={currentExercise.styles}>
                <article>{currentExercise.text}</article>
            </StyledMain>
            <Footer style={currentExercise.styles}>
                <PrimaryButton
                    onClick={() => {
                        onFinishExercise();
                    }}
                    inverted={currentExercise.dark}
                >
                    Ferdig å lese
                </PrimaryButton>
                <TertiaryButton inverted={currentExercise.dark} onClick={() => history.push("/tusen-takk")}>
                    Avbryt testen
                </TertiaryButton>
            </Footer>
        </>
    );
};

export default Exercise;
