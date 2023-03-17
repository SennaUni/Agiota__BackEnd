import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";

class Middleware {
   async middleware(
      request: FastifyRequest,
      reply: FastifyReply,
      done: HookHandlerDoneFunction
   ) {
      console.log("Passei como esperado, somente no Route1");
      // done(); NUNCA USAR COM ASYNC MEU DEUS DO CEU
   }
}

export default new Middleware().middleware;
