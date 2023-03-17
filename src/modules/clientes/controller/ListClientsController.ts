import { FastifyReply, FastifyRequest } from "fastify";

import ListClientsService from "../services/ListClientsService ";

class ListClientsController {
   public async execute(
      request: FastifyRequest,
      reply: FastifyReply
   ): Promise<FastifyReply> {
      const listClients = ListClientsService.execute();

      return reply.code(200).send({
         listClients,
      });
   }
}

export default new ListClientsController();
