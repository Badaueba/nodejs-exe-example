#!/usr/bin/env bash
"use strict";
var figlet = require("figlet");
var fs = require("fs");
var path = require("path");
module.exports = function firstModule(name) {
    var fontData = fs.readFileSync(path.join(__dirname, "assets/fonts/ANSI_Regular.flf"), "utf-8");
    figlet.parseFont("ANSI Regular", fontData);
    var text = figlet.textSync("hello ".concat(name), {
        font: "ANSI Regular",
        horizontalLayout: "fitted",
    });
    console.log(text);
};
