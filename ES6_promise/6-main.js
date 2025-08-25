import handleProfileSignup from './6-final-user';

console.log(handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg'));

async function test() {
  const result = await handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg');
  console.log(result);
}

test();
