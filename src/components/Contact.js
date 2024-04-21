import './Contact.css'
import React, { useState } from 'react'


const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    })

    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = {};
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First Name is required';
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last Name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone Number is required'
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
        }


        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }))
      };

    const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    };

    return (
        <div className='container'>
            <div id='contact'>
                <img src='images/alexander-andrews-JYGnB9gTCls-unsplash.jpg' className='contact-image'/>
                <div className='contact-container'>
                    <div className='contact-title'>Let's Get In Touch</div>
                    <form className='contact-form' onSubmit={handleSubmit}>
                        <input type='text' placeholder='First Name' name="firstName" className='contact-form-elem' value={formData.firstName} onChange={handleChange} required></input>
                        {errors.firstName && <span className='error'>{errors.firstName}</span>}

                        <input type='text' placeholder='Last Name' name='lastName' className='contact-form-elem' value={formData.lastName} onChange={handleChange} required></input>
                        {errors.lastName && <span className='error'>{errors.lastName}</span>}

                        <input type='email' placeholder='Email Address' name='email' className='contact-form-elem' value={formData.email} onChange={handleChange} required></input>
                        {errors.email && <span className='error'>{errors.email}</span>}

                        <input type='phone number' placeholder='Phone No.' name='phoneNumber' className='contact-form-elem' value={formData.phoneNumber} onChange={handleChange} required></input>
                        {errors.phoneNumber && <span className='error'>{errors.phoneNumber}</span>}

                        <textarea placeholder='Message' name='message' className='contact-form-elem' rows={3} value={formData.message} onChange={handleChange} required></textarea>
                        {errors.message && <span className='error'>{errors.message}</span>}

                    </form>
                    <button className="send-button" onClick={handleSubmit}>Send</button>
                </div>
            </div>
            <div className='space'></div>
        </div>
        
    )
}

export default Contact