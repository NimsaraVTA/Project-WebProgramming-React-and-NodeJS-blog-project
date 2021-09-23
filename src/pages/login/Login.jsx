import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {

    return (


        <div className="login  container-fluid">

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



                    <text x="50%" y="60%" text-anchor="middle"  >
                        Start The Day With Your Ideas
                    </text>
                </svg>
            </div>s

            <div class="login-form">
                <form action="/examples/actions/confirmation.php" method="post">
                    <h2 class="text-center">Log in</h2>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Username" required="required" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password" required="required" />
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block">Log in</button>
                    </div>
                    <div class="clearfix">
                        <label class="float-left form-check-label"><input type="checkbox" /> Remember me</label>
                        <a href="#" class="float-right">Forgot Password?</a>
                    </div>
                </form>
                <p class="text-center"><Link to="/register">Create an Account</Link></p>
            </div>

        </div>
    )

}