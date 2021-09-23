import './contact.css';
import Sidebar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';


export default function Contact() {

    return (

        <>

            <div className="conatct">
             
                <div class="container">

                    <h1 className="contactTitle">Add Contacts Here</h1>
                    <br />
             <form action="/action_page.php">
             <div class="row">
             <div class="col-25">
             <label for="fname">Your Name</label>
             </div>
             <div class="col-75">
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
      </div>
            </div>
          <div class="row">
             <div class="col-25">
            <label for="lname">Contact No</label>
             </div>
             <div class="col-75">
         <input type="text" id="lname" name="lastname" placeholder="Contact No" />
      </div>
             </div>
              <div class="row">
            <div class="col-25">
           <label for="country">Country</label>
           </div>
         <div class="col-75">
             <select id="country" name="country">
      <option value="australia">Sri Lanka</option>
       <option value="canada">UK</option>
           <option value="usa">USA</option>
         </select>
             </div>
          </div>
          <div class="row">
      <div class="col-25">
        <label for="subject">Subject</label>
     </div>
        <div class="col-75">
     <textarea id="subject" name="subject" placeholder="Write something.." style={{ height:"200px"}}></textarea>
      </div>
       </div>
         <div class="row">
                            <Link to="/showcon" style={{ textDecoration: "none", color: "inherit" }}><input type="submit" className="btn btn-primary adCon" value="Add Contact" /></Link>
                            <button className="btn btn-primary shCon"><Link to="/showcon" style={{ textDecoration: "none", color: "inherit" }}>Show Contact</Link></button>
         
     </div>

                        

  </form>
          </div>
                
                <Sidebar />

            </div>

        </>
    )

}