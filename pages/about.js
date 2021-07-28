import Title from "../components/Title";

const About = () => {
  let title = "About Me";
  let para =
    "I'm a self-taught front-end developer living in rural Chile. I'm looking for new opportunities to develop interactive and responsive web development solutions and enchance the user experience over the internet.";

  return (
    <div className='hero'>
      <Title title={title} para={para} />
    </div>
  );
};

export default About;

{
  /* <div className='container2'>
        <h1 className='title'>About Me</h1>
        <p className='para'>
          <strong>
            I&apos;m a self-taught front-end developer living in rural Chile.
            I&apos;m looking for new opportunities to develop interactive and
            responsive web development solutions and enhance the user experience
            over the internet.
          </strong>
        </p>
      </div> */
}
