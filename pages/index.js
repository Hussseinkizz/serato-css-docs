import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex-column align-items-center">
      <h1 className="font-heading color-secondary">
        `Hey Welcome To <br />
        <span className="serato-gradient-on-text">Serato CSS!</span>`
      </h1>
      <h2 className="font-subheading text-align-center animation-float is-animating is-animating-slow">
        A modern mini CSS framework full of handy utilities, colors and
        animations inspired to be most predictable and beginner friendly.
      </h2>
      <p className="font-size-large text-align-center margin-y-2">
        Built to work out of the box using CSS's most popular preprocessor sass
        and the mighty flex and grid for most of the layout stuff with grids
        used for main layouts and flex for the rest, while the framework also
        uses a BEM like flat naming convetion style eg. "background-green"
        instead of 'bg-green' to be predictable, more readable and beginner
        friendly. <br /> Wanna try it out? <br />
        Here is why you should!
      </p>
      <Link href="/why-serato-css">
        <a className="link text-decoration-none text-align-center">
          Why Serato CSS?
        </a>
      </Link>
    </section>
  );
}
