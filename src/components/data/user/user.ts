interface User {
  name: string;
  email: string;
}

export default async function getUsers() {
  const response = await fetch("https://localhost:3000/users");
  return (await response.json()) as User;
}
