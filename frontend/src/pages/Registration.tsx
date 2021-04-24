import axios from "axios";
import { useEffect, useState, ChangeEvent, VFC, memo, useCallback, useContext } from "react";
import { CircularDeterminate } from '../atoms/Spinner'
import { useHistory, useLocation } from 'react-router-dom'
import { InputOfNotebook } from "../organisms/InputOfNotebook";
import { CommunicationNotebook } from "../types/api/communication_notebook";
import { UserContext } from "../provider/UserProvider";
import format from "date-fns/format";

export const RegistrationPage:VFC= memo(()=>{
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [dinner, setDinner] = useState<string | null>(null);
  const handleDinnerChange = useCallback((e:ChangeEvent<HTMLInputElement>) => {
    setDinner(e.target.value);
    console.log("1")
  },[])

  const [breakfast, setBreakfast] = useState<string | null>(null);
  const handleBreakfastChange = useCallback((e:ChangeEvent<HTMLInputElement>) => {
    setBreakfast(e.target.value);
    console.log("2")
  },[])

  const [memo, setMemo] = useState<string | null>(null);
  const handleMemoChange = useCallback((e:ChangeEvent<HTMLInputElement>) => {
    setMemo(e.target.value);
  }, [])

  const [bodyTemperature, setBodyTemperature] = useState<number |string| null>(null);
  const handleBodyTemperatureChange = useCallback((e:ChangeEvent<HTMLInputElement>) => {
    setBodyTemperature(e.target.value);
  },[])

  const [ bath, setBath ] = useState<string | null>(null);

  const handleBathChange = useCallback((e:ChangeEvent<HTMLInputElement>) => {
    setBath((e.target as HTMLInputElement).value);
    console.log(bath)
  },[bath]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  },[])
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const handleMenuItemClick = useCallback((event: React.MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    console.log(selectedIndex)
  },[selectedIndex])

  const [open, setOpen] = useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };
  const { kidId } = useContext(UserContext)
  const history = useHistory()
  const handleClickRegister=() =>{
    axios
      .post(`http://localhost:3000/api/v1/kids/${ kidId }/communication_notebooks`,{
        communication_notebook:{
          bodyTemperature: bodyTemperature,
          mood: selectedIndex,
          bath: bath,
          breakfast: breakfast,
          dinner: dinner,
          memo: memo,
          date: state
        }
      })
      .then((res)=>{
        history.push({pathname: "/top", state: "success"})
        console.log(res.data)
      })
      .catch((e)=>console.log(e))
  }

//以下のstateはTop.tsxから遷移してきた時に送られてくる。DatePickerで選択した日付が入っている.
  const { state } = useLocation<Date>()
  const example = "aaa:bbb:ccc"
  console.log(typeof example)
  const newDate = format(state!, 'yyyy/MM/dd')
  console.log(newDate)
  console.log(kidId)

  const fetchNotebook =()=>(
    axios
    .get<Array<CommunicationNotebook>>(`http://localhost:3000/api/v1/kids/${ kidId }/communication_notebooks`,{
      params:{
        target_date: state
      }
      }
    )
    .then((res)=>{
      console.log("hello")
      setDinner(res.data[0].dinner)
      console.log("bye")
      setBreakfast(res.data[0].breakfast)
      setMemo(res.data[0].memo)
      setBodyTemperature(res.data[0].bodyTemperature)
      setSelectedIndex(res.data[0].mood)
      setBath(res.data[0].bath)
      }
    )
    .catch((e)=> setError(e))
    .finally(() => setLoading(false))
  )

  useEffect(()=>{
    fetchNotebook()
  },[fetchNotebook])
  return (
    <>
    {loading?
      <CircularDeterminate/>
      :error?(
        <h1>エラー</h1>
      ):(
        <>
          <InputOfNotebook
            selectedDate={newDate}
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