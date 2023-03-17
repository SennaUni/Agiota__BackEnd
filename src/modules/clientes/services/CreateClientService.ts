import { ClientDTO } from "../dtos/ClientDTO";
import { ClientRepository } from "../repositories/ClientRepository";

class CreateClientService {
   public execute({ login, senha }: ClientDTO): ClientDTO {
      const repository = ClientRepository.getInstance();

      const newClient = repository.createClient({
         login,
         senha,
      });

      return newClient;
   }
}

export default new CreateClientService();
