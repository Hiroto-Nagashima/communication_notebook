import axios from "axios";
import { useEffect, useState, ChangeEvent, VFC, memo, useCallback, useContext } from "react";
import { CircularDeterminate } from '../atoms/Spinner'
import { useHistory, useLocation } from 'react-router-dom'
import { InputOfNotebook } from "../organisms/InputOfNotebook";
import { CommunicationNotebook } from "../types/api/communication_notebook";
import { UserContext } from "../provider/UserProvider";
import format from "date-fns/format";
import queryString from 'query-string';

export const RegistrationPage:VFC= ()=>{
  const { kidId } = useContext(UserContext)
  const { state } = useLocation<Date>()
  const location = useLocation()
  const history = useHistory()
  const newDate = format(state!, 'yyyy/MM/dd')
  const qs = queryString.parse(location.search)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [open, setOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false)
  const [dinner, setDinner] = useState<string | null>(null);
  const [breakfast, setBreakfast] = useState<string | null>(null);
  const [memo, setMemo] = useState<string | null>(null);
  const [bodyTemperature, setBodyTemperature] = useState<number |string| null>(null);
  const [bath, setBath] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(1);

  const handleDinnerChange = useCallback((e:ChangeEvent<HTMLInputElement>) => {
    setDinner(e.target.value);
  },[])

  const handleBreakfastChange = useCallback((e:ChangeEvent<HTMLInputElement>) => {
    setBreakfast(e.target.value);
  },[])

  const handleMemoChange = useCallback((e:ChangeEvent<HTMLInputElement>) => {
    setMemo(e.target.value);
  }, [])

  const handleBodyTemperatureChange = useCallback((e:ChangeEvent<HTMLInputElement>) => {
    setBodyTemperature(e.target.value);
  },[])

  const handleBathChange = useCallback((e:ChangeEvent<HTMLInputElement>) => {
    setBath((e.target as HTMLInputElement).value);
  },[]);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  },[])

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  },[])

  const handleMenuItemClick = useCallback((event: React.MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  },[])

  const handleDialogOpen = useCallback(() => {
    setOpen(true);
  },[]);

  const handleDialogClose = useCallback(() => {
    setOpen(false);
  },[]);

  const handleClickRegister=() =>{
    if(isUpdate){
      axios
      .put(`http://localhost:3000/api/v1/kids/${ kidId }/communication_notebooks/${ qs.id }`,{
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
        history.push({pathname: "/top", state: "info"})
      })
      .catch((e)=>console.log(e))
    }else
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
      })
      .catch((e)=>console.log(e))
  }

  const fetchNewNotebook =()=>(
    axios
    .get<CommunicationNotebook>(`http://localhost:3000/api/v1/kids/${ kidId }/communication_notebooks/registration`,{
      params:{
        target_date: state
      }
    })
    .then((res)=>{
      setDinner(res.data.dinner)
      setBreakfast(res.data.breakfast)
      setMemo(res.data.memo)
      setBodyTemperature(res.data.bodyTemperature)
      setSelectedIndex(res.data.mood)
      setBath(res.data.bath)
      }
    )
    .catch((e)=> {
      setError(e)
    })
    .finally(() => setLoading(false))
  )
  const fetchUpdateNotebook =()=>(
    axios
    .get<Array<CommunicationNotebook>>(`http://localhost:3000/api/v1/kids/${ kidId }/communication_notebooks/registration`,{
      params:{
        target_date: state
      }
    })
    .then((res)=>{
      setDinner(res.data[0].dinner)
      setBreakfast(res.data[0].breakfast)
      setMemo(res.data[0].memo)
      setBodyTemperature(res.data[0].bodyTemperature)
      setSelectedIndex(res.data[0].mood)
      setBath(res.data[0].bath)
      setIsUpdate(true)
      }
    )
    .catch((e)=> {
      setError(e)
    })
    .finally(() => setLoading(false))
  )

  useEffect(()=>{
    if(location.search){
      fetchUpdateNotebook()
    }else{
      fetchNewNotebook()
    }
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
}