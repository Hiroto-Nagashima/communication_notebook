import 'date-fns';
import ja from "date-fns/locale/ja";
import format from "date-fns/format";
import React, { VFC } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


class ExtendedUtils extends DateFnsUtils {
  getCalendarHeaderText(date:Date) {
    return format(date, "yyyy MMM", { locale: this.locale });
  }
  getDatePickerHeaderText(date:Date) {
    return format(date, "MMMd日", { locale: this.locale });
  }
}
export type Props={
  open?: boolean
}

export const DatePickers:VFC<Props>=(props)=> {
  const { open } = props
  const onClickOK = ()=>(
    axios
    .get("https://google.com")
    .then((res) => console.log(res))
    .catch((e) => console.log(e))
  )
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(),
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  // The first commit of Material-UI
  return (
    <MuiPickersUtilsProvider locale={ja} utils={ExtendedUtils}>
      <KeyboardDatePicker
          margin="normal"
          id="date"
          label="日付選択"
          okLabel="決定"
          open={open}
          cancelLabel="キャンセル"
          // open={false}
          format="yyyy/MM/dd"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          // onClick={onClickOK}
        />
    </MuiPickersUtilsProvider>
  );
}