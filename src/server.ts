import App from "./app";

import "dotenv/config";

class Server {
   constructor() {
      this.launchServer();
   }

   private launchServer() {
      App.listen({ port: Number(process.env.PORT) }, (err, address) => {
         if (err) {
            console.error(err);
            process.exit(1);
         }
         console.log(`Server listening at ${address}`);
      });
   }
}

export default new Server();
