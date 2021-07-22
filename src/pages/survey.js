import React, { Component } from "react";

import * as Survey from "survey-react";

import "survey-react/modern.css";



Survey.StylesManager.applyTheme("modern");

class SurveyComponent extends Component {
  constructor() {
    super();
    this.state = {
      trustLeader:"",
      trustTeam:"",
      trustSelf:"",
      trustPhy:"",
      phy:true,

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

      navigate:false,
      loading: false,
      calling: true,
      content:null,
      errors:{},
      
  }
  }
  ///ClientQuestionnaire/:client
  async componentDidMount(){
    console.log("Here")
    console.log(this.props.location.state[0].companyName)
    const url=`http://localhost:5000/counter-c3132/us-central1/api/client/${this.props.location.state[0].companyName}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({content: data,calling: false });
    this.setState({
        trustLeader:data[0].trustLeader,
        trustTeam:data[0].trustTeam,
        trustSelf:data[0].trustSelf,
        trustPhy:data[0].trustPhy,
        

        // inclusionLeader:data[0].inclusionLeader,
        // inclusionTeam:data[0].inclusionTeam,
        // inclusionSelf:data[0].inclusionSelf,

        // empathyLeader:data[0].empathyLeader,
        // empathyTeam:data[0].empathyTeam,
        // empathySelf:data[0].empathySelf,

        // empLeader:data[0].empLeader,
        // empTeam:data[0].empTeam,
        // empSelf:data[0].empSelf,

        // forgiveLeader:data[0].forgiveLeader,
        // forgiveTeam:data[0].forgiveTeam,
        // forgiveSelf:data[0].forgiveSelf,

        // vulLeader:data[0].vulLeader,
        // vulTeam:data[0].vulTeam,
        // vulSelf:data[0].vulSelf,

        // mindsetLeader:data[0].mindsetLeader,
        // mindsetTeam:data[0].mindsetTeam,
        // mindsetSelf:data[0].mindsetSelf,

        // attitudeLeader:data[0].attitudeLeader,
        // attitudeTeam:data[0].attitudeTeam,
        // attitudeSelf:data[0].attitudeSelf,

        // commLeader:data[0].commLeader,
        // commTeam:data[0].commTeam,
        // commSelf:data[0].commSelf,

        // hptLeader:data[0].hptLeader,
        // hptTeam:data[0].hptTeam,
        // hptSelf:data[0].hptSelf,

    })
    console.log(this.state.phy)
    var v = this.state.trustPhy
    console.log(v)
    if(v == "undefined"){
      this.setState({phy:false});
      console.log("typeof this.state.trustPhy")
      console.log(typeof this.state.trustPhy)
      console.log(this.state.phy)
    }
    
    
  
  }
  render() {
    
    if(this.state.calling == true){
      return <div>loading...</div>;
    }
    

    const { state } = this.props.location
    const json1 = {
      showProgressBar: "top",
      title: "Culture+ Counter Survey",
      completedHtml: "<h3>Thank you for submitting your response. </h3>",
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "rating",
              name: "trust_leader_score",
              title:this.state.trustLeader,
              isRequired: true,
              rateMin: 0,
              rateMax: 10,
              minRateDescription: "(Never)",
              maxRateDescription: "(Always)"
            },
          ]
        },
        {
          name: "page2",
          elements: [
            {
              type: "rating",
                name: "trust_team_score",
                title:this.state.trustTeam,
                isRequired: true,
                rateMin: 0,
                rateMax: 10,
                minRateDescription: "(Never)",
                maxRateDescription: "(Always)"
            },
          ]
        },
        {
          name: "page3",
          elements: [
            {
              type: "rating",
                name: "trust_self_score",
                title:this.state.trustSelf,
                isRequired: true,
                rateMin: 0,
                rateMax: 10,
                minRateDescription: "(Never)",
                maxRateDescription: "(Always)"
            },
          ]
        },
        {
          name: "page4",
          visibleIf:`${this.state.phy == true}`,
          elements: [
            {
                type: "rating",
                name: "trust_phy_score",
                defaultValue:"Loading...",
                title:this.state.trustPhy,
                isRequired: true,
                rateMin: 0,
                rateMax: 10,
                minRateDescription: "(Never)",
                maxRateDescription: "(Always)"
            },
          ]
        },
        // {
        //   name: "page4",
        //   elements: [
        //     {
        //       type: "rating",
        //         name: "inclusion_leader_score",
        //         title:this.state.inclusionLeader,
        //         isRequired: true,
        //         rateMin: 0,
        //         rateMax: 10,
        //         minRateDescription: "(Never)",
        //         maxRateDescription: "(Always)"
        //     },
        //   ]
        // },
        // {
        //   name: "page5",
        //   elements: [
        //     {
        //       type: "rating",
        //         name: "inclusion_team_score",
        //         title:this.state.inclusionTeam,
        //         isRequired: true,
        //         rateMin: 0,
        //         rateMax: 10,
        //         minRateDescription: "(Never)",
        //         maxRateDescription: "(Always)"
        //     },
        //   ]
        // },
        // {
        //   name: "page6",
        //   elements: [
        //     {
        //       type: "rating",
        //         name: "inclusion_self_score",
        //         title: this.state.inclusionSelf,
        //         isRequired: true,
        //         rateMin: 0,
        //         rateMax: 10,
        //         minRateDescription: "(Never)",
        //         maxRateDescription: "(Always)"
        //     },
        //   ]
        // },
        // {
        //   name: "page7",
        //   elements: [
        //     {
        //       type: "rating",
        //         name: "empathy_leader_score",
        //         title: this.state.empathyLeader,
        //         isRequired: true,
        //         rateMin: 0,
        //         rateMax: 10,
        //         minRateDescription: "(Never)",
        //         maxRateDescription: "(Always)"
        //     },
        //   ]
        // },
        // {
        //   name: "page8",
        //   elements: [
        //     {
        //       type: "rating",
        //         name: "empathy_team_score",
        //         title: this.state.empathyTeam,
        //         isRequired: true,
        //         rateMin: 0,
        //         rateMax: 10,
        //         minRateDescription: "(Never)",
        //         maxRateDescription: "(Always)"
        //     },
        //   ]
        // },
        // {
        //   name: "page9",
        //   elements: [
        //     {
        //       type: "rating",
        //         name: "empathy_self_score",
        //         title: this.state.empathySelf,
        //         isRequired: true,
        //         rateMin: 0,
        //         rateMax: 10,
        //         minRateDescription: "(Never)",
        //         maxRateDescription: "(Always)"
        //     },
        //   ]
        // },
        // {
        //   name: "page10",
        //   elements: [
        //     {
        //       type: "rating",
        //         name: "emp_leader_score",
        //         title: this.state.empLeader,
        //         isRequired: true,
        //         rateMin: 0,
        //         rateMax: 10,
        //         minRateDescription: "(Never)",
        //         maxRateDescription: "(Always)"
        //     },
        //   ]
        // },
        // {
        //   name: "page11",
        //   elements: [
        //     {
        //       type: "rating",
        //         name: "emp_team_score",
        //         title: this.state.empTeam,
        //         isRequired: true,
        //         rateMin: 0,
        //         rateMax: 10,
        //         minRateDescription: "(Never)",
        //         maxRateDescription: "(Always)"
        //     },
        //   ]
        // },
        // {
        //   name: "page12",
        //   elements: [
        //     {
        //       type: "rating",
        //         name: "emp_self_score",
        //         title: this.state.empSelf,
        //         isRequired: true,
        //         rateMin: 0,
        //         rateMax: 10,
        //         minRateDescription: "(Never)",
        //         maxRateDescription: "(Always)"
        //     },
        //   ]
        // }
      ],
      showQuestionNumbers: "off"
    };
    const json2 = {
      completedHtml: "<h3>Thank you for submitting your responses.</h3>",
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "rating",
              name: "trust_leader_score",
              title:
                "I trust my leaders' intentions completely.",
              isRequired: true,
              rateMin: 0,
              rateMax: 10,
              minRateDescription: "(Never)",
              maxRateDescription: "(Always)"
            },
          ]
        },
        {
          name: "page2",
          elements: [
            {
              type: "rating",
                name: "trust_team_score",
                title:
                  "I trust my teammates' intentions completely",
                isRequired: true,
                rateMin: 0,
                rateMax: 10,
                minRateDescription: "(Never)",
                maxRateDescription: "(Always)"
            },
          ]
        },
        {
          name: "page3",
          elements: [
            {
              type: "rating",
                name: "trust_self_score",
                title:
                  "My teamates trust my intentions completely.",
                isRequired: true,
                rateMin: 0,
                rateMax: 10,
                minRateDescription: "(Never)",
                maxRateDescription: "(Always)"
            },
          ]
        }
      ],
      showQuestionNumbers: "off"
    };
    const survey1 = new Survey.Model(json1);
    const survey2 = new Survey.Model(json2);
    
    survey1
    .onComplete
    .add(function (sender) {
        //console.log(sender.data)
        // const metadata={
        //           "company name":state[0].companyName,
        //           "emp name":state[0].empName,
        //           "empId":state[0].empId,
        //           "surveyData": sender.data
        // }
        // console.log(metadata)
    });


    
  
    return (
      <Survey.Survey model={survey1} />
    )
    
  }
}

export default SurveyComponent;