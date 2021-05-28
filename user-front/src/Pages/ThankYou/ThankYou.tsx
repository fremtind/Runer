import { useEffect } from "react";
import { TextInput } from "@fremtind/jkl-text-input-react";
import { Nav } from "../../Components/Nav";
import "./ThankYou.scss";
import { RadioButtons } from "@fremtind/jkl-radio-button-react";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import { PrimaryButton } from "@fremtind/jkl-button-react";
import { useForm } from "react-hook-form";
import { useSession } from "../../common/sessionContext";
import { httpPost } from "../../common/http";
import { Link, NavLink } from "@fremtind/jkl-core";

interface FormData {
    age: string;
    eyesight: string;
    aid: string;
}

const ThankYou = () => {
    useEffect(() => {
        document.title = "Takk! | Runer";
    }, []);
    const { clientId, testSession } = useSession();

    const { register, handleSubmit, watch, formState } = useForm<FormData>();

    const onSubmit = (formData: FormData) => {
        httpPost(clientId, testSession, {
            questionaire: formData,
        });
    };

    const eyeSightValue = watch("eyesight");
    const eyeSight = register("eyesight");

    return (
        <>
            <Nav back varde />
            <main className="thankyou-page">
                <section className="thankyou__intro">
                    <h1>Takk! Da var du ferdig!</h1>
                    <p>
                        Vi setter stor pris på ditt bidrag, det vil komme godt med i vårt arbeid. Takk for at du tok deg
                        tid!
                    </p>
                </section>
                <section className="thankyou__questionaire">
                    {formState.isSubmitted ? (
                        <h2>Tusen takk for bidraget!</h2>
                    ) : (
                        <>
                            <h2>Har du tid til oppfølgingsspørsmål?</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <TextInput
                                    variant="medium"
                                    errorLabel={formState.errors.age?.message}
                                    label="Hvor gammel er du?"
                                    width="6rem"
                                    type="number"
                                    {...register("age")}
                                />

                                <RadioButtons
                                    choices={[
                                        {
                                            label: "Det er OK.",
                                            value: "ok",
                                        },
                                        {
                                            label: "Jeg ser bra når jeg har på briller.",
                                            value: "good with glasses",
                                        },
                                        {
                                            label: "Jeg har nedsatt syn, selv med briller.",
                                            value: "impaired with glasses",
                                        },
                                    ]}
                                    legend="Hvordan står det til med synet?"
                                    variant="medium"
                                    name={eyeSight.name}
                                    onChange={eyeSight.onChange}
                                    selectedValue={eyeSightValue}
                                />

                                <Checkbox value="used glasses" {...register("aid")}>
                                    Jeg hadde på meg briller da jeg leste teksten.
                                </Checkbox>
                                <Checkbox value="digital aid" {...register("aid")}>
                                    Jeg brukte digitale hjelpemiddel, som skjermforstørring eller økt kontrast, for å
                                    lese teksten.
                                </Checkbox>

                                <footer>
                                    <PrimaryButton>Send svar</PrimaryButton>
                                </footer>
                            </form>
                        </>
                    )}
                </section>
            </main>
            <footer className="thankyou-footer">
                <h2>Runer</h2>
                <p>
                    Programvare for lesbarhetstesting, laget av <Link href="https://fremtind.no">Fremtind</Link>
                </p>
                <ul>
                    <li>
                        <NavLink href="https://github.com/fremtind/runer">Kildekode</NavLink>
                    </li>
                    <li>
                        <NavLink href="https://jokul.fremtind.no">Jøkul, vårt designsystem</NavLink>
                    </li>
                </ul>
            </footer>
        </>
    );
};

export default ThankYou;
