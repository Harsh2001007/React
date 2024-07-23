import { useState } from "react";
import ButtonComp from "./ButtonComp";
import ResetButton from "./ResetButton";

export default function MemberTaskStrip() {
  const [memberSelect, setMemberSelect] = useState("");
  const [statusSelect, setStatusSelect] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [comment, setComment] = useState("");

  const memberObj = [
    { label: "Rishabh Pandey", value: "Rishabh Pandey" },
    { label: "Sandeep Singh", value: "Sandeep Singh" },
    { label: "Shivam Mishra", value: "Shivam Mishra" },
    { label: "Harsh Sachan", value: "Harsh Sachan" },
  ];

  const statusObj = [
    { label: "Pending", value: "Pending" },
    { label: "To-Do", value: "To-Do" },
    { label: "Done", value: "Done" },
    { label: "In-Progress", value: "In-Progress" },
  ];

  function handleMemberSelect(event) {
    setMemberSelect(event.target.value);
  }

  function handleStatusSelect(event) {
    setStatusSelect(event.target.value);
  }

  function handleReset() {
    setMemberSelect("");
    setStatusSelect("");
    setTitle("");
    setDescription("");
    setComment("");
    console.log("values reset");
  }

  function titleHandler(event) {
    setTitle(event.target.value);
  }
  function descriptionHandler(event) {
    setDescription(event.target.value);
  }
  function commentHandler(event) {
    setComment(event.target.value);
  }

  function submitHandler() {
    console.log({
      member: memberSelect,
      status: statusSelect,
      title: title,
      desc: description,
      comment: comment,
    });
  }

  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString(undefined, options);

  const timeOptions = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
  const formattedTime = today.toLocaleTimeString(undefined, timeOptions);
  return (
    <>
      <div className="taskStripContainer">
        <div className="taskTop">
          <p>New Task</p>
          <p>
            Date - {formattedDate}, {formattedTime}
          </p>
        </div>
        <div className="taskBottom">
          <div className="dropContainer">
            <select
              className="select"
              onChange={handleMemberSelect}
              value={memberSelect}
            >
              <option value="" disabled selected>
                Select Team Member
              </option>
              {memberObj.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
            <select
              className="select"
              onChange={handleStatusSelect}
              value={statusSelect}
            >
              <option value="" disabled selected>
                Select Task Status
              </option>
              {statusObj.map((status) => (
                <option value={status.value}>{status.label}</option>
              ))}
            </select>
          </div>
          <div className="inputsContainer">
            <div className="leftPannel">
              <div>
                <p>Title</p>
                <input
                  type="text"
                  className="inputField"
                  onChange={titleHandler}
                  value={title}
                />
              </div>
              <div>
                <p>Description</p>
                <textarea
                  className="textareaField"
                  onChange={descriptionHandler}
                  value={description}
                ></textarea>
              </div>
              <div>
                <p>Comment</p>
                <textarea
                  className="textareaField"
                  onChange={commentHandler}
                  value={comment}
                ></textarea>
              </div>
            </div>
            <div className="rightPannel">
              <ButtonComp btnText={"Submit"} method={submitHandler} />
              <ResetButton btnText={"Clear"} resetMethod={handleReset} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
