import Link from 'next/link';
import { references } from '../../../store/data';

const reset = () => {
  let [{ githubLink }] = references;

  return (
    <div className="container text-align-center">
      <h1 className="font-heading color-primary">
        Hey, We're Still Working On This,
      </h1>
      <br />
      <h2 className="font-subheading text-align-center color-secondary">
        May Be Give Us Some Hand?
      </h2>
      <br />
      <br />
      <Link href="#" passHref>
        <a className="link">GitHub: {githubLink.item}</a>
      </Link>
    </div>
  );
};

export default reset;
