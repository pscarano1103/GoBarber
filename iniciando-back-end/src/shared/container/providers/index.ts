import { container } from 'tsyringe';
import mailConfig from '@config/mail';

import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';
import IStorageProvider from './StorageProvider/models/IStorageProvider';

import EtherealMailProvider from './MailProvider/implementations/EtherealMailProvider';
import SESMailProvider from './MailProvider/implementations/SESMailProvider';
import IMailProvider from './MailProvider/models/IMailProvider';

import IMailTemplateProvider from './MailTemplateProvider/models/IMailtemplateProvider';
import HandlebrasMailTemplateProvider from './MailTemplateProvider/implementations/HandlebarsMailTemplateProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);


container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  HandlebrasMailTemplateProvider,
);

container.registerInstance<IMailProvider>(
  'MailProvider',
  mailConfig.driver === 'ethereal'
  ? container.resolve(EtherealMailProvider)
  : container.resolve(SESMailProvider),
);
