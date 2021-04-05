import React, { Component } from "react";
import "./login.styles.css";
//import { withStyles } from "@material-ui/core/styles";
//import { login } from "./LoginStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

import CssBaseline from "@material-ui/core/CssBaseline";
// import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import {
    FormControl,
    Input,
    InputLabel,
    //Button, 
    //Grid, 
    //TextField 
} from "@material-ui/core";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import ErrorIcon from "@material-ui/icons/Error";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@material-ui/icons/VisibilityOffTwoTone";
import CloseIcon from "@material-ui/icons/Close";

//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';

import axios from 'axios';

import { useState } from "react";

import { useHistory } from "react-router-dom";

import { withRouter } from 'react-router-dom'

import auth from "../../auth";

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

// const Login = () => {

//     const [state, setState] = useState(
//         {
//             email: "",
//             password: "",
//             // hidePassword: true
//         }
//     )

//     const handleChange = name => e => {
//         setState({
//             [name]: e.target.value
//         });
//     };

//     // const showPassword = () => {
//     //     setState(prevState => ({ hidePassword: !prevState.hidePassword }));
//     // };

//     let history = useHistory();

//     const submitLogin = e => {
//         e.preventDefault();

//         console.log("reached submitlogin function")

//         const payload = {
//             email: state.email,
//             password: state.password
//         };

//         axios({
//             url: '/api/login',
//             method: 'POST',
//             data: payload
//         })
//             .then(() => {
//                 console.log('Logged in successfully');

//                 auth.login(() => {
//                     history.push('/userHome');
//                 })
//             })
//             .catch(() => {
//                 console.log('Internal server error');
//                 alert('Wrong Email/Password')
//             });
//     };

//     const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' }

//     return (
//         <Grid>
//             <Paper elevation={10} style={paperStyle} >
//                 <Grid align='center'>
//                     <Avatar>
//                         <PeopleAltIcon />
//                     </Avatar>
//                     <br />
//                     <br />
//                     <br />
//                     <br />
//                     <Input
//                         placeholder='Enter Email'
//                         name="email"
//                         type="email"
//                         autoComplete="email"
//                         fullWidth
//                         required
//                         onChange={handleChange("email")}
//                     />
//                     <br />
//                     <br />
//                     <br />
//                     <Input
//                         placeholder='Enter Password'
//                         name="password"
//                         type="password"
//                         autoComplete="password"
//                         type='password'
//                         fullWidth
//                         required
//                         onChange={handleChange("password")}
//                     // type={state.hidePassword ? "password" : "input"}
//                     // endAdornment={
//                     //     state.hidePassword ? (
//                     //         <InputAdornment position="end">
//                     //             <VisibilityOffTwoToneIcon
//                     //                 fontSize="default"
//                     //                 onClick={showPassword}
//                     //             />
//                     //         </InputAdornment>
//                     //     ) : (
//                     //             <InputAdornment position="end">
//                     //                 <VisibilityTwoToneIcon
//                     //                     fontSize="default"
//                     //                     onClick={showPassword}
//                     //                 />
//                     //             </InputAdornment>
//                     //         )
//                     // }
//                     />
//                     {/* <FormControlLabel
//                         control={
//                             <Checkbox
//                                 name="checkedB"
//                                 color="primary"
//                                 style={{ position: 'absolute', left: 0 }}
//                             />
//                         }
//                         label="Primary"
//                     /> */}
//                     <br />
//                     <br />
//                     <br />
//                     <Button style={{ color: '#fff' }}
//                         fullWidth
//                         type="submit"
//                         onClick={submitLogin}
//                     >
//                         Login
//                     </Button>
//                 </Grid>
//             </Paper>
//         </Grid>
//     )
// }

/*
This is code from the DevConnector Project

const onSubmit = async e => {
        e.preventDefault()
        if (password !== password2) {
            console.log('Passwords do not match');
        } else {
            const newUser = {
                name,
                email,
                password
            }

            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

                const body = JSON.stringify(newUser);

                const res = await axios.post('/api/users', body, config);
                console.log(res.data);
            } catch (err) {
                console.error(err.response.data);
            }
        }
    }
*/

class Login extends Component {
    state = {
        email: "",
        password: "",
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

    // passwordMatch = () => this.state.password === this.state.passwordConfirm;

    showPassword = () => {
        this.setState(prevState => ({ hidePassword: !prevState.hidePassword }));
    };

    isValid = () => {
        if (this.state.email === "") {
            return false;
        }
        return true;
    };

    // handleSubmit = () => {

    //     const payload = {
    //         email: this.state.email,
    //         password: this.state.password
    //     };

    //     axios({
    //         url: '/login',
    //         method: 'POST',
    //         data: payload
    //     })
    //         .then(() => {
    //             console.log('Logged in successfully');

    //             const { location, history } = this.props

    //             history.push('/userHome');
    //         })
    //         .catch(() => {
    //             console.log('Internal server error');
    //         });
    // }

    submitLogin = e => {
        e.preventDefault();

        console.log("reached submitlogin function")

        const payload = {
            email: this.state.email,
            password: this.state.password
        };

        axios({
            url: '/api/login',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('Logged in successfully');

                const { location, history } = this.props

                auth.login(() => {
                    history.push('/userHome');
                })
            })
            .catch(() => {
                console.log('Internal server error');
                alert('Wrong Email/Password');
            });
    };

    render() {
        const { classes } = this.props;

        // const [showPassword, setShowPassword] = useState(false);
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
                                Username
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
                                onClick={this.submitLogin}
                            >
                                Login
                            </Button>
                        </Grid>
                        <br />
                    </div>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(Login);

// import React from 'react';
// import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
// import { Face, Fingerprint } from '@material-ui/icons'
// const styles = theme => ({
//     margin: {
//         margin: theme.spacing.unit * 2,
//     },
//     padding: {
//         padding: theme.spacing.unit
//     }
// });

// class Login extends React.Component {
//     render() {
//         const { classes } = this.props;
//         return (
//             <Paper className={classes.padding}>
//                 <div className={classes.margin}>
//                     <Grid container spacing={8} alignItems="flex-end">
//                         <Grid item>
//                             <Face />
//                         </Grid>
//                         <Grid item md={true} sm={true} xs={true}>
//                             <TextField id="username" label="Username" type="email" fullWidth autoFocus required />
//                         </Grid>
//                     </Grid>
//                     <Grid container spacing={8} alignItems="flex-end">
//                         <Grid item>
//                             <Fingerprint />
//                         </Grid>
//                         <Grid item md={true} sm={true} xs={true}>
//                             <TextField id="username" label="Password" type="password" fullWidth required />
//                         </Grid>
//                     </Grid>
//                     <Grid container alignItems="center" justify="space-between">
//                         <Grid item>
//                             <FormControlLabel control={
//                                 <Checkbox
//                                     color="primary"
//                                 />
//                             } label="Remember me" />
//                         </Grid>
//                         <Grid item>
//                             <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
//                         </Grid>
//                     </Grid>
//                     <Grid container justify="center" style={{ marginTop: '10px' }}>
//                         <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
//                     </Grid>
//                 </div>
//             </Paper>
//         );
//     }
// }

// export default withStyles(styles)(Login);