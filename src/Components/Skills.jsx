import React from "react";

const fullStyle = {
    display: 'flex',         
    justifyContent: 'center',   
    alignItems: 'center',    
    height: '100vh'     
}
const midStyle = {
    marginLeft: '2rem',
    marginRight: '2rem',
}

const titleStyle = {
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    fontFamily: 'monospace',
    fontSize: '2rem',
  }

  const desc = {
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    fontFamily: 'monospace',
    textAlign: 'center'
  }
  const img = {
    marginLeft: '24.5%',
    height: '150px',
    width: '150px',
  }

const Skills = (props) => {
    return (
        <div style={fullStyle}>
            <div style={midStyle}>
                <img style={img} src={props.img} alt="imgCard" />
                <h1 style={titleStyle}>{props.title}</h1>
                <p style={desc}>{props.desc}</p>
                <p style={desc}>{props.stardom}</p>
            </div>
        </div>
    )
}

export default Skills