import Sidebar from '../sidebar/Sidebar';
import './about.css';

export default function About() {

    return (

        
        <div className="about container-fluid">

            <div className="blogDes">
                <div className="containerAbout">
                <h1 className="aboutTitle">About this blog page</h1>
                <h2 className="midTtile">Do you know what a blog is?</h2>
                <p className="aboutText">
                    If you don not, then you have come to the right place. In 1994, when blogs
                    began, a blog was more of a personal diary that people shared online. In
                    this online journal, you could talk about your daily life or share about
                    things that you were doing. Then, people saw an opportunity to communicate
                    information in a new way online. Thus began the beautiful world of blogging.
                    </p>

                    <h2 className="midTtile">What is the purpose of a blog?</h2>
                    <p className="aboutText">
                        There are many reasons to start a blog for personal use and only a handful of
                        strong ones for business blogging. Blogging for business, projects, or anything
                        else that might bring you money has a very straightforward purpose to rank your
                        website higher in Google SERPs, a.k.a. increase your visibility.

                        As a business, you rely on consumers to keep buying your products and services.
                        As a new business, you rely on blogging to help you get to potential consumers
                        and grab their attention. Without blogging, your website would remain invisible,
                        whereas running a blog makes you searchable and competitive.

                        So, the main purpose of a blog is to connect you to the relevant audience.
                        Another one is to boost your traffic and send quality leads to your website.

                        The more frequent and better your blog posts are, the higher the chances for
                        your website to get discovered and visited by your target audience. This means
                        that a blog is an effective lead generation tool. Add a great call to action (CTA) to your content, and it will convert your website traffic into high-quality leads. A blog also allows you to showcase your niche authority and build a brand.

                        When you use your niche knowledge for creating informative and engaging posts,
                        it builds trust with your audience. Great blogging makes your business look more
                        credible, which is especially important if your brand is still young and fairly
                        unknown. It ensures presence online and niche authority at the same time.
                    </p>

                    <h2 className="midTtile">What you can do on this?</h2>
                    <p className="aboutText">
                        You can write any ideas that you want and according to any topic that you intereset.
                        So let to get started your blog from this blog. Happy blogging...!
                    </p>

                    <img className="aboutImg" src="https://miro.medium.com/max/2000/1*V7A9Z60iRxAvGA6ZBpaatg.jpeg" />
                </div>
            </div>
            <Sidebar />
           
            </div>

    )

}