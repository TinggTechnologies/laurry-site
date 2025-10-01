import React from 'react'
import MainText from './mainText'
import SubText from './subText'
import Text from './text'

export default function WorkExperience() {
  return (
    <div style={{width: "100%"}}>
        <div style={{textAlign: "center"}}>
        <MainText text="Work Experience" />
        </div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div>
                <SubText text="Deloitte Data Analytics Virtual Internship " />
                <SubText text="Data Analyst Intern" />
                <Text text="Deloitte" />
            </div>
            <div>
                <Text text="(May 2025)" />
            </div>
        </div>
        <div>
            <Text text="* Built interactive dashboard to present data audit insights." />
 <Text text="* Participated in a simulated project on data governance and business
analytics." />
 <Text text="* Gained exposure to professional consulting workflows and client
reporting." />

        </div>

    </div>
  )
}
