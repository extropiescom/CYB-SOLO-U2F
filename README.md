# CYB-SOLO-U2F
JS API based on Chrome U2F API

## How it works
The API call the chrome u2f api which is designed for FIDO U2F authenticator, USB HID device, to send data to and get respose from SOLO. Here is the dir struct of code.
```
|.
|--app
|----dist //test web page and resource, as well as the packed js
|------test_fp.html //test fingprint function
|------test_wallet.html //test of wallet
|------index.js //es4 wrapper of renderer.js for fp
|------renderer.js //packed js
|--src
|----b64.js //base64 encode and decode
|----index.js //api implement
|----u2f-io.js //logic layer above u2f transfer layer
|----u2f.js // google u2f api interface
|----utils.js //assist functions
|----constants.js //const define 
|----log.js //colorful and condition log print
|--test
|----fp.js //test for fingerprint function
|----wallet.js //test for solo wallet
|--package.json //
|--webpack.config.babel.js
|--README.md
```
## Setup the enviornment
There are some conditions to deloy the code:
1. The brower MUST BE chrome because it uses chrome api. 
2. The websites which import this function MUST via https

Here is the plan.
1. Write the code to call the api to do things and make it packed.
You probably need
```
npm install
npm run dev
```

2. Setup a website via https and use files in /app/dist Both IIS for windows and apache for OSX or Linux are OK.

3. If you use VSCODE. Make sure the launch.json like this in your way
```
"version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "u2f test",
            "url": "https://<IP>/CYB-SOLO-U2F/test.html",
            "webRoot": "${workspaceFolder}"
        }
    ]
```
Then you could start the debug. If you want to swith the wallet or fingerprint test, two modifications are needed:
```
// webpack.config.babel.js
export default [
    {
      target: 'web',
      devtool:  'source-map',
      entry: {
        renderer: `./test/wallet.js`, //or fp.js
        ......
```
```
//.vscode/launch.json
            ...
            name": "u2f test",
            "url": "https://192.168.3.26/CYB-SOLO-U2F/test_wallet.html",//or test_fp.html
            "webRoot": "${workspaceFolder}"
            ...
```


4. If you don't use VSCODE. Juts config the webpack and visit you website like url above in your chrome and use console to debug.


## Trouble shooting
Contract chester@lichester.com or submit github issues.