import Link from 'next/link';
// import Image from 'next/image';
// import Logo from '../public/serato.svg';
import { references } from '../store/data';
import * as IoIcons from 'react-icons/io5';
import ContactForm from '../components/ContactForm';

// todo: fix serato logo overflowing on page!

const ContributionsAndFeatures = () => {
  const [{ youtubeLink, twitterLink, githubLink }] = references;

  return (
    <section className="flex-column">
      {/* <Image
        src={Logo}
        alt="serato css logo"
        className="serato-logo"
        width="128"
        height="128"
      /> */}
      <h1 className="font-heading serato-gradient-on-text font-size-large margin-bottom-4">
        Want to give us some hand or you feel like something is missing?
      </h1>
      <p className="font-bold color-gray-600">Tell us about it below</p>
      <ContactForm />
      <div className="flex-column align-items-center">
        <h2>Go here to our github repo for contributions</h2>
        <h3>Development repo</h3>
        <h3>Documentation repo</h3>
      </div>
      <div className="flex-column align-items-center">
        <h2 className="font-subheading font-size-2">
          You can also get us here!
        </h2>
      </div>
      <div className="social-icons center-with-flex">
        <Link href={youtubeLink.item} passHref>
          <a target="_blank">
            <IoIcons.IoLogoYoutube className="iconic-button--no-background font-size-icon color-custom-secondary--hoverable" />
          </a>
        </Link>
        <Link href={twitterLink.item} passHref>
          <a target="_blank">
            <IoIcons.IoLogoTwitter className="iconic-button--no-background font-size-icon color-custom-secondary--hoverable" />
          </a>
        </Link>
        <Link href={githubLink.item} passHref>
          <a target="_blank">
            <IoIcons.IoLogoGithub className="iconic-button--no-background font-size-icon color-custom-secondary--hoverable" />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default ContributionsAndFeatures;
