import { Button } from "@material-ui/core";
import React, { Component } from "react";

import * as Survey from "survey-react";

import "survey-react/modern.css";



Survey.StylesManager.applyTheme("modern");

class Form extends Component {
  state={
    done:false
  }
  
  handleChange() {
    this.setState({
        done: true
    })
}
  render() 
  {
    const { state } = this.props.location
    const {done} = this.state
    const json1 = {
      title: "Culture+ Counter",  
      showProgressBar: "top",
      progressBarType: "buttons",
      firstPageIsStarted: true,
      checkErrorsMode: "onValueChanged",
      startSurveyText: "Create Customer",
      completedHtml: "<h3> New client created! </h3>",
      pages: [
        {
            name: "page",
            elements: [
              {
                type: "html",
                html: "Click below to create a new client record with the survey settings."
              },
            ]
          },
        {
          name: "page1",
          navigationTitle: "Basic Info",
          
          elements: [
            {
                type: "text",
                name: "companyName",
                title: "Company Name",
                isRequired: false
            },
            {
              type: "dropdown",
              name: "industryType",
              title: "Industry Type",
              isRequired: false,
              "choices": [
                "Healthcare",
                "General MNC",
            ]
          },
            {
                type: "text",
                name: "headquarters",
                title: "Headquarters Location",
                isRequired: false
            },
            {
                type: "text",
                name: "revenue",
                title: "Revenue",
                isRequired: false
            },
            {
                type: "text",
                name: "empsize",
                title: "Employee Size",
                isRequired: false
            },
            {
                type: "comment",
                name: "brief",
                title: "Company Brief",
                isRequired: false
            }
          ]
        
        },
        {
          name: "page2",
          navigationTitle: "Add Stakeholders",
          elements: [
            {
                
                    "type": "matrixdynamic",
                    "name": "stakeholders",
                    "title": "Stakeholder Details",
                    "columns": [
                        {
                            "name": "stakeholderTitle",
                            "title": "Title",
                            "cellType": "",
                            "isRequired": true,
                            
                        }, {
                            "name": "stakeholdertitleName",
                            "title": "Name",
                            "cellType": "text",
                            "isRequired": true
                        }, {
                            "name": "stakeholderEmail",
                            "title": "Email Id",
                            "inputType": "email",
                            "cellType": "text",
                            "isRequired": true
                        }
                    ]
                    
            },
          ]
        },
        {
          name: "page3",
          navigationTitle: "Survey settings",
          elements: [
            {
              type: "dropdown",
              name: "industryType",
              title: "Industry Type",
              isRequired: false,
              "choices": [
                 "Healthcare",
                 "General MNC",
                ]
            },
            {
              "type": "text",
              "inputType": "date",
              "isRequired": false,
              "name": "baselineDate",
              "startWithNewLine": false,
              "title": "Baseline Date"
            },
            {
              type: "dropdown",
              name: "pulseFreq",
              title: "Pulse Frequency",
              isRequired: false,
              "choices": [
                 "Weekly",
                 "Bi-weekly",
                 "Monthly",
                 "Six-monthly"
                ]
            }
          ]
        },
        {
            name: "page4",
            navigationTitle: "Custom Questions",
            navigationDescription:"(optional)",
            elements: [
              {
                
                "type": "matrixdynamic",
                "name": "customQuest",
                "title": "Custom Questions",
                "columns": [
                    {
                        "name": "quest",
                        "title": "Add Question",
                        "cellType": "text",
                        "isRequired": false,
                        
                    }
                ]    
              },
            ]
          },
          {
            name: "page5",
            navigationTitle: "Questionnaire",
            elements: [
                {
                  type: "text",
                  name: "trustLeader",
                  title: "Trust Leader",
                  defaultValue:"I trust my leaders' intentions completely.",
                  isRequired: false
                },
                {
                  type: "text",
                  name: "trustTeam",
                  title: "Trust Team",
                  defaultValue:"I trust my teams' intentions completely.",
                  isRequired: false
                },
                {
                  type: "text",
                  name: "trustSelf",
                  title: "Trust Self",
                  defaultValue:"My team trusts my intentions completely.",
                  isRequired: false
                },
                {
                  type: "text",
                  name: "trustPhy",
                  title: "Trust Physician",
                  defaultValue:"",
                  visibleIf: "{industryType}='Healthcare'",
                  defaultValue:"I trust my physician's intentions completely.",
                  isRequired: false
                },
              
            ]
          },
          {
            name: "page6",
            navigationTitle: "Preview Survey",
            title:"This is a test survey. Your responses will not be considered.",
            elements: [
              {
                type: "rating",
                name: "trust_leader_score",
                title:
                  "{trustLeader}",
                isRequired: false,
                rateMin: 0,
                rateMax: 10,
                minRateDescription: "(Never)",
                maxRateDescription: "(Always)"
              },
              {
                  type: "rating",
                  name: "trust_team_score",
                  title:
                    "{trustTeam}",
                  isRequired: false,
                  rateMin: 0,
                  rateMax: 10,
                  minRateDescription: "(Never)",
                  maxRateDescription: "(Always)"
                },
                {
                  type: "rating",
                  name: "trust_self_score",
                  title:
                    "{trustSelf}",
                  isRequired: false,
                  rateMin: 0,
                  rateMax: 10,
                  minRateDescription: "(Never)",
                  maxRateDescription: "(Always)"
                },
                {
                  type: "rating",
                  name: "trust_phy_score",
                  title: "{trustPhy}",
                  visibleIf: "{industryType}='Healthcare'",
                  isRequired: false,
                  rateMin: 0,
                  rateMax: 10,
                  minRateDescription: "(Never)",
                  maxRateDescription: "(Always)"
                  
                },
              
            ]
          }
          

      ],
      showQuestionNumbers: "off",
      showCompletedPage:"on"
    };
    
    
    const survey = new Survey.Model(json1);
   
    
    survey
    .onComplete
    .add(function (sender) {
        console.log(sender.data)
        let arr = sender.data.stakeholders
        console.log(sender.data.stakeholders)
        var stakeholdersArr = {};
        for (var i = 0; i < stakeholdersArr.length; i++) {
          stakeholdersArr[arr[i].key] = arr[i].stakeholderTitle;
        console.log(stakeholdersArr)
}
        fetch('http://localhost:5000/counter-c3132/us-central1/api/createClientRecord', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sender.data)
              }).then(response=>{
                  if(response.status == 200){ 
                          alert("Saved!");
                          window.location.reload();
                  }
                  else{
                    window.location.reload();
                      alert('Server error: Not able to save data :(')
                      return;
                  }
              });
        


    });
    
    
    return (
      <div>
        
      <Survey.Survey model={survey} />
      {/* {this.state.done &&
          <Button>
            Button
          </Button>
      } */}
      
      </div>
    )
    
  }
}

export default Form;