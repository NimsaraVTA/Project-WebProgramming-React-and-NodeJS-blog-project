import { Link } from 'react-router-dom';
import './post.css';

export default function Post() {

    return (

        <div className="post">

            <img className="postImg" src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-26mc3o51hbnqlflrvn6710nr24-20180601031116.Medi.jpeg" alt="" />

            <div className="postInfo">

                <div className="postCats">
                    <span className="postCats">Random</span>
                    <span className="postCats">Life</span>
                </div>

                <span className="postTitle"><Link style={{ textDecoration: "none", color: "inherit" }} to="/single">
                    Feelings of the Day
                </Link></span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>

            <p className="postDescription">
                Oh, oh, oh, oh, oh, sometimes I get a good feeling, yeah
                I get a feeling that I never never never never had before, no no
                I get a good feeling, yeah
                Oh oh, sometimes I get a good feeling, yeah
                I get a feeling that I never never never never had before, no no
                I get a good feeling, yeah
            </p>
        </div>

    )

}