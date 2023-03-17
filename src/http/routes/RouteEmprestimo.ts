import CreateEmprestimoController from "@modules/emprestimo/controller/CreateEmprestimoController";
import GetEmprestimoByUuidController from "@modules/emprestimo/controller/GetEmprestimoByUuidController";
import { FastifyInstance } from "fastify";

class RouteEmprestimo {
   async routes(fastify: FastifyInstance) {
      fastify.post("/emprestimo", (request, reply) =>
         CreateEmprestimoController.execute(request, reply)
      );

      fastify.get("/emprestimo/:uuid", (request, reply) =>
         GetEmprestimoByUuidController.execute(request, reply)
      );
   }
}

export default new RouteEmprestimo().routes;
