import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


export default function DatePickerComponent({title,value,setValue,setHiddenInputValue,formPartData}) {

  const handleChange = (newValue) => {
    setHiddenInputValue({title,value:newValue["$D"]+"/"+(Number(newValue["$M"])+1)+"/"+newValue["$y"]});
    setValue(newValue);
    console.log(newValue["$D"]+"/"+(Number(newValue["$M"])+1)+"/"+newValue["$y"]);
  };

  return (
    <LocalizationProvider na  dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
        
          inputFormat="MM/DD/YYYY"
          value={formPartData==""?value:formPartData}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />

      </Stack>
    </LocalizationProvider>
  );
}
