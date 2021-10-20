import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateCitizenService from '../../../services/CreateCitizenService';
import GetAllCitizenService from '../../../services/GetAllCitizenService';

export default class CitizensController {

  public async getAll(request: Request, response: Response): Promise<Response> {
    try {
      const getAll = container.resolve(GetAllCitizenService);
      const citizens = await getAll.execute();

      return response.json(citizens);
    } catch (err: any) {
      return response.status(400).json({ error: err.message });
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {

    const {
      name,
      cpf,
      birthDate,
      vaccineName,
      vaccineDose,
    } = request.body;

    const createCitizen = container.resolve(CreateCitizenService);

    const citizen = await createCitizen.execute({
      name,
      cpf,
      birthDate,
      vaccineName,
      vaccineDose,
    });

    return response.json(citizen);
  }
}
