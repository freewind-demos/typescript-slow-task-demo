function slowTask(seconds: number): void {
  const start = Date.now();
  while (Date.now() - start <= seconds * 1000) {
  }
}

console.log(`Now: ${Date.now()}`)

slowTask(1);

console.log(`Now: ${Date.now()}`)

slowTask(2);

console.log(`Now: ${Date.now()}`)
