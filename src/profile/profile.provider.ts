import { Connection } from 'mongoose';

import { ProfileSchema } from './entities/profile.schema';

export const ProfileProvider = [
  {
    provide: 'ProfileModel',
    useFactory: (connection: Connection) =>
      connection.model('Profile', ProfileSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
