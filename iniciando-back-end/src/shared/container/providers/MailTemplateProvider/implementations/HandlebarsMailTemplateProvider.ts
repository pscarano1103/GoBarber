import handlebars from 'handlebars';
import fs from 'fs';

import IMailTemplateDTO from '../dtos/IParseMailTemplateDTO';
import IMailTemplateProvider from '../models/IMailtemplateProvider';

class HandlebarsMailTemplateProvider implements IMailTemplateProvider {
  public async parse({
    file,
    variables,
  }: IMailTemplateDTO): Promise<string> {
    const templateFilecontent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });

    const parseTemplate = handlebars.compile(templateFilecontent);

    return parseTemplate(variables);
  }
}

export default HandlebarsMailTemplateProvider;
