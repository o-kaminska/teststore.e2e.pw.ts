import { faker } from "@faker-js/faker";

export const accountData = [
  {
    id: "user - 1",
    gender: "Mr",
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate().toLocaleDateString("en-US"),
  },
  {
    id: "user - 2",
    gender: "Mrs",
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate().toLocaleDateString("en-US"),
  },
];
