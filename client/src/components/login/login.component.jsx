import React, { Component } from "react";
import "./login.styles.css";
import { withStyles } from "@material-ui/core/styles";
import { login } from "./LoginStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { FormControl, Input, InputLabel, Button, Grid, TextField } from "@material-ui/core";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import ErrorIcon from "@material-ui/icons/Error";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@material-ui/icons/VisibilityOffTwoTone";
import CloseIcon from "@material-ui/icons/Close";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import axios from 'axios';

import { useState } from "react";

import { useHistory } from "react-router-dom";

import { withRouter } from 'react-router-dom'

import auth from "../../auth";

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

class Login extends Component {
    state = {
        email: "",
        password: "",
        hidePassword: true,
        error: null,
        errorOpen: false
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
                alert('Wrong Email/Password')
            });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.main}>
                <CssBaseline />

                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <PeopleAltIcon className={classes.icon} />
                    </Avatar>
                    <form
                        className={classes.form}
                        onSubmit={() => this.submitLogin}
                    >
                        <FormControl required fullWidth margin="normal">
                            {/* <InputLabel htmlFor="email" className={`${classes.labels} emailInputText`}>
                                e-mail
                            </InputLabel> */}
                            <div className='inputLabel'>
                                Email
                            </div>
                            <Input
                                name="email"
                                type="email"
                                autoComplete="email"
                                className={classes.inputs}
                                disableUnderline={true}
                                onChange={this.handleChange("email")}
                            />
                        </FormControl>

                        <FormControl required fullWidth margin="normal">
                            {/* <InputLabel htmlFor="password" className={`${classes.labels} passwordInputText`}>
                                password
                            </InputLabel> */}
                            <div className='inputLabel'>
                                Password
                            </div>
                            <Input
                                name="password"
                                autoComplete="password"
                                className={classes.inputs}
                                disableUnderline={true}
                                onChange={this.handleChange("password")}
                                type={this.state.hidePassword ? "password" : "input"}
                                endAdornment={
                                    this.state.hidePassword ? (
                                        <InputAdornment position="end">
                                            <VisibilityOffTwoToneIcon
                                                fontSize="default"
                                                className={classes.passwordEye}
                                                onClick={this.showPassword}
                                            />
                                        </InputAdornment>
                                    ) : (
                                            <InputAdornment position="end">
                                                <VisibilityTwoToneIcon
                                                    fontSize="default"
                                                    className={classes.passwordEye}
                                                    onClick={this.showPassword}
                                                />
                                            </InputAdornment>
                                        )
                                }
                            />
                        </FormControl>

                        <Button
                            disabled={!this.isValid()}
                            disableRipple
                            fullWidth
                            variant="outlined"
                            className={classes.button}
                            type="submit"
                            onClick={this.submitLogin}
                        >
                            Login
                        </Button>
                    </form>

                    {this.state.error ? (
                        <Snackbar
                            variant="error"
                            key={this.state.error}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center"
                            }}
                            open={this.state.errorOpen}
                            onClose={this.errorClose}
                            autoHideDuration={3000}
                        >
                            <SnackbarContent
                                className={classes.error}
                                message={
                                    <div>
                                        <span style={{ marginRight: "8px" }}>
                                            <ErrorIcon fontSize="large" color="error" />
                                        </span>
                                        <span> {this.state.error} </span>
                                    </div>
                                }
                                action={[
                                    <IconButton
                                        key="close"
                                        aria-label="close"
                                        onClick={this.errorClose}
                                    >
                                        <CloseIcon color="error" />
                                    </IconButton>
                                ]}
                            />
                        </Snackbar>
                    ) : null}
                </Paper>
            </div>
        );
    }
}

export default withStyles(login)(Login);