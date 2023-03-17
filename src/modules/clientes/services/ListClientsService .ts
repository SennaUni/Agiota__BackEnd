import { ClientDTO } from "../dtos/ClientDTO";
import { ClientRepository } from "../repositories/ClientRepository";

class ListClientsService {
   public execute(): ClientDTO[] {
      const repository = ClientRepository.getInstance();

      return repository.listClients();
   }
}

export default new ListClientsService();
