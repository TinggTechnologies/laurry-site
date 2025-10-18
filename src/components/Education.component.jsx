import React from 'react';
import MainText from './mainText';
import SubText from './subText';
import Text from './text';
import '../assets/images/style.css'; // ensure styles are imported

export default function Education() {
  const education = [
    {
      company: "Upper Credit",
      program: "Moshood Abiola Polytechnic Abeokuta",
      date: "(2024)",
      details: ["Higher National Diploma in Pharmaceutical Technology"]
    },
    {
      company: "Distinction",
      program: "Edo State Polytechnic Usen",
      date: "(2021)",
      details: ["National Diploma in Pharmaceutical Technology"]
    },
    {
      company: "WAEC",
      program: "Pame Comprehensive College Senior",
      date: "(2018)",
      details: ["School Leaving Certificate"]
    }
  ];

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', paddingBottom: '1rem' }}>
        <MainText text="Education" />
      </div>

      <div className="experience-scroll-container">
        {education.map((edu, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div>
                <SubText text={edu.program} />
                <Text text={edu.company} />
              </div>
              <div>
                <Text text={edu.date} />
              </div>
            </div>
            <div>
              {edu.details.map((item, i) => (
                <Text key={i} text={`• ${item}`} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint animation */}
      <div className="scroll-hint">
        <div className="scroll-arrow"></div>
        <p>Slide →</p>
      </div>
    </div>
  );
}
