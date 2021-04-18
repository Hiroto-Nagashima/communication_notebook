import axios from "axios";
import { useEffect, useState, ChangeEvent, VFC } from "react";
import { MenuAppBar } from '../organisms/Header'
import { Kid } from '../types/api/kid'
import { CircularDeterminate } from '../atoms/Spinner'
import { useLocation } from 'react-router-dom'
import { InputOfNotebook } from "../organisms/InputOfNotebook";

type Props={
}
export const RegistrationPage:VFC<Props>=(props)=>{
  const { } = props
  const [result, setResult] = useState<Kid | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [dinner, setDinner] = useState('');
  const handleDinnerChange = (e:ChangeEvent<HTMLInputElement>) => {
    setDinner(e.target.value);
  }
  const [breakfast, setBreakfast] = useState('');
  const handleBreakfastChange = (e:ChangeEvent<HTMLInputElement>) => {
    setDinner(e.target.value);
  }
  const [memo, setMemo] = useState('');
  const handleMemoChange = (e:ChangeEvent<HTMLInputElement>) => {
    setDinner(e.target.value);
  }
  const { state } = useLocation<string>()

  const fetchUser =()=>(
    axios
    .get<Kid>(`http://localhost:3000/api/v1/communication_notebooks?date=${state}`)
    .then((res)=>
      setResult(res.data)
    )
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
        <InputOfNotebook
          selectedDate={ state }
          dinner={dinner}
          onChangeDinner={handleDinnerChange}
          breakfast={breakfast}
          onChangeBreakfast={handleBreakfastChange}
          memo={memo}
          onChangeMemo={handleMemoChange}
          />
      </>
      )
    }
    </>
  )
}