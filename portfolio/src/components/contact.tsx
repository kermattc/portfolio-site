import './../App.css'

import { useState, useRef } from 'react'; 

interface FormState {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormState>({
        name: "", 
        email: "",
        message: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({ ... prevFormData, [name]: value}));
    }

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log("Name: ", name)
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    }
    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form details: ", formData);
    }

    return (
        <div className='formContainer'>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className='formItem'>
                    <input type='text' placeholder="Your name" name='name' onChange={handleInputChange} value={formData.name} required/>
                </div>
                <div className='formItem'>
                    <input type='email' placeholder="youremail@example.com" name='email' onChange={handleInputChange} value={formData.email} required/>
                </div>

                <div className='textareaContainer'>
                    <textarea
                        onChange={handleTextAreaChange}
                        name='message'
                        placeholder="Contact me!"
                        rows={4}
                        cols={40}
                        value={formData.message}
                    />
                </div>

                <input type='submit' />
            </form>
        </div>
    )
}