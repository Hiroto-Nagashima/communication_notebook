import { VFC } from "react";

type Props={
  label:string
}
export const RegistrationPage:VFC<Props>=(props)=>{
  const { label} = props
  return (
    <h1>{label}</h1>
  )
}