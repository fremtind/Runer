import {customStyles} from "./Types";
import React from "react";

export interface ITestGenerator {
    text: string;
    customStyles: customStyles;
    setShowCountDown: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ICountDown {
    setShowCountDown: React.Dispatch<React.SetStateAction<boolean>>;
}