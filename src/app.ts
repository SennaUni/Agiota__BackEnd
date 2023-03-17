import autoload from "@fastify/autoload";
import fastify, { FastifyInstance } from "fastify";
import path from "path";

// import route1 from './http/routes/route1';
// import route2 from './http/routes/route2';

class App {
   public server: FastifyInstance;

   constructor() {
      this.server = fastify();
      this.setRoutes();
   }

   public setRoutes() {
      this.server.post("/ping", async (request, reply) => {
         console.log("teste");

         return reply.status(200).send({ message: "vai se foder galeano" });
      });

      // this.server.register(route1);
      // this.server.register(route2);

      this.server.register(autoload, {
         dir: path.join(__dirname, "http", "routes"),
      });
   }
}

export default new App().server;
