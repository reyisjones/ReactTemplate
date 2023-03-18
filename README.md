# React Template

## Prerequisites
- nodejs: https://nodejs.org
- pnpm: `npm i pnpm -g`


To run this project execute the following:

Execute in terminal 
```shell
    cd webapp
    npx storybook init
```

## Enable legacy OpenSSL provider.

On Unix-like (Linux, macOS, Git bash, etc.):
`export NODE_OPTIONS=--openssl-legacy-provider`

On Windows command prompt:
`set NODE_OPTIONS=--openssl-legacy-provider`

**On PowerShell**:
`$env:NODE_OPTIONS = "--openssl-legacy-provider"`

## Install PNPM (Optional)
`npm i pnpm -g`

## Remove extra node modules 
``` shell
rm -rf node_modules\
```

Powershell
```powershell
cd webapp
Get-ChildItem .\node_modules\ |Remove-Item -Recurse -Force 
```

## Install with pnpm
``` shell
pnpm i
```
## Run Storybook
`pnpm storybook`