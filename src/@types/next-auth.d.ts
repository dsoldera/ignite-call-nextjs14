// this file will OVERWRITE the Next Auth Types
import 'next-auth'

declare module 'next-auth' {
  export interface User {
    id: string
    name: string
    email: string
    username: string
    avatar_url: string
  }

  interface Session {
    user: User
  }
}