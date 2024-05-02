import app from "./app";
import { APP_CONFIG } from "./config";
import logger from "./config/logger";

function serverBootstrap() {
  try {
    const PORT = APP_CONFIG.PORT;
    console.log(PORT);
    app.listen(PORT, () => {
      logger.info(`Listening on port number ${PORT}`);
    });
  } catch (error) {
    console.log("getting error while starting server");
    process.exit(1);
  }
}

serverBootstrap();
