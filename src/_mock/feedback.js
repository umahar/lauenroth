import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  company: "User Feedback text here",
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'In active']),
  role: sample(['Admin', 'Super Admin', 'User']),
}));

export default users;
