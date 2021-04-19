import axios from "axios";
import { useEffect, useState, ChangeEvent, VFC } from "react";
import { MenuAppBar } from '../organisms/Header'
import { Kid } from '../types/api/kid'
import { CircularDeterminate } from '../atoms/Spinner'
import { useLocation } from 'react-router-dom'
import { InputOfNotebook } from "../organisms/InputOfNotebook";
import { CommunicationNotebook } from "../types/api/communication_notebook";

type Props={
}
export const RegistrationPage:VFC<Props>=(props)=>{
  const { } = props
  const [result, setResult] = useState<CommunicationNotebook>({
    id: null,
    daycare_id: null,
    body_temperature: null,
    mood: null,
    bath: null,
    breakfast: null,
    dinner: null,
    memo: null
  })

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const [dinner, setDinner] = useState<string | null>(result!.dinner);
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

  const [bodyTemperature, setBodyTemperature] = useState<number | null>(null);
  const handleBodyTemperatureChange = (e:ChangeEvent<HTMLInputElement>) => {
    const body_temperature_value:number = Number(e.target.value);
    setBodyTemperature(body_temperature_value)
  }

  const [ bath, setBath] = useState<string>("有");

  const handleBathChange = (e:ChangeEvent<HTMLInputElement>) => {
    setBath((e.target as HTMLInputElement).value);
    console.log(bath)
  };
//以下のstateはTop.tsxから遷移してきた時に送られてくる。DatePickerで選択した日付が入っている.
  const { state } = useLocation<string>()

//ここまで。
  const fetchUser =()=>(
    axios
    .get<CommunicationNotebook>(`http://localhost:3000/api/v1/communication_notebooks`)
    .then((res)=>
    //推定エラー発生箇所。
      setResult(res.data)
    )
    //ここまで。
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
        <InputOfNotebook
          selectedDate={ state }
          dinner={dinner}
          onChangeDinner={handleDinnerChange}
          breakfast={breakfast}
          onChangeBreakfast={handleBreakfastChange}
          memo={memo}
          onChangeMemo={handleMemoChange}
          bath={bath}
          onChangeBath={handleBathChange}
          body_temperature={bodyTemperature}
          onChangeBodyTemperature={handleBodyTemperatureChange}
          />
      </>
      )
    }
    </>
  )
}