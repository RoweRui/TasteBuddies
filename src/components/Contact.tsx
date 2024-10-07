import { FaFacebook, FaInstagram, FaMicrosoft, FaTwitter, FaYoutube } from 'react-icons/fa';

const Contact = () => {
    return (
      <>
      <article className='contact'>
      <h1 style={{ color: 'white' }}>Contact Us!</h1>
      <br></br>
      <h3>We'd love to hear from you!</h3>
      <p>If you have any questions, suggestions, or feedback about our recipes or website, please feel free to reach out to us using the form below or through our social media channels.</p>
      
      <h3>Our Contact Information</h3>
      <p>Email: support@tastebuddies.com</p>
      <p>Phone: +1 (555) 123-4567</p>
      <p>Address: 123 Flavor Avenue, Taste City, Yummyland, 45678</p>
      <br></br>
      
      <h3><center></center>Follow Us on Social Media</h3>
      <p>Stay connected with us for the latest recipes and updates!</p>
      <br></br>
      <FaFacebook size={40} style={{ fontSize: '50px', color: '#3b5998' }} />
      <FaInstagram size={40} style={{ color: '#E1306C' }} /> {/* Adjust size and color as needed */}
      <FaMicrosoft size={40} style={{ color: '#F25022' }} /> {/* Adjust size and color as needed */}
      <FaTwitter size={40} style={{ fontSize: '60px', color: '#1DA1F2' }} /> {/* Twitter blue */}
      <FaYoutube size={40} style={{ fontSize: '60px', color: '#FF0000' }} /> {/* YouTube red */}

      </article>
    </>
  )
}
  
export default Contact;
  