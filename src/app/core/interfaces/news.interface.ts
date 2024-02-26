import { Image } from "./image.interface"
import { User } from "./user.interface"

export interface News {
  idNews: string,
  title: string,
  body: string,
  user: User,
  image: Image,
  createdAt: Date,
  updatedAt: Date,
  active: boolean,
}

export interface NewsRequest {
  title: string,
  body: string,
  image: File,
}