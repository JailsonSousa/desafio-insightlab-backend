import { container } from 'tsyringe';

import IUsersRepository from '../modules/users/repositories/IUsersRepository'
import UsersRepository from '../modules/users/infra/typeorm/repositories/UsersRepository'


import ICitizensRepository from '../modules/citizen/repositories/ICitizensRepository'
import CitizensRepository from '../modules/citizen/infra/typeorm/repositories/CitizensRepository'


container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ICitizensRepository>(
  'CitizensRepository',
  CitizensRepository,
);
