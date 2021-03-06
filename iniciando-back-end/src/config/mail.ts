interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    }
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'pauloscarano@tecdev.site',
      name: 'Paulo da TechDev',
    },
  },
} as IMailConfig;
