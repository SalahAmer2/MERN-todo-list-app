import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DateTimePicker from '@material-ui/lab/DateTimePicker';
import MobileDateTimePicker from '@material-ui/lab/MobileDateTimePicker';
import DesktopDateTimePicker from '@material-ui/lab/DesktopDateTimePicker';

const ResponsiveDateTimePickers = React.forwardRef((props, ref) => {
    // const ref = useRef();

    const [value, setValue] = React.useState(new Date());
    // const [value, setValue] = React.useState(new Date('2018-01-01T00:00:00.000Z'));
    // const [value, setValue] = React.useState();

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div style={{ width: 300 }}>
                <MobileDateTimePicker
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => (
                        <TextField {...params} margin="normal" variant="standard" />
                    )}

                    ref={ref}

                />
                {/* <DesktopDateTimePicker
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => (
                        <TextField {...params} margin="normal" variant="standard" />
                    )}
                />
                <DateTimePicker
                    renderInput={(params) => (
                        <TextField {...params} margin="normal" variant="standard" />
                    )}
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                /> */}
            </div>
        </LocalizationProvider>
    );
})

export default ResponsiveDateTimePickers;