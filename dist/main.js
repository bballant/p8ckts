#!/usr/bin/env node
// for running as npx package after building
import { Command } from 'commander';
const program = new Command();
program
    .name('pico8-popts')
    .description('Simple "compiler" for pico-8 programs')
    .version('0.0.0')
    .requiredOption('-p, --p8 <my-program.p8>', 'The schema to use for export')
    .option('-o, --out <output>', 'The output file, defaults to `./my-program-full.p8`')
    .action(async (options) => {
    console.log('You are so cool');
    console.log('p8:', options.p8);
    console.log('out:', options.out || `./${options.p8.replace('.p8', '-full.p8')}`);
});
await program.parseAsync(process.argv);
