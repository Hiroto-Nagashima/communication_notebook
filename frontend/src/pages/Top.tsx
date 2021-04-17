import { Button } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState, VFC } from "react";
import { MenuAppBar } from '../organisms/Header'
import { Kid } from '../types/api/kid'
import { CircularDeterminate } from '../atoms/Spinner'

type Props={
}
export const TopPage:VFC<Props>=(props)=>{
  const { } = props
  const [result, setResult] = useState<Kid | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const onClickGetUser =()=>(
    axios
    .get<Kid>("http://localhost:3000/api/v1/kids/1")
    .then((res)=> {
      setResult(res.data)
      console.log(result)
    })
    .catch((e)=> setError(e))
    .finally(() => setLoading(false))
  )

  useEffect(()=>{
    onClickGetUser()
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
      </>
      )
    }
    </>
  )
}