import React, { Component } from "react";

import * as Survey from "survey-react";

import "survey-react/modern.css";



Survey.StylesManager.applyTheme("modern");

class SurveyComponent extends Component {
  constructor() {
    super();
  }
  render() {
    const json = {
      completedHtml: "<h3>Thank you for submitting your response. Your response {trust_leader_score} , {trust_team_score} and {trust_self_score}</h3>",
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
              minRateDescription: "(Most unlikely)",
              maxRateDescription: "(Most likely)"
            },
            {
                type: "rating",
                name: "trust_team_score",
                title:
                  "I trust my teammates' intentions completely",
                isRequired: true,
                rateMin: 0,
                rateMax: 10,
                minRateDescription: "(Most unlikely)",
                maxRateDescription: "(Most likely)"
              },
              {
                type: "rating",
                name: "trust_self_score",
                title:
                  "My teamates trust my intentions completely.",
                isRequired: true,
                rateMin: 0,
                rateMax: 10,
                minRateDescription: "(Most unlikely)",
                maxRateDescription: "(Most likely)"
              },
            
          ]
        }
      ],
      showQuestionNumbers: "off"
    };
    const survey = new Survey.Model(json);

    return <Survey.Survey model={survey} />;
  }
}

export default SurveyComponent;