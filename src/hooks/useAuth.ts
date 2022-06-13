import { useEffect, useState } from 'react'

export interface User {
  id: number
  firstname: string
  lastname: string
  email: string
  password: string
}

const useCurrentUser = () => {
  const [user, setUser] = useState<User | undefined>()

  return {
    user,
    isLogged: user?.id
    // isLogged: 1
  }
}

export default useCurrentUser
