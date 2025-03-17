#!/usr/bin/env node
// for running as npx package after building

import { Command } from 'commander';
import fs from 'fs/promises';
import path from 'path';

const program = new Command();

type Opts = {
    p8: string;
    out?: string;
};

async function cleanIncludeFile(filePath: string): Promise<string> {
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        return content
            .split('\n')
            .map(line => line.trimEnd())
            .filter(line => !line.trimStart().startsWith('--'))
            .join('\n');
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        return '';
    }
}

async function processP8File(p8Path: string, outputPath: string) {
    try {
        const dir = path.dirname(p8Path);
        const content = await fs.readFile(p8Path, 'utf-8');

        // Replace #include with cleaned file
        const lines = await Promise.all(
            content.split('\n').map(async (line) => {
                const match = line.match(/^#include\s+"(.+)"$/);
                if (match && match[1]) {
                    const includePath = path.join(dir, match[1]);
                    const cleanedContent = await cleanIncludeFile(includePath);
                    return cleanedContent;
                }
                return line;
            })
        );

        const fileOut = lines.join('\n');
        await fs.writeFile(outputPath, fileOut, 'utf-8');
        console.log(`Processed file saved to ${outputPath}`);
    } catch (error) {
        console.error(`Error processing file ${p8Path}:`, error);
    }
}

program
    .name('pico8-popts')
    .description('Simple "compiler" for pico-8 programs')
    .version('0.0.1')
    .requiredOption('-p, --p8 <my-program.p8>', 'The .p8 file to process')
    .option('-o, --out <output>', 'The output file, defaults to `./my-program-full.p8`')
    .action(async (options: Opts) => {
        const outputPath = options.out || `./${options.p8.replace('.p8', '-full.p8')}`;
        await processP8File(options.p8, outputPath);
    });

await program.parseAsync(process.argv);

