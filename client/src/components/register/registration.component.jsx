import React, { Component } from "react";
import axios from 'axios';
import './registration.styles.css'
//import { withStyles } from "@material-ui/core/styles"
import { register } from "./RegistrationStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

import CssBaseline from "@material-ui/core/CssBaseline";
//import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
//import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import ErrorIcon from "@material-ui/icons/Error";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@material-ui/icons/VisibilityOffTwoTone";
import CloseIcon from "@material-ui/icons/Close";

import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint, Visibility, VisibilityOff } from '@material-ui/icons'
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

//import { withRouter } from 'react-router-dom'
// import { useHistory } from "react-router-dom";

class Registration extends Component {
    state = {
        email: "",
        password: "",
        passwordConfirm: "",
        hidePassword: true,
        error: null,
        errorOpen: false,
        showPassword: false //just added this
    };

    errorClose = e => {
        this.setState({
            errorOpen: false
        });
    };

    handleChange = name => e => {
        this.setState({
            [name]: e.target.value
        });
    };

    passwordMatch = () => this.state.password === this.state.passwordConfirm;

    showPassword = () => {
        this.setState(prevState => ({ hidePassword: !prevState.hidePassword }));
    };

    isValid = () => {
        if (this.state.email === "") {
            return false;
        }
        return true;
    };

    handleSubmit = () => {

        const payload = {
            email: this.state.email,
            password: this.state.password
        };

        axios({
            url: '/api/save/register-user',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('Data has been sent to the server');
            })
            .catch(() => {
                console.log('Internal server error');
            });
    }

    submitRegistration = e => {
        e.preventDefault();
        if (!this.passwordMatch()) {
            this.setState({
                errorOpen: true,
                error: "Passwords don't match"
            });
            console.log("Passwords don't match");
        }
        const newUserCredentials = {
            email: this.state.email,
            password: this.state.password,
            passwordConfirm: this.state.passwordConfirm
        };
        console.log("this.props.newUserCredentials", newUserCredentials);
        //dispath to userActions

        this.handleSubmit();

        const { location, history } = this.props

        history.push('/registrationSuccessful');
    };

    render() {
        const { classes } = this.props;

        const handleClickShowPassword = () => this.setState({
            showPassword: !this.state.showPassword
        });
        const handleMouseDownPassword = () => this.setState({
            showPassword: !!this.state.showPassword
        });
        return (
            <div className='loginForm'>
                <Paper className={classes.padding}>
                    <div className={classes.margin}>
                        <br />
                        {/* <Grid container spacing={8} alignItems="flex-end"> */}
                        <Grid item className='face'>

                            <Face />
                            <div>
                                Email
                                </div>
                        </Grid>
                        {/* <br /> */}
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" type="email" style={{ width: '250px' }} onChange={this.handleChange("email")} autoFocus required />
                        </Grid>
                        <br />
                        {/* </Grid> */}
                        {/* <Grid container spacing={8} alignItems="flex-end"> */}
                        <Grid item>
                            <Fingerprint />
                            <div>
                                Password
                                </div>
                        </Grid>
                        {/* <br /> */}
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField
                                id="username"
                                type={this.state.showPassword ? "text" : "password"} // <-- This is where the magic happens
                                style={{ width: '250px' }}
                                onChange={this.handleChange("password")}
                                required
                                InputProps={{ // <-- This is where the toggle button is added.
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                style={{ width: '0px', height: '0px' }}
                                            >
                                                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        {/* </Grid> */}
                        <br />
                        <Grid item>
                            <Fingerprint />
                            <div>
                                Confirm Password
                                </div>
                        </Grid>
                        {/* <br /> */}
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField
                                id="username"
                                type={this.state.showPassword ? "text" : "password"} // <-- This is where the magic happens
                                style={{ width: '250px' }}
                                onChange={this.handleChange("passwordConfirm")}
                                required
                                InputProps={{ // <-- This is where the toggle button is added.
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                style={{ width: '0px', height: '0px' }}
                                            >
                                                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        {/* <Grid container alignItems="center" justify="space-between">
                            <Grid item>
                                <FormControlLabel control={
                                    <Checkbox
                                        color="primary"
                                    />
                                } label="Remember me" />
                            </Grid>
                            <Grid item>
                                <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                            </Grid>
                        </Grid> */}
                        <Grid container justify="center" style={{ marginTop: '10px' }}>
                            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                            <Button
                                variant="outlined"
                                color="primary"
                                style={{
                                    textTransform: "none",
                                    margin: 'auto'
                                }}
                                onClick={this.submitRegistration}
                            >
                                Register
                            </Button>
                        </Grid>
                        <br />
                    </div>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(Registration);


// import React from "react";
// import './register.styles.css'

// function Register() {
//     return (
//         <div className='register'>
//             <h1>Register</h1>

//             <form action="/register" method="post">

//             </form>
//         </div>
//     );
// }

// export default Register;

// (
//     <div className='loginForm'>
//         <Paper className={classes.padding}>
//             <div className={classes.margin}>
//                 <br />
//                 {/* <Grid container spacing={8} alignItems="flex-end"> */}
//                 <Grid item className='face'>

//                     <Face />
//                     <div>
//                         Username
//                                 </div>
//                 </Grid>
//                 {/* <br /> */}
//                 <Grid item md={true} sm={true} xs={true}>
//                     <TextField id="username" type="email" style={{ width: '250px' }} onChange={this.handleChange("email")} autoFocus required />
//                 </Grid>
//                 <br />
//                 {/* </Grid> */}
//                 {/* <Grid container spacing={8} alignItems="flex-end"> */}
//                 <Grid item>
//                     <Fingerprint />
//                     <div>
//                         Password
//                                 </div>
//                 </Grid>
//                 {/* <br /> */}
//                 <Grid item md={true} sm={true} xs={true}>
//                     <TextField
//                         id="username"
//                         type={this.state.showPassword ? "text" : "password"} // <-- This is where the magic happens
//                         style={{ width: '250px' }}
//                         onChange={this.handleChange("password")}
//                         required
//                         InputProps={{ // <-- This is where the toggle button is added.
//                             endAdornment: (
//                                 <InputAdornment position="end">
//                                     <IconButton
//                                         aria-label="toggle password visibility"
//                                         onClick={handleClickShowPassword}
//                                         onMouseDown={handleMouseDownPassword}
//                                         style={{ width: '0px', height: '0px' }}
//                                     >
//                                         {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
//                                     </IconButton>
//                                 </InputAdornment>
//                             )
//                         }}
//                     />
//                 </Grid>
//                 {/* </Grid> */}
//                 <br />
//                 {/* <Grid container alignItems="center" justify="space-between">
//                             <Grid item>
//                                 <FormControlLabel control={
//                                     <Checkbox
//                                         color="primary"
//                                     />
//                                 } label="Remember me" />
//                             </Grid>
//                             <Grid item>
//                                 <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
//                             </Grid>
//                         </Grid> */}
//                 <Grid container justify="center" style={{ marginTop: '10px' }}>
//                     {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
//                     <Button
//                         variant="outlined"
//                         color="primary"
//                         style={{
//                             textTransform: "none",
//                             margin: 'auto'
//                         }}
//                         onClick={this.submitLogin}
//                     >
//                         Login
//                             </Button>
//                 </Grid>
//                 <br />
//             </div>
//         </Paper>
//     </div>
// );

// (
//     <div className={classes.main}>
//         <CssBaseline />

//         <Paper className={classes.paper}>
//             <Avatar className={classes.avatar}>
//                 <PeopleAltIcon className={classes.icon} />
//             </Avatar>
//             <form
//                 className={classes.form}
//                 onSubmit={() => this.submitRegistration}
//             >
//                 <FormControl required fullWidth margin="normal">
//                     {/* <InputLabel htmlFor="email" className={`${classes.labels} emailInputText`}>
//                                 e-mail
//                             </InputLabel> */}
//                     <div className='inputLabel'>
//                         Email
//                             </div>
//                     <Input
//                         name="email"
//                         type="email"
//                         autoComplete="email"
//                         className={classes.inputs}
//                         disableUnderline={true}
//                         onChange={this.handleChange("email")}
//                     />
//                 </FormControl>

//                 <FormControl required fullWidth margin="normal">
//                     {/* <InputLabel htmlFor="password" className={`${classes.labels} passwordInputText`}>
//                                 password
//                             </InputLabel> */}
//                     <div className='inputLabel'>
//                         Password
//                             </div>
//                     <Input
//                         name="password"
//                         autoComplete="password"
//                         className={classes.inputs}
//                         disableUnderline={true}
//                         onChange={this.handleChange("password")}
//                         type={this.state.hidePassword ? "password" : "input"}
//                         endAdornment={
//                             this.state.hidePassword ? (
//                                 <InputAdornment position="end">
//                                     <VisibilityOffTwoToneIcon
//                                         fontSize="default"
//                                         className={classes.passwordEye}
//                                         onClick={this.showPassword}
//                                     />
//                                 </InputAdornment>
//                             ) : (
//                                 <InputAdornment position="end">
//                                     <VisibilityTwoToneIcon
//                                         fontSize="default"
//                                         className={classes.passwordEye}
//                                         onClick={this.showPassword}
//                                     />
//                                 </InputAdornment>
//                             )
//                         }
//                     />
//                 </FormControl>

//                 <FormControl required fullWidth margin="normal">
//                     {/* <InputLabel htmlFor="passwordConfirm" className={`${classes.labels} confirmpasswordInputText`}>
//                                 confirm password
//                             </InputLabel> */}
//                     <div className='inputLabel'>
//                         Confirm Password
//                             </div>
//                     <Input
//                         name="passwordConfirm"
//                         autoComplete="passwordConfirm"
//                         className={classes.inputs}
//                         disableUnderline={true}
//                         onClick={this.state.showPassword}
//                         onChange={this.handleChange("passwordConfirm")}
//                         type={this.state.hidePassword ? "password" : "input"}
//                         endAdornment={
//                             this.state.hidePassword ? (
//                                 <InputAdornment position="end">
//                                     <VisibilityOffTwoToneIcon
//                                         fontSize="default"
//                                         className={classes.passwordEye}
//                                         onClick={this.showPassword}
//                                     />
//                                 </InputAdornment>
//                             ) : (
//                                 <InputAdornment position="end">
//                                     <VisibilityTwoToneIcon
//                                         fontSize="default"
//                                         className={classes.passwordEye}
//                                         onClick={this.showPassword}
//                                     />
//                                 </InputAdornment>
//                             )
//                         }
//                     />
//                 </FormControl>
//                 <Button
//                     disabled={!this.isValid()}
//                     disableRipple
//                     fullWidth
//                     variant="outlined"
//                     className={classes.button}
//                     type="submit"
//                     onClick={this.submitRegistration}
//                 >
//                     Register
//                         </Button>
//             </form>

//             {this.state.error ? (
//                 <Snackbar
//                     variant="error"
//                     key={this.state.error}
//                     anchorOrigin={{
//                         vertical: "bottom",
//                         horizontal: "center"
//                     }}
//                     open={this.state.errorOpen}
//                     onClose={this.errorClose}
//                     autoHideDuration={3000}
//                 >
//                     <SnackbarContent
//                         className={classes.error}
//                         message={
//                             <div>
//                                 <span style={{ marginRight: "8px" }}>
//                                     <ErrorIcon fontSize="large" color="error" />
//                                 </span>
//                                 <span> {this.state.error} </span>
//                             </div>
//                         }
//                         action={[
//                             <IconButton
//                                 key="close"
//                                 aria-label="close"
//                                 onClick={this.errorClose}
//                             >
//                                 <CloseIcon color="error" />
//                             </IconButton>
//                         ]}
//                     />
//                 </Snackbar>
//             ) : null}
//         </Paper>
//     </div>
// );