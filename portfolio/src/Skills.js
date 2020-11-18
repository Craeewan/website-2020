import React, {useState} from 'react'
import {data} from './data'
import Skill from './Skill'
import './Skills.css'
function Skills() {
    
    const skills = data;
const i = 0;
    const [skill,
        setSkill] = useState(skills[i]);
function getSkill (event){
    console.log(skill)
    console.log(event)
 setSkill(skills[event])
 console.log(skill)
    }
    return (
        <div className="skills__container">
            <div className="skills__list">
                {skills.map((skill, index) => 
                    <button key={index} value={index} onClick={event=>getSkill(event.currentTarget.value)}>
                        <img className="skills__logo" src={skill.image} alt=""/>

                    </button>
                )}
            </div>
            <div className="skills__window">
                {< Skill skill = {
                    skill
                } />
}
            </div>
        </div>
    )
}

export default Skills
