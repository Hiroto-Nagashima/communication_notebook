import { Button } from "@material-ui/core";
import axios from "axios";
import { useContext, useEffect, useState, VFC } from "react";
import { MenuAppBar } from '../organisms/Header'
import { Kid } from '../types/api/kid'
import { CircularDeterminate } from '../atoms/Spinner'
import { useLocation } from 'react-router-dom'
import { DatePickers } from "../atoms/DatePickers";
import { UserContext } from "../provider/UserProvider";
import { SimpleAlerts } from "../atoms/Alert";

type Props={
}
export const TopPage:VFC<Props>=(props)=>{
  const { } = props
  const [result, setResult] = useState<Kid | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [status, setStatus] = useState<"error" | "warning" | "info" | "success" >("info")
  const [label, setLabel] = useState<string>("")
  const { kidId } = useContext(UserContext)
  const { state } = useLocation()
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
        <DatePickers/>
        <SimpleAlerts status={status} label={label} />
      </>
      )
    }
    </>
  )
}