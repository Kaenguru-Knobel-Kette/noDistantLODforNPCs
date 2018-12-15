# No Distant LOD for NPCs
An UPF patcher for Skyrim and Skyrim Special Edition. Removes distant LOD from NPCs.

The Unified Patching Framework (UPF) is a core module provided with [zEdit](https://github.com/z-edit/zedit) to generate patch plugins.

# Installation
1. Install the latest release of [zEdit](https://github.com/z-edit/zedit/releases).
2. Download the latest release of [No Distant LOD for NPCs](https://github.com/Kaenguru-Knobel-Kette/noDistantLODforNPCs/releases).
3. Open zEdit. Click the button in the top right that looks like three little cubes. Click 'Install Module' and select the downloaded file.
4. Restart zEdit.

Now you are able to build the patch plugin. These steps should be repeated each time you add, remove or update a mod to your load order.

1. Open zEdit and load your entire load order.
2. Press Ctrl + Shift + P or click the button in the top right that looks like a jigsaw piece.
3. Make sure No Distant LOD for NPCs is ticked and click 'Build'.
4. Exit zEdit saving the created patch plugin zPatch.esp.
5. Make sure zPatch.esp is activated at the bottom of your load order.

# Developement
Download [NodeJS](https://nodejs.org/en/download) and install it. This will allow you to use `npm` from the command line to install NodeJS packages. We use `npm` to set up a gulp build system so we can use multiple JavaScript source files in development, quickly install the patcher in zEdit and create release archives with a single command.

Open a command prompt in the folder where you cloned the repository. Type `npm install` to install packages.

`npm run build` creates the dist folder. In the dist folder will be a built index.js JavaScript file (concatenating index.js and all .js files in the src folder), the entire contents of your partials folder and your module.json file.

`npm run release` creates a ZIP archive in the releases folder. This archive is a release archive that you can upload and share with people. It's set up so users can install it through zEdit's Manage Extensions window.

`npm run test` installs the patcher in zEdit for quick testing. Variable `zEditPath` in gulpfile.js must be set to your zEdit installation. This will overwrite an already exisiting patcher with the same name!
