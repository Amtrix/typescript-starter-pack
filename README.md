<h1>Typescript Starter Pack</h1>

<h2>Required to run:</h2>
npm and node

<h2>Usage:</h2>
You should only need to modify the content in the client and server directories. When installing new npm packages or typings, use "--save" to save them in the corresponding json files.

<h2>Most important commands:</h2>
<b>npm install</b>: installs the typings for the libs and compiles the server code into build/server.</br>
<b>npm start</b>: starts the server.</br>
<b>gulp sync</b>: syncs all non-source files from client into build/client.</br>
<b>gulp webpack</b>: compiles and packs all your source code from client into build/client/main.js.</br>
<b>gulp sync-client</b>: watches on changes and recompiles when necessary -- client only.</br>
<b>typings [--save] [--install] [--global]</b>: use to install optional typings for libs you add.</br> 