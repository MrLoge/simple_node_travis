function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {

  const aws_region = process.env.AWS_REGION;

  while(true) {
    console.log(`The AWS region configured is: ${aws_region}`);
    await sleep(5000);
  }
}

main();
