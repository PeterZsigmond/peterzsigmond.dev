export const cheatsheets = [{
    category: 'Linux',
    img: 'linux',
    topics: [
    {
        name: 'Split',
        cheats: [{
            name: 'Split a file into pieces',
            code: 'split -d -b <i>10K/M/G file file.</i>',
            desc: '-d: use numeric suffixes, not alphabetic<br>' +
                '-b: bytes<br>' +
                'Result: file.00 file.01 ...'
        },
        {
            name: 'Join pieces into a file',
            code: 'cat <i>file.*</i> > <i>file</i>',
            desc: 'Result: the original file'
        }]
    }]
}];
