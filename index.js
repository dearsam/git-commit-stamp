#!/usr/bin/env node
const process = require('child_process')
const fs = require('fs')
const path = require('path')

const {argv} = require('yargs')
  .help('h')
  .demandOption(['c'])
  .alias('c', 'config')
  .describe('c', 'File to make the change in')
  .default('target', 'GIT_COMMIT')
  .alias('t', 'target')
  .describe('t', 'String to replace with commit id')
  .usage('Usage: $0 [options]')
  .epilog('Kodbruket 2020')

const filepath = path.resolve(__dirname, argv.config)
let file = fs.readFileSync(filepath, 'utf8')
let revision = process.execSync('git rev-parse HEAD').toString().trim()
const dirty = process.execSync('git status -s').toString().length > 0
if (dirty) {
  revision += '-dirty'
}
file = file.replace(argv.target, revision)
fs.writeFileSync(filepath, file)
