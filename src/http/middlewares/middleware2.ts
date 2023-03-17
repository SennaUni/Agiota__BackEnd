import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";

class Middleware {
   async middleware(
      request: FastifyRequest,
      reply: FastifyReply,
      done: HookHandlerDoneFunction
   ) {
      console.log("Passei como esperado, somente no Route2");

      request.body = {
         teste: "deu boa",
         ...(request.body as object),
      };

      done();
   }
}

export default new Middleware().middleware;
