import { EntityRepository, Repository } from "typeorm";
import Donates from "../models/Donates";

@EntityRepository(Donates)
class DonatesRepository extends Repository<Donates> {
  public async all(): Promise<any | null> {
    return await this.all();
  }
}

export default DonatesRepository;
