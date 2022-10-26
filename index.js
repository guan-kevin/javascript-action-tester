const core = require('@actions/core');
const github = require('@actions/github');

try {
  const input1 = core.getInput('test_input-1');
  const input2 = core.getInput('test_input-2');
  const input3 = core.getInput('test_input-3');
  const input4 = core.getInput('test_input-4');
  console.log(`Input 1: ${input1}, Input 2: ${input2}, Input 3: ${input3}, Input 4: ${input4}`);
  console.log("Running commit sha")
} catch (error) {
  core.setFailed(error.message);
}
