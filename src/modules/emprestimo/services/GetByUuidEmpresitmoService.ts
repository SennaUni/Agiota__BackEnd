import { Emprestimo } from "@prisma/client";

import { IGetByUuidEmprestimoDTO } from "../dtos/GetByUuidEmprestimoDTO";
import { IEmprestimoRepository } from "../repositories/IEmprestimoRepository";

class GetByUuidEmpresitmoService {
   constructor(private service: IEmprestimoRepository) {}

   async execute({ uuid }: IGetByUuidEmprestimoDTO): Promise<Emprestimo> {
      const emprestimo = await this.service.getByUuid({
         uuid,
      });

      return emprestimo;
   }
}

export { GetByUuidEmpresitmoService };
