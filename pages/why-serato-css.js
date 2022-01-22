import Link from 'next/link';
import { useStore } from '../store/store';

const whySeratoCss = () => {
  const {
    state: { darkMode },
  } = useStore();

  return (
    <>
      <h1 className="font-subheading">Why Serato CSS?</h1>
      <p className="text-align-center">
        Well there a lot of cool CSS frameworks out there and really another one
        shouldn't be built, okay at least for frontend beginner's sake cause
        there already a lot to learn but, I didn't build this framework in
        context as the next popular css or anything but these were the stuff I
        used in my personal projects where I didn't like to use some bloated
        frameworks or be looking to docs everytime cause I need to recall some
        class name but instead used my own and I kinda moved it to every new
        project I would be starting and so decided to make it a full framework
        after all, though it initally lacked the essential pieces, so I built it
        with the following in mind.
      </p>
      <div className="cards-grid">
        {/* card 1 */}
        <div className={`card ${darkMode && '--dark'}`}>
          <h3 className="card-title">Predictability</h3>
          <p className="card-content">
            Serato uses a BEM like flat class naming convention such as
            <span className="color-green margin-x-1">"background-green"</span>
            instead of something like "bg-green" which is not as predictable and
            easy to remember as the former and this ensures a great developer
            experience radically cause you won't strech so much to remember the
            utility class or read it and don't understand what it implies, the
            gotcha here is dreadful but sematic HTML markup but it's worth the
            trade off!
          </p>
        </div>
        {/* card 2 */}
        <div className={`card ${darkMode && '--dark'}`}>
          <h3 className="card-title">Feature Richness</h3>
          <p className="card-content">
            CSS frameworks usaully leave out many cool css tricks and handy
            stuff like animations yet developers really use them, so I wanted to
            bring those in as much as possible while still maintaining the
            weight of the framework to lite.
          </p>
        </div>
        {/* card 3 */}
        <div className={`card ${darkMode && '--dark'}`}>
          <h3 className="card-title">Not Javascript Dependent!</h3>
          <p className="card-content">
            Some frameworks have taken this road and I also liked it, as the job
            of css on the web is to control all visual styling of stuff and let
            javascript control the behavior and todays community has different
            implementations for doing even the common stuff like dropdowns, but
            the way they do it in react is not how they would do it in vue or
            other tech and so why confine them to our own likings by including
            javascript in a css framework? well javascript is needed in some
            cases but there you will have your choice to choose how to implement
            that, I made this to work with every tech stack.
          </p>
        </div>
        {/* card 4 */}
        <div className={`card ${darkMode && '--dark'}`}>
          <h3 className="card-title">Modern And Community Driven</h3>
          <p className="card-content">
            So am not a CSS god but surely some devs out there are and are
            willing to share their handy sass mixins to comunity and I grab
            those and open source them through this framework while giving
            credit to the inventers, does that sound cool? well thats one of the
            reason why Serato CSS has emerged, we can all lay our hands on those
            snappy CSS codepen snipets from a single framework, and this
            framework is totally built for the modern age using flex and grid
            for layouts not floats, clears or tables and it uses the latest css
            features eg. clamp, where, is, container queries and other verified
            css features!
          </p>
        </div>
      </div>
      <div className="my-4">
        <Link href="/getting-started">
          <a className="link">Getting Started!</a>
        </Link>
      </div>
    </>
  );
};

export default whySeratoCss;
