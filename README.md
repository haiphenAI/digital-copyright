# digital-copyright
Beta
source tarball to stamp your code with a traceable digital copyright

## Instructions:

### Install
1. `brew tap JudeSafo/homebrew-testtap`
2. `brew install digital-copyright`
3. test installation by typing `haiphen`
4. ```Examples:
    # Create a test file [test.txt]
    echo "This is a Test." > test.txt
    # Generate a Key and save it to file [encryption.key]
    bash  -g > encryption.key
    # Encrypt the file to [test.enc]
    bash  -e -i test.txt -o test.enc -k "$(cat encryption.key)"
    # Decrypt the file to [test.dec]
    bash  -d -i test.enc -o test.dec -k "$(cat encryption.key)"

    # View the start or end of an of an encrypted file:
    head -c 256 test.enc | hexdump -C -v
    tail -c 256 test.enc | hexdump -C -v

    # When using the default '.enc' file extension
    # the name of the output file is not required
    bash  -e -i test.txt
    bash  -d -i test.txt.enc

    # If a file name contains spaces then use quotes.
    # This exmple uses a password instead of a key.
    bash  -e -i "test file.txt" -o "test file.enc" -p "Password123"

    # If no key or password is passed to the command
    # then you will be prompted for a password.
    bash  -e -i test.txt -o test.enc
    ```

### Run
1. Navigate to `{path}` where you intend to publish your docker image is saved
2. run: `haiphen -e -i License -o LICENSE_sha256hash.enc`
3. copy returned `{hash}`
4. Navigate to https:/https://ipfs.infura.io/ipfs/{hash} to monitor file
