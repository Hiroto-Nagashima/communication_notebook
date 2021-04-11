import 'date-fns';
import ja from "date-fns/locale/ja";
import format from "date-fns/format";
import React, { VFC } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import axios from 'axios';

class ExtendedUtils extends DateFnsUtils {
  getCalendarHeaderText(date:Date) {
    return format(date, "yyyy MMM", { locale: this.locale });
  }
  getDatePickerHeaderText(date:Date) {
    return format(date, "MMMd日", { locale: this.locale });
  }
}
export type Props={
  open: boolean
  onAccept:() => void
}

export const DatePickers:VFC<Props>=(props)=> {

  const { open,onAccept } = props
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(),
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const onClickOK = ()=>(
    axios
    .get("https://google.com",{
      params: {
        date: selectedDate
      }
    })
    .then((res) => console.log(res))
    .catch((e) => console.log(e))
  )

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
          open={open}
          onAccept={onAccept}
        />
    </MuiPickersUtilsProvider>
  );
}