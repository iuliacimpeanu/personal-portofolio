import './Skills.css'


const Skills = () => {
    return(
        <div id='skills'>
            <div className='skills-title'>Skills</div>
            <div className='skills-container'>
                <div className='skill-icon'><ion-icon name="logo-html5"></ion-icon></div>
                <div className='skill-icon'><ion-icon name="logo-css3"></ion-icon></div>
                <div className='skill-icon'><ion-icon name="logo-javascript"></ion-icon></div>
                <div className='skill-icon'><ion-icon name="logo-react"></ion-icon></div>
                <div className='skill-icon'><ion-icon name="logo-tux"></ion-icon></div>
            </div>
        </div>
    )
}

export default Skills