#!/usr/bin/env bash

import figlet = require("figlet");
import fs = require("fs");
import path = require("path");

export = function firstModule(name: string): void {
    const fontData = fs.readFileSync(
        path.join(__dirname, "assets/fonts/ANSI_Regular.flf"),
        "utf-8"
    );
    figlet.parseFont("ANSI Regular", fontData);
    const text = figlet.textSync(`hello ${name}`, {
        font: "ANSI Regular",
        horizontalLayout: "fitted",
    });
    console.log(text);
};
