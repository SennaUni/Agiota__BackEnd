import { FastifyReply, FastifyRequest } from "fastify";

import { IGetByUuidEmprestimoDTO } from "../dtos/GetByUuidEmprestimoDTO";
import EmprestimoPrismaRepository from "../repositories/EmprestimoPrismaRepository";
import { GetByUuidEmpresitmoService } from "../services/GetByUuidEmpresitmoService";

class GetEmprestimoByUuidController {
   public async execute(
      request: FastifyRequest,
      reply: FastifyReply
   ): Promise<FastifyReply> {
      const { uuid } = request.params as IGetByUuidEmprestimoDTO;

      const service = new GetByUuidEmpresitmoService(
         EmprestimoPrismaRepository
      );

      const emprestimo = await service.execute({ uuid });

      return reply.code(200).send({
         emprestimo,
      });
   }
}

export default new GetEmprestimoByUuidController();
