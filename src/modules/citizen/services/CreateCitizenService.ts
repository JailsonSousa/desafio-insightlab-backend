import { injectable, inject } from 'tsyringe';
import Citizen from '../infra/typeorm/entities/Citizen';
import ICitizensRepository from '../repositories/ICitizensRepository';

interface Request {
  name: string;
  cpf: string;
  birthDate: Date;
  vaccineName: string;
  vaccineDose: string;
}

@injectable()
class CreateCitizenService {
  constructor(
    @inject('CitizensRepository')
    private citizensRepository: ICitizensRepository,
  ) {}

  public async execute({
    name,
    cpf,
    birthDate,
    vaccineName,
    vaccineDose,
  }: Request): Promise<Citizen> {

    const citizen = await this.citizensRepository.create({
      name,
      cpf,
      birthDate,
      vaccineName,
      vaccineDose,
    });

    return citizen;
  }
}

export default CreateCitizenService;
