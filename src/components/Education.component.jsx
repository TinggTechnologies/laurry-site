import React from 'react'
import MainText from './mainText'
import SubText from './subText'
import Text from './text'

export default function Education() {
  const experiences = [
    {
      company: "Upper Credit",
      program: "Moshood Abiola Polytechnic Abeokuta",
      date: "(2024)",
      details: [
        "Higher National Diploma in Pharmaceutical Technology"
      ]
    },
    {
        company: "Distinction",
        program: "Edo State Polytechnic Usen",
        date: "(2021)",
        details: [
          "National Diploma in Pharmaceutical Technology"
        ]
      },
      {
        company: "WAEC",
        program: "Pame Comprehensive College Senior",
        date: "(2018)",
        details: [
          "School Leaving Certificate"
        ]
      }
  ];

  return (
    <div style={{ width: "100%" }}>

      {experiences.map((exp, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <SubText text={exp.program} />
              <Text text={exp.company} />
            </div>
            <div>
              <Text text={exp.date} />
            </div>
          </div>
          <div>
            {exp.details.map((item, i) => (
              <Text key={i} text={`* ${item}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
