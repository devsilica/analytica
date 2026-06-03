import { customers } from "@/data/customers";

let customerDB = [...customers];

function delay(ms: number) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

export async function getCustomers() {
  await delay(1000);

  return customerDB;
}

export async function getCustomerById(
  id: number
) {
  await delay(500);

  return customerDB.find(
    (customer) =>
      customer.id === id
  );
}

export async function deleteCustomer(
  id: number
) {
  await delay(600);

  customerDB =
    customerDB.filter(
      (customer) =>
        customer.id !== id
    );

  return id;
}

export async function createCustomer(
  customer: any
) {
  await delay(700);

  const newCustomer = {
    ...customer,

    id: Date.now(),
  };

  customerDB.unshift(
    newCustomer
  );

  return newCustomer;
}