import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IFindAllInMonthfromProviderDTO from '../dtos/IFindAllInMonthFromProviderDTO';
import IFindAllInDayfromProviderDTO from '../dtos/IFindAllInDayFromProviderDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date, provider_id: string): Promise<Appointment | undefined>;
  findAllInMonthfromProvider(data: IFindAllInMonthfromProviderDTO): Promise<Appointment[]>;
  findAllInDayFromProvider(data: IFindAllInDayfromProviderDTO): Promise<Appointment[]>;
}
