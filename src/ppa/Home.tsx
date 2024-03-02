import MyGallery from "../gallerforhome/gallerymain";

const Home = () => {
  return (
    <>
      <main>
        <MyGallery />
    
        <div className="homebas2">
        <h3 className="homecontainer">
          Paisley<span className="highlight">Puppet</span>Adventures
        </h3>
          <article>
            Many studies have shown
            that the inclusion of puppetry activities in early childhood programs
            have far reaching educational benefits in regards to communication
            skills, social and emotional growth, enhanced creativity and
            imagination, just to note a few. PPA has utilized puppets as a
            learning tool to enhance learning experiences for young children in
            the areas of S.T.E.A.M. [ Science, Technology, Engineering, Art, and
            Mathematics].
            
            </article>
            <article>

             These activities are strategically designed to be
            comprehensive and fun for young children with the intention of
            increasing their knowledge of each educational concept with measurable
            outcomes. The PPA educational initiative is intended to accompany and
            enhance any given curriculum, and boost child interest.
          </article>
          </div>
      </main>
    </>
  );
};

export default Home;
