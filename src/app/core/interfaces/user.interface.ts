import { Role } from "./role.interface"

export interface User {
  idUser: string,
  email: string,
  names: string,
  surnames: string,
  role: Role,
}