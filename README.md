# Haiphen 

[![GoPkg Widget]][GoPkg] [![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/569/badge)](https://bestpractices.coreinfrastructure.org/projects/569)

<img src="https://github.com/kubernetes/kubernetes/raw/master/logo/logo.png" width="100">

----
### Create your own traceable digital-copyright
(Beta)<br>
source tarball to stamp your docker-image with a traceable digital copyright
   
## Instructions:

### Install
Requirements: [homebrew](https://brew.sh/), [docker](https://docker.com), [macosx terminal](https://github.com/sickcodes/Docker-OSX) all installed.<br>
Navigate to [command-line](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) on your machine and enter the following commands:<br>
> `brew tap JudeSafo/homebrew-testtap`
> `brew install digital-copyright` <br><br>
If succesfull you should be able to test installation by typing `haiphen` and confirming it returns

```Examples:
    # Create a test file [test.txt]
    echo "This is a Test." > test.txt
    # Generate a Key and save it to file [encryption.key]
    bash  -g > encryption.key
    ...
```

### Run Demo

Navigate to `{path}` where you intend to publish your docker image and type:
> `haiphen -e -i License -o LICENSE_sha256hash.enc` <br><br>
Confirm that a (chrome) browser opens to https:/https://ipfs.infura.io/ipfs/{hash} with the encrypted license and hash-address you just created

### Monitor
1. ...
