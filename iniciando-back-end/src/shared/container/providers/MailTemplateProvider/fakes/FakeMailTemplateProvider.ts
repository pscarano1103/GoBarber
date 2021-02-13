import IMailTemplateDTO from '../dtos/IParseMailTemplateDTO';
import IMailTemplateProvider from '../models/IMailtemplateProvider';

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse({
    template,
  }: IMailTemplateDTO): Promise<string> {
    return template;
  }
}

export default FakeMailTemplateProvider;
