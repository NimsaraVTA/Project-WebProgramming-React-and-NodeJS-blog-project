import './write.css';

export default function Write() {

    return (


        <div className="write">

            <img className="writeImg" src="https://s1.1zoom.me/big0/567/Foliage_Branches_Blue_445622.jpg"
                alt="" />

            <form className="writeForm">

                <div className="writeFormGroup">

                    <label htmlFor="fileInput">
                        <i className="WriteIcon fas fa-plus"></i>
                    </label>

                    <input type="file" id="fileInput" style={{ display: 'none' }} />
                    <input type="text" id="" placeholder="Title" className="WriteInput" autoFocus={true} />

                </div>


                <div className="writeFormGroup">

                    <textarea placeholder="Write Your Story..." type="text" className="WriteInput WriteText"></textarea>

                </div>

                <button className="WriteSubmit">Publish</button>
            </form>

        </div>

    )

}