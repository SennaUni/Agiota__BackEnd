import { ClientDTO } from "../dtos/ClientDTO";

class ClientRepository {
   private clients: ClientDTO[];
   private static INSTANCE: ClientRepository;

   private constructor() {
      this.clients = [];
   }

   public static getInstance(): ClientRepository {
      if (!ClientRepository.INSTANCE) this.INSTANCE = new ClientRepository();
      return this.INSTANCE;
   }

   public createClient({ login, senha }: ClientDTO): ClientDTO {
      const newClient = {
         login,
         senha,
      };

      this.clients.push(newClient as ClientDTO);

      return newClient;
   }

   public listClients(): ClientDTO[] {
      return this.clients;
   }
}

export { ClientRepository };
