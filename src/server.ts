import App from './app';

const server = App.express.listen(process.env.PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started at port ${process.env.PORT || 3000}`);
});

export default server;
