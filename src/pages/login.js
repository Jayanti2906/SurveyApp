import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import logo from '../images/clogo.png';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { SurveyElementErrors } from 'survey-react';

const styles ={
    form:{
        textAlign: 'center'
    },
    image:{
        margin: '200px 100px 20px auto'
    },
    pageTitle:{
        margin: '50px 100px 50px auto'
    },
    textfield:{
        margin: '10px 10px 20px auto'
    },
    button:{
        margin: '10px 10px 20px auto',
        position: 'relative'
    },
    customError:{
        margin: '10px 10px 20px auto',
        color: "red",
        fontSize: '0.8rem',
    }
};



class Login extends Component {
    constructor(){
        super();
        this.state = {
            email:'',
            password:'',
            loading: false,
            errors:{}
        }
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        this.setState({
            loading: true
        });
        const userData = {
            email :this.state.email,
            password : this.state.password
        }
        // axios.post('/login', userData)
        //     .then(res => {
        //         console.log(res.data);
        //         this.setState({
        //             loading : false
        //         });
        this.props.history.push({
              pathname: '/survey',
              state: {"person":this.state.email}// your data array of objects
          });
           // })
            // .catch(err => {
            //     this.setState({
            //         errors : err.response.data,
            //         loading : false
            //     })
            // })
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const {classes} = this.props;
        const {errors, loading} = this.state;
        return (
            <Grid container className={classes.form}>
                <Grid item sm><img src={logo} alt="Culture+ Counter" className={classes.image}></img></Grid>
                <Grid item sm>
                    <Typography variant='h4' className={classes.pageTitle}>
                        Login
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField 
                            id="email" 
                            name="email" 
                            label="Email" 
                            type="email" 
                            className={classes.textfield} 
                            value ={this.state.email} onChange={this.handleChange}
                            helperText = {errors.email}
                            error = {errors.email ? true : false}
                            fullWidth>
                        </TextField>
                        <TextField 
                            id="password" 
                            name="password" 
                            label="Password" 
                            type="password" 
                            className={classes.textfield} 
                            value ={this.state.password} onChange={this.handleChange}
                            helperText = {errors.password}
                            error = {errors.password ? true : false}
                            fullWidth>
                        </TextField>
                        {errors.general && (
                            <Typography variant="body2" className={classes.customError}>
                                {errors.general}
                            </Typography>
                        )}
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary" 
                            className={classes.button}
                            disabled={loading}
                        >
                        Login</Button>
                    </form>
                </Grid>  
            </Grid>
        )
    }
}
Login.propTypes ={
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Login);
