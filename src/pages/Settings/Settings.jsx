import Sidebar from '../../sidebar/Sidebar';
import './settings.css';

export default function Settings() {

    return (


        <div className="settings">
            <div className="settingWrapper">

                <div className="settingsTitle">

                    <span className="settingsupdateTitle">Update Your Account</span>
                    <span className="settingsdeleteTitle">Delete Your Account</span>

                </div>

                <form className="settingForm">
                    <label>Profile Picture</label>
                    <hr className="hrline" />
                    <div className="settingsPP">

                        <img src="https://images.unsplash.com/photo-1616740795271-abd6ce1a5a5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHdyaXRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                         alt="" />

                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>

                        <input type="file"  id="fileInput" style={{ display:"none" }} />

                    </div>

                    <label>Username</label>
                    <hr className="hrline" />
                    <input type="text" placeholder="Thathsarani Nimsara" />

                    <label>Email</label>
                    <hr className="hrline" />
                    <input type="text" placeholder="abc@gmail.com" />

                    <label>Password</label>
                    <hr className="hrline" />
                    <input type="password" />

                    <button className="settingsSubmit">Update</button>

                </form>

            </div>
            <Sidebar />

        </div>
    )

}