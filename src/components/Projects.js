import './Projects.css'

const Projects = () => {
    return (
        <div id='projects'>
            <div className='proj-title'>Projects</div>

                <div className='proj-previews'>
                    <a className='proj-item' href='https://weather-like.netlify.app/' target='_blank'>
                        <img src="/images/weather-proj.png" alt="Preview of a weather website project" className='proj-img'/>
                    </a>
                    <a className='proj-item' href='https://omnifood-healthy-meals.netlify.app/' target='_blank'>
                        <img src="/images/omnifood-proj.png" alt="Preview of a food delivery website project" className='proj-img'/>
                    </a>
                    <a className='proj-item' href='https://art-gram.netlify.app/' target='_blank'>
                        <img src="/images/artgram-proj.png" alt="Preview of a weather website project" className='proj-img'/>
                    </a>
                    <a className='proj-item' href='https://trvl-around.netlify.app/' target='blank'>
                        <img src="/images/travel-proj.png" alt="Preview of a food delivery website project" className='proj-img'/>
                    </a>
                </div>

        </div>
    )
}

export default Projects