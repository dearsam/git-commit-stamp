# git-commit-stamper

Replaces a string (`GIT_COMMIT`) in a file

## Usage
```sh
yarn add --dev @kodbruket/git-commit-stamp
yarn git-commit-stamp -h
```

## Example
```sh
echo "GIT_COMMIT" > example
yarn git-commit-stamper -c example
cat example // 222fe84e7b28f1de86651d5a93dd580406009a54-dirty
```