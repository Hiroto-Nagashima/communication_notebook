import axios from "axios";
import { useEffect, useState, ChangeEvent, VFC, memo, useCallback } from "react";
import { CircularDeterminate } from '../atoms/Spinner'
import { useLocation, useParams } from 'react-router-dom'
import { InputOfNotebook } from "../organisms/InputOfNotebook";
import { CommunicationNotebook } from "../types/api/communication_notebook";

export const RegistrationPage:VFC= memo(()=>{
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

  const [dinner, setDinner] = useState<string | null>(result.dinner);
  const handleDinnerChange = (e:ChangeEvent<HTMLInputElement>) => {
    setDinner(e.target.value);
    console.log("1")
  }

  const [breakfast, setBreakfast] = useState<string | null>(result.breakfast);
  const handleBreakfastChange = (e:ChangeEvent<HTMLInputElement>) => {
    setBreakfast(e.target.value);
    console.log("2")
  }

  const [memo, setMemo] = useState<string | null>(result.memo);
  const handleMemoChange = useCallback((e:ChangeEvent<HTMLInputElement>) => {
    setMemo(e.target.value);
  }, [])

  const [bodyTemperature, setBodyTemperature] = useState<number |string|  null>(result.body_temperature);
  const handleBodyTemperatureChange = (e:ChangeEvent<HTMLInputElement>) => {
    setBodyTemperature(e.target.value);
  }

  const [ bath, setBath] = useState<string | null>("有");

  const handleBathChange = useCallback((e:ChangeEvent<HTMLInputElement>) => {
    setBath((e.target as HTMLInputElement).value);
    console.log(bath)
  },[bath]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    console.log(selectedIndex)
  };

  const [open, setOpen] = useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleClickRegister=() =>{
    axios
      .post("http://localhost:3000/api/v1/communication_notebooks",{
        params:{
          
        }
      })
  }
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
          anchorEl={anchorEl}
          index={selectedIndex}
          onClose={handleClose}
          onClickMenu={handleMenuItemClick}
          onClickButton={handleClick}
          isOpen={open}
          onClickDialogClose={handleDialogClose}
          onClickDialogOpen={handleDialogOpen}
          onClickRegister={handleClickRegister}
          />
      </>
      )
    }
    </>
  )
})