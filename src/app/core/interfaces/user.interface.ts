import { Role } from "./role.interface"

export interface User {
  email: string,
  names: string,
  surnames: string,
  role: Role,
}