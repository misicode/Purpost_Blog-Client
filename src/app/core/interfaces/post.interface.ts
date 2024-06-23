import { Image } from "./image.interface"
import { User } from "./user.interface"

export interface Post {
  idPost: string,
  title: string,
  body: string,
  user: User,
  image: Image,
  createdAt: Date,
  updatedAt: Date,
  active: boolean,
}

export interface PostRequest {
  username: string,
  title: string,
  body: string,
  image: File,
}