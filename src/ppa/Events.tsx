import img1 from "../assets/IMG1.jpg";
import img2 from "../assets/IMG2.jpg";
import img3 from "../assets/IMg3.jpg";
import img4 from "../assets/IMG4.jpg";
import img5 from "../assets/IMG5.jpg";
import img6 from "../assets/IMG6.jpg";
import img7 from "../assets/IMG7.jpg";
import img8 from "../assets/IMG8.jpg";
import img9 from "../assets/IMG9.jpg";
import img10 from "../assets/IMG10.jpg";
import img11 from "../assets/IMG11.jpg";
import img12 from "../assets/IMG12.jpg";
import img13 from "../assets/IMG13.jpg";
import img14 from "../assets/IMG14.jpg";
import img15 from "../assets/IMG15.jpg";
import img16 from "../assets/IMG16.jpg";
import img17 from "../assets/IMG17.jpg";
import img18 from "../assets/IMG18.jpg";
import img19 from "../assets/IMG19.jpg";
import img20 from "../assets/IMG20.jpg";
import img21 from "../assets/IMG21.jpg";

import img22 from "../assets/new/image2.jpg";
import img23 from "../assets/new/image3.jpg";
import img24 from "../assets/new/image3.jpg";
import img25 from "../assets/new/image4.jpg";
import img26 from "../assets/new/image5.jpg";
import img27 from "../assets/new/image6.jpg";

import vid1 from "../assets/vids/Video1.mp4";
import vid2 from "../assets/vids/Video2.mp4";
import vid3 from "../assets/vids/Video3.mp4";
import vid4 from "../assets/vids/Video4.mp4";
import vid5 from "../assets/vids/Video5.mp4";
import vid6 from "../assets/vids/Video5.mp4";

/*<img className="imgEv" src={img23} />
  <img className="imgEv" src={img24} />
  */

  const videoarry = [
    
    vid1,
    vid2,
    vid3,
    vid4,
    vid5,
    vid6

  ]

const VideoPlayer = () => {
  return (
    <div>
      <video className="vidoplayer" controls autoPlay>
{  videoarry.map((src,index) =>
(<source key={index} src={src} type="Video/mp4" />
))}
</video>
  </div>
  
  );
};

const Events = () => {
  return (
    <>
      <main>
        <div className="background_container2">
          <h2 className="eventpage">Events</h2>

          <h2 className="h2border">Up and coming</h2>
          <div className="evintgalllery">
            <h3>
              There are no up and coming events.
              <br />
              Check back later for updates
              <br />
              we are posting
              <br />
              puppet shows and S.T.E.A.M related activites on our website.
              <br />
              Thank you for your interest in, and support of Paisley Puppet
              Adventures! As always, Please stay safe!
            </h3>
          </div>
          <h3>Image gallery</h3>
          <h2 className="h2border">Past Events</h2>

          <div className="evintgalllery">
            <img className="imgEv" src={img1} />
            <img className="imgEv" src={img2} />
            <img className="imgEv" src={img3} />
            <img className="imgEv" src={img4} />
            <img className="imgEv" src={img5} />
            <img className="imgEv" src={img6} />
            <img className="imgEv" src={img7} />

            <img className="imgEv" src={img8} />
            <img className="imgEv" src={img9} />
            <img className="imgEv" src={img10} />
            <img className="imgEv" src={img11} />
            <img className="imgEv" src={img12} />
            <img className="imgEv" src={img13} />
            <img className="imgEv" src={img14} />

            <img className="imgEv" src={img15} />
            <img className="imgEv" src={img16} />
            <img className="imgEv" src={img17} />
            <img className="imgEv" src={img18} />
            <img className="imgEv" src={img19} />
            <img className="imgEv" src={img20} />
            <img className="imgEv" src={img21} />

            <img className="imgEv" src={img22} />

            <img className="imgEv" src={img25} />
            <img className="imgEv" src={img26} />
            <img className="imgEv" src={img27} />
          </div>

          <h3>Videos</h3>
          {VideoPlayer()}
        </div>
      </main>
    </>
  );
};
export default Events;
