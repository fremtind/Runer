# runer-cdk
> Backend for the Runer legibility test software

## Structure
* **bin/app.ts** - the main entrypoint to the CDK app
* **lib/runer-cdk-stack.ts** - the stack holding CFN resources
* **lib/** - the CDK stack and code resources
* **test/** - Code for unittesting the stack and other code

## Setup
run
* `yarn build`
this will compile the code and build the project, including running tests and generating the cloudformation template file
