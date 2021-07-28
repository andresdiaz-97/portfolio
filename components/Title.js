import Paragraph from "./Paragraph";

const Title = ({ title, para }) => {
  return (
    <div className='container2'>
      <h1 className='title'>{title}</h1>
      <Paragraph para={para} />
    </div>
  );
};

export default Title;
