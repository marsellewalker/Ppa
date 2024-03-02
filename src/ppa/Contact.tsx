import Footer from "../footer/footer";
import Header2 from "../header/header";

const Contact = () => {
  return (
    <>
     
      <main>
        <div className="container2">
          <div className="containermain">

            <h1 className="contact">Contact Us</h1>
          
            <form action="/action_page.php" target="_blank">
              
                <label>Name </label>
                <input className='input' type="text" name="Name" required />
              
              
                <label>Email </label>
                <input  className='input' type="text" name="Email" required />
              
              
                <label>Subject </label>
                <input className='input' name="Subject" required />
              
              
                <label>Message</label>
                <textarea name="Message" required></textarea>
                <button className="submit" type="submit">Send</button>

              </form>
              <div className="submit">
              </div>
          </div>
          </div>
        </main>
    </>
  );
};

export default Contact;
