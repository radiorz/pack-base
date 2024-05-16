async function bootstrap() {
  while (true) {
    const timeout = 1000;
    await new Promise((resolve) => setTimeout(resolve, timeout));
    console.log(`1`, 1);
  }
}
bootstrap();
