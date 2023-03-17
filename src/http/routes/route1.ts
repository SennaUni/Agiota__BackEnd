import { FastifyInstance } from "fastify";

import CreateClientController from "../../modules/clientes/controller/CreateClientController";
import ListClientsController from "../../modules/clientes/controller/ListClientsController";
import middleware from "../middlewares/middleware1";

class Route1 {
   async routes(fastify: FastifyInstance) {
      fastify.addHook("onRequest", (request, reply, done) =>
         middleware(request, reply, done)
      );

      fastify.post("/client", (request, reply) =>
         CreateClientController.execute(request, reply)
      );

      fastify.get("/clients", (request, reply) =>
         ListClientsController.execute(request, reply)
      );
   }
}

export default new Route1().routes;
