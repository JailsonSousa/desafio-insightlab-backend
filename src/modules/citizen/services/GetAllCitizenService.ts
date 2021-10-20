import { injectable, inject } from 'tsyringe';
import Citizen from '../infra/typeorm/entities/Citizen';
import ICitizensRepository from '../repositories/ICitizensRepository';

@injectable()
class GetAllCitizenService {
  constructor(
    @inject('CitizensRepository')
    private citizensRepository: ICitizensRepository,
  ) {}
  public async execute(): Promise<Citizen[] | []> {
    return await this.citizensRepository.getAll();
  }
}

export default GetAllCitizenService;
