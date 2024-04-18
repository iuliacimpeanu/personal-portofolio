import './Contact.css'

const Contact = () => {
    return (
        <div className='container'>
            <div id='contact'>
                <img src='images/alexander-andrews-JYGnB9gTCls-unsplash.jpg' className='contact-image'/>
                <div className='contact-container'>
                    <div className='contact-title'>Let's Get In Touch</div>
                    <form className='contact-form'>
                        <input type='text' placeholder='First Name' className='contact-form-elem'></input>
                        <input type='text' placeholder='Last Name' className='contact-form-elem'></input>
                        <input type='email' placeholder='Email Address' className='contact-form-elem'></input>
                        <input type='phone number' placeholder='Phone No.' className='contact-form-elem'></input>
                        <textarea placeholder='Message' className='contact-form-elem' rows={4}></textarea>
                    </form>
                </div>
            </div>
            <div className='space'></div>
        </div>
        
    )
}

export default Contact