import { ChangeEvent,useContext,useState, VFC } from "react";
import { LoginPaper } from '../organisms/LoginPaper'
import { Footer } from '../organisms/Footer'
import { Box } from "@material-ui/core";
import { useHistory } from 'react-router-dom'
import { UserContext } from "../provider/UserProvider";

export const LoginPage:VFC=()=>{

  const[ value, setValue] = useState<number | null>(null)
  const history = useHistory()
  const onChangeValue=(e:ChangeEvent<HTMLInputElement>)=>{
    const value:number = Number(e.target.value);
    setValue(value)
  }
  const { setKidId } = useContext(UserContext)

  const onClickButton=()=> {
    setKidId!(value)
    history.push({pathname:"/top"})
  }
  return (
    <>
      <Box mt={8}>
        <LoginPaper title="Login" value={value} onChange={onChangeValue} onClick={onClickButton}/>
      </Box>
      <Footer label="communication notebook"/>
    </>
  )
}