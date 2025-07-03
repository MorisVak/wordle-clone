interface SingleCharProps {
  singleChar: string;
}

const SingleChar = ({ singleChar }: SingleCharProps) => {
  return <div className="single-boxes"> {singleChar}</div>;
};
export default SingleChar;
