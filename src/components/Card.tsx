const Card = ({
  title,
  description,
  button,
}: {
  title: string;
  description: string;
  button: string;
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>{description}</div>
      <button onClick={() => alert("Button clicked")}>{button}</button>
    </div>
  );
};

export default Card;
