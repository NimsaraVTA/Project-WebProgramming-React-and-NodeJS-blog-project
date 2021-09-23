import './register.css';
import { Link } from 'react-router-dom';
export default function Register() {

    return (



        <div className="register container-fluid">

            <div class="patterns">
                <svg width="100%">
                    <defs>
                        <pattern id="polka-dots" x="0" y="0" width="100" height="100"
                            patternUnits="userSpaceOnUse">
                            <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
                        </pattern>
                        <style>
                            @import url("https://fonts.googleapis.com/css?  family=Lora:400,400i,700,700i");
                        </style>

                    </defs>

                    <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect>



                    <text x="50%" y="60%" text-anchor="middle" className="headingtext" >
                        Start The Day With Your Ideas
                    </text>
                </svg>
            </div>

            <div class="login-form">
                <form action="/examples/actions/confirmation.php" method="post">
                  <h2 class="text-center">Sing Up</h2>
                <div class="form-group">
                <input type="text" class="form-control" placeholder="Enter your Name" required="required" />
                    </div>

                <div class="form-group">
                 <input type="mail" class="form-control" placeholder="Enter Your Mail" required="required" />
                 </div>

                <div class="form-group">
                <input type="password" class="form-control" placeholder="Password" required="required" />
                    </div>

                <div class="form-group">
                 <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
                 </div>
                
                </form>
                <p class="text-center"><Link to="/login">Log in</Link></p>
                        </div>

        </div>
    )

}