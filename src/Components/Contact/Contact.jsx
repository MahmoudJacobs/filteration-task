import './Contact.css'
import '../responsive.css'
import contact from '../../assets/contact.png'
import mail from '../../assets/mail.png'
import phonelogo from '../../assets/phone.png'

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = {
      email: event.target.elements.email.value,
      phone: event.target.elements.phone.value,
      name: event.target.elements.name.value
    };

    try {

      const response = await fetch('http://upskilling-egypt.com:3001/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    if (response.ok) {
      console.log('Form data submitted successfully!');
    } else {
      console.error('Failed to submit form data:', response.statusText);
    }
    } catch (error) {
      console.error('Error submitting form data:', error)
    }
  };

  return (
    <div className='contact-container'>
      <div className='contact'>
        <img src={contact}/>
      </div>
      <div className='info'>
        <div className='formCol'>
            <form className='form' onSubmit={handleSubmit}>
                <input type="text"
                       placeholder='Name'
                       name='name'
                ></input>
                <input type="text"
                       placeholder='Email'
                       name='email'
                ></input>
                <input type="text"
                       placeholder='Phone'
                       name='phone'
                ></input>
                <button type="submit" className='formbtn'>Send</button>
            </form>
        </div>
        <div className='phoneMail'>
            <div className='mailrow'>
                <img src={mail}/>
                <p>upskilling.eg1@gmail.com</p>
            </div>
            <div className='phonerow'>
                <img src={phonelogo}/>
                <p>+20 115 493 2137</p>
            </div>
        </div>
      </div>
      <div className='finalcolor'>
        <p>done</p>
      </div>
    </div>
  )
}

export default Contact
