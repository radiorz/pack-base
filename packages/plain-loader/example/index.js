import a from "./aaa.txt";

console.log(`a`, a);
async function bootstrap() {
  while (true) {
    const timeout = 1000;
    await new Promise((resolve) => setTimeout(resolve, timeout));
    console.log(`a`, a);
  }
}
bootstrap();
