# Unit testing with Jest

Self-notes for unit testing with Jest. End-assignment for a Unit Testing course at Business College Helsinki.


## 1. Create a project folder

## 2. Create package.json (with npm init or manually):
```shell
> npm init -y  ## answer yes to any question
```

or
```shell
> npm init
```

and answer questions

## 3. Install jest as devDependency:
```shell
> npm install jest --save-dev
```
This modifies the package.json file by adding devDependencies to it as:
```json
  "devDependencies": {
    "jest": "^27.4.7"  // you can use "latest"
  }
```
We don't need jest in production.

## 4. Modify test-script in package.json:

```json
  "scripts": {
    "test": "jest"  // you can run "npm test" instead of "jest"
  }
```

## 5. In the project create a test folder  named `__tests__`:
With 2 underscores preceding and following

## 6. Write tests

First write a description of the tests for documention and planning, then write the actual tests

## 7. To run tests (all that have "test" in the name, even if it's not in the test folder):
```shell
npm test
```

But we must run the test when we write them and make sure that they fail first: run the tests before you write the implemetation of the methods (or comment out implementation). If they don't fail before the methods are implemented, they are useless.

![screenshot of test failing](fail.png?raw=true "screenshot of the test failing when method is not yet implemented")

In the screenshot above the suite B tests are failing, as supposed to, because the tested method is not implemented yet.

![screenshot of callback in toThrow](toThrow.png?raw=true "screenshot of callback needed in toThrow")

Rememeber: you need the callback when throwing an error.
And check your parentheses :D

## 7B. To run only one test file:
```shell
npm test --testFile fileToBeTested.test.js
```
## 8. Implement methods (and possibily constructor)

Implements methods and run the tests again.

![screenshot of passed tests](pass.png?raw=true "screenshot of passed tests")

### Acknowledgment

Documentation: https://jestjs.io/

IH at Business College Helsinki for teaching.