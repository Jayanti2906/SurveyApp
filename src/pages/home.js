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
            trustLeader:"",
            trustTeam:"",
            trustSelf:"",

            inclusionLeader:"",
            inclusionTeam:"",
            inclusionSelf:"",

            empathyLeader:"",
            empathyTeam:"",
            empathySelf:"",

            empLeader:"",
            empTeam:"",
            empSelf:"",

            forgiveLeader:"",
            forgiveTeam:"",
            forgiveSelf:"",

            vulLeader:"",
            vulTeam:"",
            vulSelf:"",

            mindsetLeader:"",
            mindsetTeam:"",
            mindsetSelf:"",

            attitudeLeader:"",
            attitudeTeam:"",
            attitudeSelf:"",

            commLeader:"",
            commTeam:"",
            commSelf:"",

            hptLeader:"",
            hptTeam:"",
            hptSelf:"",

            loading: false,
            errors:{}
        }
    }
    async componentDidMount(){
        const url=`/ClientQuestionnaire/Softway`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({content: data,calling: false });
        this.setState({
            trustLeader:data[0].trustLeader,
            trustTeam:data[0].trustTeam,
            trustSelf:data[0].trustSelf,

            inclusionLeader:data[0].inclusionLeader,
            inclusionTeam:data[0].inclusionTeam,
            inclusionSelf:data[0].inclusionSelf,

            empathyLeader:data[0].empathyLeader,
            empathyTeam:data[0].empathyTeam,
            empathySelf:data[0].empathySelf,

            empLeader:data[0].empLeader,
            empTeam:data[0].empTeam,
            empSelf:data[0].empSelf,

            forgiveLeader:data[0].forgiveLeader,
            forgiveTeam:data[0].forgiveTeam,
            forgiveSelf:data[0].forgiveSelf,

            vulLeader:data[0].vulLeader,
            vulTeam:data[0].vulTeam,
            vulSelf:data[0].vulSelf,

            mindsetLeader:data[0].mindsetLeader,
            mindsetTeam:data[0].mindsetTeam,
            mindsetSelf:data[0].mindsetSelf,

            attitudeLeader:data[0].attitudeLeader,
            attitudeTeam:data[0].attitudeTeam,
            attitudeSelf:data[0].attitudeSelf,

            commLeader:data[0].commLeader,
            commTeam:data[0].commTeam,
            commSelf:data[0].commSelf,

            hptLeader:data[0].hptLeader,
            hptTeam:data[0].hptTeam,
            hptSelf:data[0].hptSelf,

        })
        console.log(this.state.content)
        }



    handleSubmit = (event)=>{
        event.preventDefault();
        this.setState({
            loading: true
        });
        
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
        const { state } = this.props.location
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
                            type= "companyName"
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
