#!/usr/bin/env node

import firstModule = require("./first-module");

const arg = process.argv[2];

firstModule(arg);
