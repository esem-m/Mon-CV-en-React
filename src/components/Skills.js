import React from "react"
import "./Skills.css"
import Skill from "./Skill"
import Interests from "./Interests"

function Skills() {
  return (
    <>
      <div className="skills">
        <h2 className="h2">Compétences</h2>
        <Skill title="Gestion de projet agile" rating="5" />
        <Skill title="SCRUM" rating="4" />
        <Skill title="Analyse fonctionnelle" rating="4" />
        <Skill title="Wireframing" rating="4" />
        <Skill title="Jira" rating="4" />
      </div>
      <div className="skills">
        <h2 className="h2">Langues</h2>
        <Skill title="Anglais" rating="3" />
        <Skill title="Français" rating="4" />
        
      </div>
      <Interests />
    </>
  )
}

export default Skills
