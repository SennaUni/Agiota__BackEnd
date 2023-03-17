import { FastifyReply, FastifyRequest } from "fastify";

import { ClientDTO } from "../dtos/ClientDTO";
import CreateClientService from "../services/CreateClientService";

class CreateClientController {
   public async execute(
      request: FastifyRequest,
      reply: FastifyReply
   ): Promise<FastifyReply> {
      const { login, senha } = request.body as ClientDTO;

      const newClient = CreateClientService.execute({
         login,
         senha,
      });

      return reply.code(200).send({
         newClient,
      });
   }
}

export default new CreateClientController();
