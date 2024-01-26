// Skills.js
import React, { useContext } from 'react';
import './Skills.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData';
import { skillsImage } from '../../utils/skillsImage';

function Skills() {
    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    };

    // Define the number of skills per row and total rows
    const skillsPerRow = 3;
    const totalRows = 8;

    // Chunk the skills array into rows and columns
    const skillsGrid = [];
    for (let i = 0; i < totalRows; i++) {
        const row = skillsData.slice(i * skillsPerRow, (i + 1) * skillsPerRow);
        skillsGrid.push(row);
    }

    return (
        <div className="skills" style={{ backgroundColor: theme.secondary }}>
            <div className="skillsHeader">
                <h2 style={{ color: theme.primary }}>Skills</h2>
            </div>
            <div className="skillsContainer">
                {skillsGrid.map((row, rowIndex) => (
                    <div className="skillsRow" key={rowIndex}>
                        {row.map((skill, columnIndex) => (
                            <div className="skill--box" key={columnIndex} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{ color: theme.tertiary }}>{skill}</h3>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
