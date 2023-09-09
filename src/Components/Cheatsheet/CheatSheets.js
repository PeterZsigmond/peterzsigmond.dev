export const cheatsheets = [{
        category: 'Linux',
        img: 'linux',
        topics: [{
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
        },
        {
            name: 'GPG encrypt',
            cheats: [{
                name: 'Encrypt',
                code: 'sudo gpg --symmetric --no-symkey-cache <i>file</i>',
                desc: '--no-symkey-cache: It will not cache the passphrase on the computer<br>' +
                    'Result: <i>file.gpg</i>'
            },
            {
                name: 'Decrypt',
                code: 'sudo gpg --output <i>file</i> --decrypt <i>file.gpg</i>',
                desc: 'Result: <i>file</i>'
            }]
        },
        {
            name: 'Find',
            cheats: [{
                name: 'Search for files in a directory hierarchy',
                code: 'find <i>dir/</i> -name \'<i>*.txt</i>\'',
                desc: 'Case-insensitive: Use -iname instead of -name'
            }]
        },
        {
            name: 'Disk Usage',
            cheats: [{
                name: 'File system disk space usage',
                code: 'df -h',
                desc: '-h: human-readable'
            },
            {
                name: 'Estimate file space usage',
                code: 'du -ah <i>dir/</i>',
                desc: '-a: all files<br>' +
                    '-h: human-readable'
            }]
        },
        {
            name: 'Temperature',
            cheats: [{
                name: 'Monitor the temperatures, voltages, and fans',
                code: 'apt install lm-sensors<br>' +
                    'watch sensors',
                desc: ''
            }]
        },
        {
            name: 'Partitioning',
            cheats: [{
                name: 'Print block device attributes',
                code: 'blkid',
                desc: ''
            },
            {
                name: 'List block devices',
                code: 'lsblk -f',
                desc: '-f: info about filesystems'
            },
            {
                name: 'Manipulate disk partition table',
                code: 'fdisk <i>/dev/sda</i>',
                desc: ''
            },
            {
                name: 'Interactive GUID partition table (GPT) manipulator',
                code: 'gdisk <i>/dev/sda</i>',
                desc: ''
            },
            {
                name: 'Build a filesystem',
                code: 'mkfs.ext4/ntfs -f -L <i>label</i> <i>/dev/sda1</i>',
                desc: '-f: (NTFS only) fast format (no zeroing and bad sector checking)<br>' +
                    '-L: volume label'
            }]
        },
        {
            name: 'Curl',
            cheats: [{
                name: 'Transfer a URL',
                code: 'curl <i>Options URL</i>',
                desc: '-u <i>username</i><br>' +
                    '-k: insecure (no SSL verification)<br>' +
                    '-o <i>output.txt</i><br>' +
                    '-v: verbose'
            }]
        },
        {
            name: 'Net Speed Test',
            cheats: [{
                name: 'Testing internet bandwidth',
                code: 'apt/brew install speedtest-cli<br>' +
                    'speedtest',
                desc: ''
            }]
        },
        {
            name: 'Screen',
            cheats: [{
                name: 'Start session',
                code: 'screen',
                desc: '-ls: List sessions<br>' +
                    '-r: <i>id</i> (Resume session)'
            },
            {
                name: 'Key bindings',
                code: 'Ctrl+a :quit Kill session<br>' +
                    'Ctrl+a c Create a new window (with shell)<br>' +
                    'Ctrl+a " List all windows<br>' +
                    'Ctrl+a 0 Switch to window 0 (by number)<br>' +
                    'Ctrl+a A Rename the current window<br>' +
                    'Ctrl+a S Split current region horizontally into two regions<br>' +
                    'Ctrl+a | Split current region vertically into two regions<br>' +
                    'Ctrl+a Tab Switch the input focus to the next region<br>' +
                    'Ctrl+a Ctrl+a Toggle between the current and previous windows<br>' +
                    'Ctrl+a Q Close all regions but the current one<br>' +
                    'Ctrl+a X Close the current region<br>' +
                    'Ctrl+d Detach',
                desc: ''
            }]
        },
        {
            name: 'Grep',
            cheats: [{
                name: 'Search in files',
                code: 'grep <i>Options Pattern Files</i><br>' +
                    'grep -rni <i>"text"</i> .',
                desc: '-r: recursive<br>' +
                    '-n: display line number<br>' +
                    '-i: case-insensitive'
            }]
        },
        {
            name: 'FTP client',
            cheats: [{
                name: 'Install',
                code: 'apt/brew install ncftp',
                desc: ''
            },
            {
                name: 'Open connection',
                code: 'cd <i>workdir</i><br>' + 
                    'ncftp -u <i>username</i> -p <i>password</i> <i>host</i>',
                desc: ''
            },
            {
                name: 'Commands',
                code: 'help<br>' +
                    'ls<br>' +
                    'cd <i>dir</i><br>' +
                    'get <i>file</i><br>' +
                    'put <i>file</i><br>' +
                    'quit',
                desc: ''
            }]
        }]
    },
    {
        category: 'Docker',
        img: 'docker',
        topics: [{
            name: 'Commands',
            cheats: [{
                name: 'Build',
                code: 'docker build -t <i>username/image-name:tag<i> .',
                desc: ''
            },
            {
                name: 'Run',
                code: 'docker run -d -p <i>80:80</i> -v <i>volume-name</i>:<i>/dir</i> --name <i>container-name</i> --restart always <i>image-name</i>',
                desc: '-d: detached<br>' +
                    '-p <i>outside-port:inside-port</i><br>' +
                    '-v: volume'
            },
            {
                name: 'Show images',
                code: 'docker image ls<br>' +
                'docker image rm <i>name</i>',
                desc: 'rm: remove'
            },
            {
                name: 'List containers',
                code: 'docker ps -a',
                desc: '-a: all'
            },
            {
                name: 'Login',
                code: 'docker login/logout',
                desc: ''
            },
            {
                name: 'Push',
                code: 'docker push <i>image-name</i>',
                desc: ''
            },
            {
                name: 'Volumes',
                code: 'docker volume create <i>name</i><br>' +
                    'docker volume ls<br>' +
                    'docker volume inspect <i>name</i><br>' +
                    'docker volume rm <i>name</i>',
                desc: ''
            },
            {
                name: 'Shell into container',
                code: 'docker exec -it <i>container-name</i> /bin/bash',
                desc: '-it: (required) interactive, tty'
            },
            {
                name: 'Scan image for vulnerabilities',
                code: 'docker scan <i>image-name</i>',
                desc: ''
            }]
        },
        {
            name: 'PhpMyAdmin',
            cheats: [{
                name: 'Run it containerized',
                code: 'docker run -d -p <i>8080:80</i> -e PMA_ARBITRARY=1 --rm --name <i>phpmyadmin</i> phpmyadmin',
                desc: '-d: detached<br>' +
                    '-e PMA_ARBITRARY=1: Use arbitrary servers<br>' +
                    '--rm: Remove the container when it exits'
            }]
        }]
    },
    {
        category: 'JavaScript',
        img: 'js',
        topics: [{
            name: 'Node.js, npm',
            cheats: [{
                name: 'Install Node.js with Homebrew',
                code: 'brew install node',
                desc: ''
            },
            {
                name: 'Get version',
                code: 'node -v<br>' +
                    'npm -v',
                desc: ''
            },
            {
                name: 'Upgrade npm',
                code: 'npm i -g npm@latest',
                desc: ''
            },
            {
                name: 'List installed packages',
                code: 'npm ls<br>' +
                    'npm ls -g',
                desc: '-g: global'
            },
            {
                name: 'Install a package',
                code: 'npm i<br>' +
                    'npm i <i>package</i><br>' +
                    'npm i -g <i>package</i>',
                desc: 'no arg: from package.json<br>' +
                    '-g: global'
            },
            {
                name: 'Remove a package',
                code: 'npm rm <i>package</i><br>' +
                    'npm rm -g <i>package</i>',
                desc: '-g: global'
            },
            {
                name: 'Update packages',
                code: 'npm update',
                desc: '^: latest minor version<br>' +
                    '~: latest patch version<br>' +
                    '--save: update values in package.json<br>' +
                    '-g: global'
            }]
        },
        {
            name: 'React (Create React App)',
            cheats: [{
                name: 'Create React App',
                code: 'npx create-react-app@latest my-app',
                desc: ''
            },
            {
                name: 'Run local server',
                code: 'npm run start',
                desc: ''
            },
            {
                name: 'Build',
                code: 'npm run build',
                desc: ''
            }]
        },
        {
            name: 'React (Next.js)',
            cheats: [{
                name: 'Create a Next.js App',
                code: 'npx create-next-app@latest',
                desc: ''
            },
            {
                name: 'Run local server',
                code: 'npm run dev',
                desc: ''
            },
            {
                name: 'Build',
                code: 'npm run build',
                desc: ''
            }]
        }]
    }
];
