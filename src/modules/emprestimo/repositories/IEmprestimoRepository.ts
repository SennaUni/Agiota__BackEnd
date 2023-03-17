import { Emprestimo } from "@prisma/client";

import { ICreateEmprestimoDTO } from "../dtos/CreateEmprestimoDTO";
import { IGetByUuidEmprestimoDTO } from "../dtos/GetByUuidEmprestimoDTO";

interface IEmprestimoRepository {
   create(data: ICreateEmprestimoDTO): Promise<Emprestimo>;
   getByUuid(data: IGetByUuidEmprestimoDTO): Promise<Emprestimo>;
}

export { IEmprestimoRepository };
