import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex w-[80%] overflow-x-scroll whitespace-nowrap">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="Soccer" />
      <Button name="News" />
      <Button name="Live" />
      <Button name="Cooking" />
      <Button name="Nature" />
      <Button name="Love" />
      <Button name="Rain" />
      <Button name="Snowfall" />
      <Button name="PubG" />
      <Button name="Horror" />
    </div>
  );
};

export default ButtonList;
