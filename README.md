# Haiphen 
<br>https://haiphenai.com<br> 

[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/569/badge)](https://bestpractices.coreinfrastructure.org/projects/569)<br>
<img src="https://github.com/JudeSafo/digital-copyright/blob/master/logo/Snip20210901_8.png" width="400">

----
"Create your own traceable digital-copyright"<br>
\[**_Coming soon_**: simplified installation and execution by leveraging [dockerhub](https://hub.docker.com/r/jks142857/digital-copyright)\]<br><br>
Haiphen: a low level binary file to 'stamp' your docker-image with an encrypted, digital copyright \[patent pending\]. A community of developers, leveraging this tool, will be able to selectively and securely share pertinent API data with eachother. End users, using the tool will have single entry point access point to all of their 3rd party software (easier to manage, make payments, audit, etc.) All copy-rights are secured on an immutable, decentralized blockhain ([filecoin](https://filecoin.io/))   
   

### Install <a name="install"></a>
*_Requirements_*: You should have the following installed on your machine:
- [homebrew](https://brew.sh/) 
- [docker](https://www.docker.com/get-started)
- [reactjs-boilerplate](https://www.npmjs.com/package/reactjs-boilerplate)
- [macosx terminal](https://github.com/sickcodes/Docker-OSX) <br>

Navigate to [command-line](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) on your machine and enter the following commands:<br>
```
$ brew tap JudeSafo/homebrew-testtap
$ brew install digital-copyright
```
Alternatively you can clone this repot `git clone https://github.com/haiphenai/digital-copyright/` and run: 
```
$ cd digital-copyright
$ mv haiphen \usr\local\bin\haiphen
```
If succesfull test installation by typing `haiphen` and confirming it returns

```
Examples:
    # Create a test file [test.txt]
    echo "This is a Test." > test.txt
    # Generate a Key and save it to file [encryption.key]
    ...
```
### Create a test docker image <a name="create_docker_image"></a>
```
$ reactjs-boilerplate test_docker_image
...
$ docker compose up -d
$ docker build -t test_docker_image

```
### Run Haiphen to stamp your license <a name="stamp_haiphen_license"></a>

Navigate to the \<path\> where your current `license` is saved and enter the following:
```
$ haiphen -e -i License -o LICENSE_sha256hash.enc
```
Confirm that your (chrome) browser opens and the transaction has been written to an ethereum node at [hash-address](/https://ipfs.infura.io/ipfs/) 

### Deploy docker image and monitor <a name="deploy_docker"></a>
1. deploy your image
```
$ docker run test_docker_image
```
3. ...
4. (In progress) Open the [chrome extension](https://chrome.google.com/webstore/detail/haiphen-an-api-marketplac/klolgapgdelcegmhiklbpacjdaiknimb) to track your API activity 

<br><br>
## Contributing

Please read through the [contributing guidelines](./CONTRIBUTING.md)
<br><br>

## Help & Community [![Slack](https://www.google.com/url?q=https%3A%2F%2Fjoin.slack.com%2Ft%2Fhaiphenworkspace%2Fshared_invite%2Fzt-108madwc5-B5IjsD5QIscdRifdFnZLLw&sa=D&sntz=1&usg=AFQjCNGjPPJGC3eRcXjt8s5o13nZQAQ4_A)](https://the-guild.dev/discord)

Join our slack channel or mesage us on [discord](jks142857#2350) [Slack chat](https://www.google.com/url?q=https%3A%2F%2Fjoin.slack.com%2Ft%2Fhaiphenworkspace%2Fshared_invite%2Fzt-108madwc5-B5IjsD5QIscdRifdFnZLLw&sa=D&sntz=1&usg=AFQjCNGjPPJGC3eRcXjt8s5o13nZQAQ4_A)] if you run into issues or have questions. We're excited to welcome you to the community!
<br><br>

#### Demo (placeholder)
![demo](logo/main.gif)
