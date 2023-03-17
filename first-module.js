#!/usr/bin/env bash
"use strict";
var figlet = require("figlet");
var fs = require("fs");
var path = require("path");
module.exports = function firstModule(name) {
    var fontData = fs.readFileSync(path.join(__dirname, "assets/fonts/ANSI_Regular.flf"), "utf-8");
    figlet.parseFont("ANSI Regular", fontData);
    var text = figlet.textSync("hello -> ".concat(name, ",  -> fica com deuso"), {
        font: "ANSI Regular",
        horizontalLayout: "fitted",
    });
    // const text = `Hello meu amigao, que deus te abencoe${name}`;
    console.log(text);
};
