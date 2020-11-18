import React from 'react'
import './Skill.css'

function Skill({skill}) {
    console.log(skill)
    return (
        <div className="skill__container">
            
            <h2 className="skill__title">
                {skill.title}
            </h2>
            <img src={skill.image} alt="" className="skill__logo"/>

            <p className="skill__description"></p>
            <a href="" className="skill__proLink">
                {skill.pLink}
            </a>
        </div>
    )
}

export default Skill
