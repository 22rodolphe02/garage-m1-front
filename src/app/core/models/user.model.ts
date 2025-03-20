export interface User {
  id: number;
  username: string;
  email: string;
  registrationDate: Date,
  token?: string; // Token JWT (optionnel)
}
