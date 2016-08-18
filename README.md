# tabs-shore

To try the code on your computer:
---------------------------------

1. Install [Node.js 6.2.2](http://nodejs.org/dist/v6.2.2/).
2. Install [Git](http://git-scm.com/downloads).
3. Open a command prompt.
4. Change to the directory that will contain the project. In your command prompt, type: `cd <directory>` (where `<directory>` is the directory that will contain the project).
5. Copy the source repository to your computer: `git clone https://github.com/mirchev1977/tabs-shore.git`
6. Change to the project directory: `cd tabs-shore`

To run the build:

1. Run `./jake.sh karma` (Mac/Unix) or `jake karma` (Windows) to start the Karma server 
2. Navigate at least one browser to `http://localhost:9876`
3. Run `./jake.sh` (Mac/Unix) or `jake` (Windows) each time you want to run the build
4. If you want to skip testing some browsers, you can run: `./jake.sh loose=true` (Mac/Unix) or `jake loose=true` (Windows) each time you want to run the build