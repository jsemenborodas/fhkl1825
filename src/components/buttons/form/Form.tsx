import { useState } from "react";
import "./Form.css";
import { FormDrawer } from "../../formDrawer/FormDrawer";

export function Form() {
  const [inputValue, setInputValue] = useState(0);
  const [textAreaValue, setTextAreaValue] = useState(0);
  const [checkBoxValue, setCheckBoxValue] = useState(0);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      inputValue > 0 &&
      inputValue !== undefined &&
      textAreaValue > 0 &&
      textAreaValue !== undefined &&
      checkBoxValue > 0 &&
      checkBoxValue !== undefined
    ) {
      setIsSubmitClicked(true);
    } else {
      setIsSubmitClicked(false);
    }
  };

  return (
    <>
      <div className="formWrapper">
        {!isSubmitClicked && (
          <form
            className={isSubmitClicked ? "form" : "formStart"}
            onSubmit={onSubmit}
          >
            <div className="inputElem">
              <div className="inputElemText">Input</div>
              <div className="inputElemInput">
                <input
                  type="number"
                  onChange={(e) => setInputValue(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="inputElem">
              <div className="inputElemText">Textarea</div>
              <div className="inputElemInput">
                <input
                  type="number"
                  onChange={(e) => setTextAreaValue(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="inputElem">
              <div className="inputElemText">Checkbox</div>
              <div className="inputElemInput">
                <input
                  type="number"
                  onChange={(e) => setCheckBoxValue(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="submitButton">
              <input type="submit" value="Build" />
            </div>
          </form>
        )}
      </div>
      {isSubmitClicked && (
        <FormDrawer
          inputValue={inputValue}
          textAreaValue={textAreaValue}
          checkBoxValue={checkBoxValue}
        ></FormDrawer>
      )}
    </>
  );
}
