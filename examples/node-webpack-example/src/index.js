async function bootstrap() {
  while (true) {
    const timeout = 1000;
    await new Promise((resolve) => setTimeout(resolve, timeout));
    import("a").then((a) => console.log(a));
    console.log(`123`, 123);
  }
}
bootstrap();
