import 'date-fns';
import ja from "date-fns/locale/ja";
import format from "date-fns/format";
import React, { VFC } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';


class ExtendedUtils extends DateFnsUtils {
  getCalendarHeaderText(date:Date) {
    return format(date, "yyyy MMM", { locale: this.locale });
  }
  getDatePickerHeaderText(date:Date) {
    return format(date, "MMMd日", { locale: this.locale });
  }
}
export type Props={

}

export const DatePickers:VFC<Props>=(props)=> {
  const history = useHistory()
  const [selectedDate, setSelectedDate] = React.useState<Date |string| null>(null);

    const createNewDate=(props: string | number | Date ) =>{
      const date = new Date(props)
      const target_date= date.getDate() + "-" +  (date.getMonth() + 1)  + "-" +  date.getFullYear()
      setSelectedDate(target_date)
    }

    const onClickOK = ()=>{
      history.push({pathname:"/registration", state: selectedDate})
      return (console.log(selectedDate))
    }

  const handleDateChange = (date: MaterialUiPickersDate) => {
    createNewDate(date!)
    setSelectedDate(date);
    console.log(date)
  };
  return (
    <MuiPickersUtilsProvider locale={ja} utils={ExtendedUtils}>
      <KeyboardDatePicker
          margin="normal"
          id="date"
          label="日付選択"
          okLabel="決定"
          cancelLabel="キャンセル"
          format="yyyy/MM/dd"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          onAccept={onClickOK}
        />
    </MuiPickersUtilsProvider>
  );
}