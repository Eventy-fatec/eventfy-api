import { container } from 'tsyringe';

import { ICompanyRepository } from '@modules/company/domain/repositories/ICompanyRepository';
import { PrismaCompanyRepository } from '@modules/company/infra/prisma/PrismaCompanyRepository';
import {
  IEncoderProvider,
  BcryptEncoderProvider,
  ITokenManagerProvider,
  JwtTokenManagerProvider,
  IDateProvider,
  DayJsDateProvider,
  IEmailProvider,
  EtherealMailProvider,
} from '@infra/providers';

// Repositories

container.registerSingleton<ICompanyRepository>(
  'CompanyRepository',
  PrismaCompanyRepository,
);

// Providers

container.registerSingleton<IDateProvider>('DateProvider', DayJsDateProvider);
container.registerSingleton<ITokenManagerProvider>(
  'TokenManagerProvider',
  JwtTokenManagerProvider,
);
container.registerInstance<IEncoderProvider>(
  'EncoderProvider',
  new BcryptEncoderProvider(8),
);
container.registerInstance<IEmailProvider>(
  'EmailProvider',
  new EtherealMailProvider(),
);
