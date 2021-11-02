# Haiphen 

[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/569/badge)](https://bestpractices.coreinfrastructure.org/projects/569)

<br>https://haiphenai.com<br>Create your own traceable digital-copyright<br><br>
<img src="https://github.com/JudeSafo/digital-copyright/blob/master/logo/Snip20210901_8.png" width="400">

----
(Beta)<br>
source tarball to stamp your docker-image with a traceable digital copyright
   

### Install
*_Requirements_*: You should have the following installed on your machine:
- [homebrew](https://brew.sh/) 
- [docker](https://docker.com)
- [reactjs-boilerplate](https://www.npmjs.com/package/reactjs-boilerplate)
- [macosx terminal](https://github.com/sickcodes/Docker-OSX) <br>
Navigate to [command-line](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) on your machine and enter the following commands:<br>
```
$ brew tap JudeSafo/homebrew-testtap
$ brew install digital-copyright
```
If succesfull you should be able to test installation by typing `haiphen` and confirming it returns

```
Examples:
    # Create a test file [test.txt]
    echo "This is a Test." > test.txt
    # Generate a Key and save it to file [encryption.key]
    bash  -g > encryption.key
    ...
```
### Create a test docker image
```
$ reactjs-boilerplate test_docker_image
...
$ docker compose up -d
$ docker build -t test_docker_image

```
### Run Haiphen

Navigate to `{path}` where you intend to publish your docker image and type:
```
$ haiphen -e -i License -o LICENSE_sha256hash.enc
```
Confirm that a (chrome) browser opens to https:/https://ipfs.infura.io/ipfs/{hash} with the encrypted license and hash-address you just created

### Deploy docker image and monitor
1. $ docker run test_docker_image
