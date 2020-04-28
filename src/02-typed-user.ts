export interface User {
  id: number;
  email: string;
  name: string;
}

function printUser(user: User) {
  console.log(`Name: ${user.name}, email: ${user.email}`);
}

const user: User = {
  id: 1,
  name: "Lukasz",
  email: "lukasz@gmail.com",
};

printUser(user);
