import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Card from './Components/Port';
import Skills from './Components/Skills';

const root = ReactDOM.createRoot(document.getElementById('root'));
const skills = ReactDOM.createRoot(document.getElementById('skillsroot'))
root.render(
  <React.StrictMode>
    <Card
    img=''
    title='Teste'
    desc='Teste'
    git='Teste'
    />
    <Card
    img='/images/crimsonact.png'
    title='Crimson activities'
    desc='Uma to-do list, claro, com um belo carmesin'
    git='git@github.com:Sothnik0/CrimsonActivities.git'
    />
    <Card
    img='/images/Captura de tela 2024-11-07 162445.png'
    title='Randomnautica'
    desc='Um joguinho que brinca com números randomicos'
    git='https://github.com/Sothnik0/Randomnautica'
    />
  </React.StrictMode>
);

skills.render(
  <React.StrictMode>
    <Skills
      img='/images/www.png'
      title='HTML/CSS/JS'
      desc='Famosa tríade do desenvolvimento web'
      stardom=' ★ ★ ★ ★ ☆'
    />
        <Skills
      img='/images/pngwing.com.png'
      title='C#'
      desc='Ter conhecimento em .NET com C# é interessante'
      stardom=' ★ ★ ★ ★ ☆'
    />
        <Skills
      img='/images/react.png'
      title='React'
      desc='Curiosidade: esse portfólio foi feito com React'
      stardom='★ ★ ★ ☆ ☆'
    />
            <Skills
      img='/images/pngwing.com (1).png'
      title='Python'
      desc='Planejo me aprofundar muito mais no futuro'
      stardom='★ ★ ★ ☆ ☆'
    />
  </React.StrictMode>
)

reportWebVitals();
