import { a } from "./read.js";
async function bootstrap() {
  while (true) {
    const timeout = 1000;
    await new Promise((resolve) => setTimeout(resolve, timeout));
    console.log(`a`, a);
    console.log(`123`,123)
  }
}
bootstrap();
