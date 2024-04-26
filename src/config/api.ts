export default (): {
  PORT: number;
} => {
  return {
    PORT:
      process.env.API_PORT && parseInt(process.env.API_PORT, 10) > 0
        ? parseInt(process.env.API_PORT, 10)
        : 3000,
  };
};
