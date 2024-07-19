import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ onAdd, cancelHandler }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  }

  return (
    <>
      <Modal ref={modal} btnTitle={"Okay"}>
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-700">
          Invalid Input
        </h2>
        <p className="text-stone-600 mb-4">
          Oops ... look like you forget to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide valid input for the fields.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={cancelHandler}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label={"Title"} ref={title} />
          <Input label={"Description"} textArea={true} ref={description} />
          <Input label={"Due Date"} ref={date} type="date" />
        </div>
      </div>
    </>
  );
}
