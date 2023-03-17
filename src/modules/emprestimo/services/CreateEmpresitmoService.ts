import { Emprestimo } from "@prisma/client";

import { ICreateEmprestimoDTO } from "../dtos/CreateEmprestimoDTO";
import { IEmprestimoRepository } from "../repositories/IEmprestimoRepository";

class CreateEmprestimoService {
   constructor(private service: IEmprestimoRepository) {}

   async execute({ name, valor }: ICreateEmprestimoDTO): Promise<Emprestimo> {
      const emprestimo = await this.service.create({
         name,
         valor,
      });

      return emprestimo;
   }
}

export { CreateEmprestimoService };
