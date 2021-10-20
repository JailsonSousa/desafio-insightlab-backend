import Citizen from '../infra/typeorm/entities/Citizen';
import ICreateCitizenDTO from '../dtos/ICreateCitizenDTO';

export default interface ICitizensRepository {
  getAll(): Promise<Citizen[]>;
  findById(id: string): Promise<Citizen | undefined>;
  create(data: ICreateCitizenDTO): Promise<Citizen>;
  save(citizen: Citizen): Promise<Citizen>;
}
