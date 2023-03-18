#!/usr/bin/env bash

import figlet = require("figlet");
import fs = require("fs");
import path = require("path");
import enquirer = require("enquirer");
import clear = require("clear");
import chalk = require("chalk");

interface EnquirerPrompt<T> {
    answer: T;
}

export = async function firstModule(name: string) {
    const fontData = fs.readFileSync(
        path.join(__dirname, "/assets/fonts/ANSI_Regular.flf"),
        "utf-8"
    );

    clear({
        fullClear: true,
    });

    const fontName = "Basic";
    figlet.parseFont(fontName, fontData);

    let text = figlet.textSync(`hello ${name || "person"}`, {
        font: fontName,
        width: 120,
        horizontalLayout: "full",
        verticalLayout: "controlled smushing",
    });

    console.log(chalk.red(text));

    const firstQuestion: EnquirerPrompt<string> = await enquirer.prompt({
        message: "What is your favorite color?",
        type: "input",
        name: "answer",
    });

    text = figlet.textSync(`${firstQuestion.answer}, Great!`, {
        font: fontName,
    });

    chalk[firstQuestion.answer]
        ? console.log(chalk[firstQuestion.answer](text))
        : console.log(chalk.grey(text));

    setTimeout(() => {}, 10_000);
};
