import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';
import { getDaysInMonth, getDate } from 'date-fns';

import IAppointmentsRepository from '../repositories/IAppointmentsRepository';


interface IRequest {
  provider_id: string;
  month: number;
  year: number;
}

type IResponse = Array<{
  day: number;
  available: boolean;
}>;

@injectable()
class ListProviderService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({ provider_id, month, year }: IRequest): Promise<IResponse> {
    const appointments = await this.appointmentsRepository.findAllInMonthfromProvider({
      provider_id,
      year,
      month
    });

    const numberOfdaysInMonth = getDaysInMonth(new Date(year, month -1));

    const eachDayArray = Array.from(
      { length: numberOfdaysInMonth },
      (_, index) =>  index + 1,
    );

    const availability =  eachDayArray.map(day => {
      const appointmentsInDay = appointments.filter(appointment => {
        return getDate(appointment.date) === day;
      });

      return {
        day,
        available: appointmentsInDay.length < 10,
      };
    });

    return availability;
  }
}

export default ListProviderService;
