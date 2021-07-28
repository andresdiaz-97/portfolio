import Title from "../components/Title";

const Portfolio = () => {
  let title = "Portfolio";
  let para = "What I'm working on";
  return (
    <div className='hero'>
      <Title title={title} para={para} />
    </div>
  );
};

export default Portfolio;
