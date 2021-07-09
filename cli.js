#!/usr/bin/env node

const bcrypt = require('bcrypt');
const read = require('read');
const sacli = require('sacli');

const cli = sacli.Command.new()
  .optional('password', String, {alias: 'p'})
  .optional('rounds', Number, {alias: 'r'})
  .action(({password, rounds = 15}) => {
    if (password) {
      console.log(bcrypt.hashSync(password, rounds));
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
        console.log(bcrypt.hashSync(res, rounds));
      });
    }
  });

cli.eval(process.argv.slice(2));
