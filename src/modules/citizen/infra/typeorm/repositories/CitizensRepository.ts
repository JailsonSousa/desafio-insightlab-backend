import ICreateCitizenDTO from '../../../dtos/ICreateCitizenDTO';
import ICitizensRepository from '../../../repositories/ICitizensRepository';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import Citizen from '../entities/Citizen';

@EntityRepository(Citizen)
class CitizensRepository implements ICitizensRepository {
  private ormRepository: Repository<Citizen>;

  constructor() {
    this.ormRepository = getRepository(Citizen);
  }

  public async getAll(): Promise<Citizen[]> {
    return await this.ormRepository.find();
  }

  public async findById(id: string): Promise<Citizen | undefined> {
    return await this.ormRepository.findOne(id);
  }

  public async create(data: ICreateCitizenDTO): Promise<Citizen> {
    const user = this.ormRepository.create(data);
    await this.ormRepository.save(user);
    return user;
  }

  public async save(user: Citizen): Promise<Citizen> {
    return await this.ormRepository.save(user);
  }
}

export default CitizensRepository;
