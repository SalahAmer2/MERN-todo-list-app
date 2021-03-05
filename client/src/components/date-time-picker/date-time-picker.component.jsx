import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import MobileDateTimePicker from '@material-ui/lab/MobileDateTimePicker';

const ResponsiveDateTimePickers = React.forwardRef((props, ref) => {

    const [value, setValue] = React.useState(new Date());

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
            </div>
        </LocalizationProvider>
    );
})

export default ResponsiveDateTimePickers;