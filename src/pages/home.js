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



class Home extends Component {
    constructor(){
        super();
        this.state = {
            surveyName:'',
            companyName:'',
            empName:'',
            empId:'',
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
            companyName :this.state.companyName,
            password : this.state.password
        }
        this.props.history.push({
              pathname: '/survey',
              state: [{"companyName":this.state.companyName},{"empName":this.state.empName}, {"empId":this.state.empId}]// your data array of objects
          });
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
                
                <Grid item sm>
                    <Typography variant='h4' className={classes.pageTitle}>
                         SURVEYEE  DETAILS
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField 
                            id="surveyName" 
                            name="surveyName" 
                            label="Survey Name" 
                            type="surveyName" 
                            variant="outlined"
                            className={classes.textfield} 
                            value = "Baseline"
                            helperText = {errors.surveyName}
                            error = {errors.surveyName ? true : false}
                            fullWidth>
                        </TextField>
                        <TextField 
                            id="companyName" 
                            name="companyName" 
                            label="Company Name" 
                            type="companyName" 
                            variant="outlined"
                            className={classes.textfield} 
                            value ={this.state.companyName} onChange={this.handleChange}
                            helperText = {errors.companyName}
                            error = {errors.companyName ? true : false}
                            fullWidth>
                        </TextField>
                        <TextField 
                            id="empName" 
                            name="empName" 
                            label="Your Name" 
                            type="empName" 
                            variant="outlined"
                            className={classes.textfield} 
                            value ={this.state.empName} onChange={this.handleChange}
                            helperText = {errors.empName}
                            error = {errors.empName ? true : false}
                            fullWidth>
                        </TextField>
                        <TextField 
                            id="empId" 
                            name="empId" 
                            label="Email" 
                            type="email" 
                            variant="outlined"
                            className={classes.textfield} 
                            value = {this.state.empId} onChange={this.handleChange}
                            helperText = {errors.empId}
                            error = {errors.empId ? true : false}
                            fullWidth>
                        </TextField>

                        
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary" 
                            className={classes.button}
                            disabled={loading}
                        >
                        Take Survey</Button>
                    </form>
                </Grid> 
               
            </Grid>
        )
    }
}
Home.propTypes ={
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home);
