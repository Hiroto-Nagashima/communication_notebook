import axios from "axios";
import 'date-fns';
import format from "date-fns/format";
import { useContext, useEffect, useState, VFC } from "react";
import { MenuAppBar } from '../organisms/Header'
import { Kid } from '../types/api/kid'
import { CircularDeterminate } from '../atoms/Spinner'
import { useLocation } from 'react-router-dom'
import { DatePicker } from "../atoms/DatePicker";
import { UserContext } from "../provider/UserProvider";
import { SimpleAlerts } from "../atoms/Alert";
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { useHistory } from 'react-router-dom'

export const TopPage:VFC =()=>{

  const [result, setResult] = useState<Kid | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [status, setStatus] = useState<"error" | "warning" | "info" | "success" >("info")
  const [label, setLabel] = useState<string>("")
  const { kidId } = useContext(UserContext)
  const { state } = useLocation()
  const [selectedDate, setSelectedDate] = useState<Date | string | null>(null);
  const history = useHistory()

  const createNewDate=(date: Date | string | number ) =>{
      const newDate = format(new Date(date), 'MM/dd/yyyy')
      // const targetDate= newDate.getDate() + "-" +  (newDate.getMonth() + 1)  + "-" +  newDate.getFullYear()
      console.log(newDate)
      setSelectedDate(newDate)
      console.log(selectedDate)
      return selectedDate
    }
  const onClickConfirm = ()=>{
    history.push({pathname:"/registration", state: selectedDate})
    console.log(selectedDate)
  }

  const handleDateChange = (date: MaterialUiPickersDate) => {
    createNewDate(date!)
    console.log(date)
  };
  const fetchUser =()=>(
    axios
    .get<Kid>(`http://localhost:3000/api/v1/kids/${kidId}`)
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
          // kid={{kid_name: `${result?.kid_name}`, nursery_name: `${result?.nursery_name}`}}
          name={result?.name}
          daycare_name={result?.daycare_name}
        />
        <DatePicker onChangeDate={handleDateChange} onClickConfirm={onClickConfirm} selectedDate={selectedDate}/>
        <SimpleAlerts status={status} label={label} />
      </>
      )
    }
    </>
  )
}