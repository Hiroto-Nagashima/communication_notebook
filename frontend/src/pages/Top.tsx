import axios from "axios";
import 'date-fns';
import format from "date-fns/format";
import { useContext, useEffect, useState, VFC, memo } from "react";
import { MenuAppBar } from '../organisms/Header'
import { Kid } from '../types/api/kid'
import { CircularDeterminate } from '../atoms/Spinner'
import { Link, useLocation } from 'react-router-dom'
import { DatePicker } from "../atoms/DatePicker";
import { UserContext } from "../provider/UserProvider";
import { SimpleAlerts } from "../atoms/Alert";
import { useHistory } from 'react-router-dom'
import { CommunicationNotebook } from "../types/api/communication_notebook";
import { Box, Button } from "@material-ui/core";

export const TopPage:VFC =memo(()=>{
  const [result, setResult] = useState<Kid | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [status, setStatus] = useState<"error" | "warning" | "info" | "success" >("info")
  const [label, setLabel] = useState<string>("")
  const { kidId } = useContext(UserContext)
  const { state } = useLocation()
  const [selectedDate, setSelectedDate] = useState< Date | null>(new Date());
  const [ allNotebooks, setAllNotebooks ] = useState<Array<CommunicationNotebook>>([])
  const history = useHistory()

  const onClickNewButton =()=>{
    axios
    .get(`http://localhost:3000/api/v1/kids/${kidId}/communication_notebooks/new`,{
      params:{
        target_date: selectedDate
      }
    })
    .then((res)=>{
      if(res.data.status === "no data"){
        history.push({pathname:"/registration", state:selectedDate})
      }else{
        setStatus("warning")
        setLabel("既にデータが存在しています")
      }
    })
    .catch((e)=> console.log(e))
    // history.push!({pathname:"/registration", state:selectedDate})
    // console.log(allNotebooks)
  }
  const onClickPastButton =()=>{
    axios
    .get(`http://localhost:3000/api/v1/kids/${kidId}/communication_notebooks`)
    .then((res)=>{
      setAllNotebooks(res.data)
      console.log(allNotebooks)
    })
    .catch((e)=> console.log(e))
  }

  const onClickUpdateButton =(e:React.MouseEvent<HTMLButtonElement>)=>{
    // history.push({pathname:"/registration"})
    console.log((e.target as HTMLSpanElement).innerHTML);

  }

  const handleDateChange = (date: Date | null ) => {
    setSelectedDate(date)
    console.log(date)
  };
  const fetchUser =()=>(
    axios
    .get<Kid>(`http://localhost:3000/api/v1/kids/${kidId}`,{
      params:{
        kid_id:kidId
      }
    })
    .then((res)=> {
      setResult(res.data)
      setStatus("success")
      if(state){
        setLabel("連絡帳を記録しました！！")
      }else{
        setLabel("ログインしました")
      }
      console.log(res)
    })
    .catch((e)=> setError(e))
    .finally(() => setLoading(false))
  )

  useEffect(()=>{
    fetchUser()
  },[])
  return (
    <>
    {loading?
      <CircularDeterminate/>
      :error?(
        <h1>エラー</h1>
      ):(
      <>
        <MenuAppBar
          title="NoteBook"
          iconColor="inherit"
          barColor="primary"
          auth= {true}
          name={result?.name}
          daycare_name={result?.daycare_name}
        />
        <DatePicker onChangeDate={handleDateChange}  selectedDate={selectedDate}/>
        <button color="primary"  onClick={onClickNewButton}>連絡帳を新規登録</button>
        <button color="primary"  onClick={onClickPastButton}>過去の連絡帳を見る</button>
        <SimpleAlerts status={status} label={label} />
        {allNotebooks.map((allNotebook)=>(
          <Box>
            <Button color="primary" variant="contained" onClick={onClickUpdateButton} >{allNotebook.date}</Button>
          </Box>
        ))}
      </>
      )
    }
    </>
  )
})