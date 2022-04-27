/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const glob = require('glob');
const fse = require('fs-extra');
/* eslint-enable @typescript-eslint/no-var-requires */

const srcDir = path.join('./src');
const jsDir = path.join('./dist/js');
const esmDir = path.join('./dist/esm');

const files = glob.sync('**/*.d.ts', {
    cwd: srcDir
});

const imgFiles = glob.sync('**/*.{svg,png}', {
    cwd: srcDir
});

const styleFiles = glob.sync('**/*.css', {
    cwd: srcDir
});

files.forEach(file => {
    const from = path.join(srcDir, file);
    const to = path.join(jsDir, file);
    fse.copySync(from, to);
});

imgFiles.forEach(file => {
    const from = path.join(srcDir, file);
    const toEsm = path.join(esmDir, file);
    fse.copySync(from, toEsm);
});

styleFiles.forEach(file => {
    const from = path.join(srcDir, file);
    const toEsm = path.join(esmDir, file);
    fse.copySync(from, toEsm);
});