# digital-copyright
Beta
source tarball to stamp your code with a traceable digital copyright

## Instructions:

### Install
1. Brew install via `brew install git@github.com:JudeSafo/digital-copyright`

### Run
1. Navigate to `<path>` where you intend to publish your docker image is saved
2. run: `haiphen -e -i License -o LICENSE_sha256hash.enc`
3. copy returned `<hash>`
4. Navigate to https:/https://ipfs.infura.io/ipfs/`<hash>` to monitor file
