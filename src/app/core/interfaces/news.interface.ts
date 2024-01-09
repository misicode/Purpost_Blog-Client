import { Image } from "./image.interface"
import { User } from "./user.interface"

export interface News {
  idNews: string,
  title: string,
  body: string,
  user: User,
  image: Image,
  createdAt: Date,
  active: boolean,
}