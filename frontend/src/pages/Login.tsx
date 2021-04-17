import { ChangeEvent,useState, VFC } from "react";
import { LoginPaper } from '../organisms/LoginPaper'
import { Footer } from '../organisms/Footer'
import { Box, Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom'
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
  const onClickButton=()=> history.push({pathname:"/", state:value})
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