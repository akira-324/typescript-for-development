export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error("test");
  console.log(result);
} catch {
  console.log("error caught");
}
