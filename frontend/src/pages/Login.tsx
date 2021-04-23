import { ChangeEvent,useContext,useState, VFC } from "react";
import { LoginPaper } from '../organisms/LoginPaper'
import { Footer } from '../organisms/Footer'
import { Box, Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom'
import { UserContext } from "../provider/UserProvider";
type Props={

}
export const LoginPage:VFC<Props>=(props)=>{
  const {} = props
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
    {/* <Box my={12}>
      <Button color="secondary" onClick={onClickButton}>ボタン</Button>
    </Box> */}
      <Footer label="communication notebook"/>
    </>
  )
}