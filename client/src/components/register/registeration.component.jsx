import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { register } from "./RegistrationStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import ErrorIcon from "@material-ui/icons/Error";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@material-ui/icons/VisibilityOffTwoTone";
import CloseIcon from "@material-ui/icons/Close";

import axios from 'axios';

import './registration.styles.css'

class Registration extends Component {
    state = {
        email: "",
        password: "",
        passwordConfirm: "",
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
    submitRegistration = e => {
        e.preventDefault();
        if (!this.passwordMatch()) {
            this.setState({
                errorOpen: true,
                error: "Passwords don't match"
            });
        }
        const newUserCredentials = {
            email: this.state.email,
            password: this.state.password,
            passwordConfirm: this.state.passwordConfirm
        };
        console.log("this.props.newUserCredentials", newUserCredentials);
        //dispath to userActions
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const payload = {
            email: this.state.email,
            password: this.state.password
        };

        axios({
            url: '/api/save/user',
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
                        onSubmit={() => this.submitRegistration}
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

                        <FormControl required fullWidth margin="normal">
                            {/* <InputLabel htmlFor="passwordConfirm" className={`${classes.labels} confirmpasswordInputText`}>
                                confirm password
                            </InputLabel> */}
                            <div className='inputLabel'>
                                Confirm Password
                            </div>
                            <Input
                                name="passwordConfirm"
                                autoComplete="passwordConfirm"
                                className={classes.inputs}
                                disableUnderline={true}
                                onClick={this.state.showPassword}
                                onChange={this.handleChange("passwordConfirm")}
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
                            onClick={this.submitRegistration}
                        >
                            Register
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

export default withStyles(register)(Registration);


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