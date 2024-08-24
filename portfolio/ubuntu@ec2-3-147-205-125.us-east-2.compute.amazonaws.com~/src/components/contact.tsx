import './../styles/contact.css'

import { useState } from 'react'; 
import { Circles } from 'react-loader-spinner'

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

export default function Contact() {
    const [formData, setFormData] = useState<FormState>({
        name: "", 
        email: "",
        message: ""
    });

    const [formSubmitting, setFormSubmitting] = useState<boolean>(false);
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({ ... prevFormData, [name]: value}));
    }

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    }

    function timeout(delay: number) {
        return new Promise (res => setTimeout(res, delay));
    }

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>): Promise<ResponseData> => {
        e.preventDefault();
        
        setFormSubmitting(true);
        await timeout(500);

        try {
            const response = await fetch('http://mattkchan.xyz:5001/form', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            })
            console.log("Response: ", response);
            if (response.status === 200) {
                console.log("formSubmitted: ", formSubmitted)
                console.log("formSubmitting: ", formSubmitting)
                setFormSubmitted(true);
                setFormSubmitting(false);
            } else {
                const responseData = await response.json() as ResponseData;
                console.error(responseData.error);
            }
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
            { formSubmitted ?
                <div>
                    <h2 className=''>Email sent - thank you!</h2>
                </div>
                :
                <>
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
                        <div className='footerContainer'>

                            <div className='submitContaienr'>
                                <input type='submit' />
                            </div>
                            {
                                formSubmitting ? 
                                    <div className='spinnercontainer'>
                                    <Circles
                                        height="50"
                                        width="50"
                                        color="#3366CC"
                                        ariaLabel="loading"
                                        />
                                    </div>
                                : 
                                null
                            }
                        </div>

                    </form>


                </>
            }
        </div>
    )
}