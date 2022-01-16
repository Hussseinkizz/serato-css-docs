import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className="font-heading color-secondary">
        `Hey Welcome To <br />
        <span className="serato-gradient-on-text">Serato CSS!</span>`
      </h1>
      <h2 className="font-subheading text-align-center animation-float is-animating is-animating-slow">
        A modern mini framework full of handy utilities, colors and animations
        inspired to be most predictable and community driven.
      </h2>
      <p className="font-size-large text-align-center">
        Serato CSS is built with CSS's most popular preprocessor sass and uses
        flexbox for most of the layout stuff with a few grids used there and
        here, and the framework uses a BEM like flat naming convetion style eg.
        "background-green" to be predictable, readable and beginner friendly.
        Wanna try it out? Here is why you should!
      </p>
      <Link href="/why-serato-css">
        <a className="link text-decoration-none padding-bottom-5">
          Why Serato CSS?
        </a>
      </Link>
    </>
  );
}
