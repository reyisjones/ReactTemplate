# React Template

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

On PowerShell:
`$env:NODE_OPTIONS = "--openssl-legacy-provider"`

## Install PNPM (Optional)
`npm i pnpm -g`

## Remove extra node modules and install with pnpm
```
rm -rf node_modules\
pnpm i
```
## Run Storybook
`pnpm storybook`