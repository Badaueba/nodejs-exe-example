#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firstModule = require("./first-module");
var arg = process.argv[2];
firstModule(arg);
