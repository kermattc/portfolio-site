import './../styles/form.css'

import { useState } from 'react'; 

interface FormState {
    name: string;
    email: string;
    message: string;
}

// create new type of response error
type ResponseData = {
    id: string;
    token: string;
    error: string;
  };

interface ErrorRes {
    json: () => Promise<ResponseData>;
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

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>): Promise<ResponseData> => {
        e.preventDefault();
        // console.log("Form details: ", formData);
        try {
            const response = await fetch('http://localhost:5000/form', {
                method: 'POST',
                headers: {'Content-Type': 'applications/json'},
                body: JSON.stringify(formData)
            }) 
            return await response.json() as ResponseData;
        } catch (error) {
            if (error instanceof Response && error.json) {
                return await error.json() as ResponseData;
            } else {
                return {
                    id: '',
                    token: '',
                    error: 'An unexpected error occurred.'
                } as ResponseData;
            }
        }   
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