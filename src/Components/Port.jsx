import React from 'react';
const cardCont = {
    display: 'flex',
    justifyContent: 'space-between'
}

const cardStyle = {
    height: '400px',
    width: '350px',
    
    backgroundColor: 'rgba(125, 9, 33, 1)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.35)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(125, 9, 33, 0.3)',
    
    borderRadius: '1rem',

    marginTop: '10%'
  };
  
  const titleStyle = {
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    fontFamily: 'monospace',
    fontSize: '2rem',
    padding: '1rem',
    textWrap: 'nowrap'
  }

  const desc = {
    color: 'white',
    fontFamily: 'monospace',

    marginLeft: '1rem',
    
    fontSize: '0.7rem'
  }
  const img = {
    height: '200px',
    width: '340px',
    marginLeft: '3px',
    marginBottom: '30px',
    borderRadius: '6px'
  }

const Card = (props) => {
  return (
    <div style={cardCont}>
        <div style={cardStyle}>
            <h1 style={titleStyle}>{props.title}</h1>
            <img style={img} src={props.img} alt="imgCard" />
            <p style={desc}>{props.desc}</p>
            <a href={props.git} style={desc}>{props.git}</a>
        </div>
    </div>
  );
};

export default Card;
