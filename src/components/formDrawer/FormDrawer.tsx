import "./FormDrawer.css";

type FormDrawerProps = {
  inputValue: number;
  textAreaValue: number;
  checkBoxValue: number;
};

export function FormDrawer({
  inputValue,
  textAreaValue,
  checkBoxValue,
}: FormDrawerProps) {
  const inputLength = Array(inputValue).fill(0);
  const textAreaLength = Array(textAreaValue).fill(0);
  const checkBoxLength = Array(checkBoxValue).fill(0);
  return (
    <>
      <form className="form">
        <div className="inputs">
          {inputLength.map((i) => (
            <input></input>
          ))}
        </div>
        <div className="textareas">
          {textAreaLength.map((i) => (
            <textarea />
          ))}
        </div>
        <div className="checkboxes">
          {checkBoxLength.map((i) => (
            <input type="checkbox"></input>
          ))}
        </div>
      </form>
    </>
  );
}
