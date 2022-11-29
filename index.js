const core = require('@actions/core');
const github = require('@actions/github');

try {
  const input1 = core.getInput('test_input-1');
  console.log(`Input 1: ${input1}`);
  console.log("Running old v4")
  
  if (input1 != 4) {
    core.setFailed("Invalid input")
  }
} catch (error) {
  core.setFailed(error.message);
}
