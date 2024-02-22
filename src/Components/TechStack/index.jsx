import './style.css'

export default function TechStack () {
  return(
    <div>
      <h2>Tech Stack</h2>
      <div className='container-tech'>
        <ul>
          <li>
            <img src='https://img.shields.io/badge/-HTML-333333?style=flat&logo=HTML5' />
          </li>
          <li>
           <img src='https://img.shields.io/badge/-CSS-333333?style=flat&logo=CSS3&logoColor=1572B6' />
          </li>
          <li>
           <img src='https://img.shields.io/badge/-JavaScript-333333?style=flat&logo=javascript' />
          </li>
          <li>
            <img src='https://img.shields.io/badge/-TypeScript-333333?style=flat&logo=typescript&logoColor=2D79C7' />
          </li>
          <li>
           <img src='https://img.shields.io/badge/-React-333333?style=flat&logo=react' />
          </li>
          <li>
           <img src='https://img.shields.io/badge/-Jest-333333?style=flat&logo=jest&logoColor=E535AB' />
          </li>
        </ul> 
        </div>
      </div>
    )
  }