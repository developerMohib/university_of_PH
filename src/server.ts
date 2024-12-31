import config from './config';
import app from './index';
const port = config.port;

// server run function
async function main() {
  try {
    app.listen(port, () => {
      console.log(`University Management server listening on port ${port} 🏃🏃`);
    });
  } catch (error) {
    console.error(`Failed to start the server: ${error}`);
    process.exit(1);
  }
}
main();
