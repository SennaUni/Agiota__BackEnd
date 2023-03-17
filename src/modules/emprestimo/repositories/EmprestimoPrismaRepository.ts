import { PrismaClient, Emprestimo } from "@prisma/client";

import { ICreateEmprestimoDTO } from "../dtos/CreateEmprestimoDTO";
import { IGetByUuidEmprestimoDTO } from "../dtos/GetByUuidEmprestimoDTO";
import { IEmprestimoRepository } from "./IEmprestimoRepository";

class EmprestimoPrismaRepository implements IEmprestimoRepository {
   protected prisma: PrismaClient;

   constructor() {
      this.prisma = new PrismaClient();
   }

   async create({ name, valor }: ICreateEmprestimoDTO): Promise<Emprestimo> {
      const emprestimo = await this.prisma.emprestimo.create({
         data: {
            name,
            valor,
         },
      });

      return emprestimo;
   }

   async getByUuid({ uuid }: IGetByUuidEmprestimoDTO): Promise<Emprestimo> {
      const emprestimo = await this.prisma.emprestimo.findFirst({
         where: {
            id: uuid,
         },
      });

      return emprestimo;
   }
}

export default new EmprestimoPrismaRepository();
