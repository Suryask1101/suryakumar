import React, { useContext } from 'react';
// Remove the unused import for Marquee
// import Marquee from "react-fast-marquee";

import './Skills.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'

function Skills() {
    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    const skillsPerRow = 3; // Set the number of skills per row

    // Chunk the skills array into rows
    const skillsRows = [];
    for (let i = 0; i < skillsData.length; i += skillsPerRow) {
        skillsRows.push(skillsData.slice(i, i + skillsPerRow));
    }

    return (
        <div className="skills" style={{ backgroundColor: theme.secondary }}>
            <div className="skillsHeader">
                <h2 style={{ color: theme.primary }}>Skills</h2>
            </div>
            <div className="skillsContainer">
                {skillsRows.map((row, rowIndex) => (
                    <div className="skillsRow" key={rowIndex}>
                        {row.map((skill, skillIndex) => (
                            <div className="skill--box" key={skillIndex} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{ color: theme.tertiary }}>{skill}</h3>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
