#!/usr/bin/env node

const bcrypt = require('bcrypt');
const read = require('read');
const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

const PASSWORD = args.password || args.p;
const ROUNDS = args.rounds || args.r || 15;

if (PASSWORD) {
  console.log(bcrypt.hashSync(PASSWORD, ROUNDS));
} else {
  read({
    prompt: 'Password: ',
    silent: true,
    replace: '*',
  }, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(bcrypt.hashSync(res, ROUNDS));
  });
}
