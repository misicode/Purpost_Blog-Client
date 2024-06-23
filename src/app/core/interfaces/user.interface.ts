import { Role } from "./role.interface"

export interface User {
  email: string,
  names: string,
  surnames: string,
  role: Role,
}

export interface UserUpdateRequest {
  username: string,
  names: string,
  surnames: string,
}

export interface UserProfile {
  email: string,
  names: string,
  surnames: string,
}