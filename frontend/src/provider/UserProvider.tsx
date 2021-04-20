import React,{ createContext, useState, VFC } from 'react'

type Props={
  children: React.ReactNode
}
type ContextProps = {
  kidId?: number | null
  setKidId?: React.Dispatch<React.SetStateAction<number | null>>
};

export const UserContext = createContext<ContextProps>({});

export const UserProvider:VFC<Props> =(props)=>{
  const { children } = props
  const [kidId, setKidId] = useState<number | null>(null)
  return(
    <UserContext.Provider value={{kidId, setKidId}}>
      {children}
    </UserContext.Provider>
  )
}