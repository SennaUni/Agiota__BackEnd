import { FastifyReply, FastifyRequest } from "fastify";

import { ICreateEmprestimoDTO } from "../dtos/CreateEmprestimoDTO";
import EmprestimoPrismaRepository from "../repositories/EmprestimoPrismaRepository";
import { CreateEmprestimoService } from "../services/CreateEmpresitmoService";

class CreateEmprestimoController {
   async execute(
      request: FastifyRequest,
      reply: FastifyReply
   ): Promise<FastifyReply> {
      const data = request.body as ICreateEmprestimoDTO;

      const service = new CreateEmprestimoService(EmprestimoPrismaRepository);

      const emprestimo = await service.execute(data);

      return reply.code(200).send({
         emprestimo,
      });
   }
}

export default new CreateEmprestimoController();
