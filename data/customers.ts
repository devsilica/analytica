import { faker } from "@faker-js/faker";

faker.seed(123);

export const customers = Array.from(
  { length: 100 },
  (_, index) => ({
    id: index + 1,

    name: faker.person.fullName(),

    email: faker.internet.email(),

    revenue: faker.number.int({
      min: 1000,
      max: 50000,
    }),

    country: faker.location.country(),

    status: faker.helpers.arrayElement([
      "Active",
      "Pending",
      "Inactive",
    ]),
  })
);