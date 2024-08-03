import ButtonComp from "./ButtonComp";

export default function SideBar({ setScreen }) {
  const handlePostDataClick = () => {
    setScreen(true); // Show TaskScreen
  };

  const handleGetDataClick = () => {
    setScreen(false); // Show ModalScreen
  };
  return (
    <>
      <div className="sidebarContainer">
        <ButtonComp btnText={"Create"} method={handlePostDataClick}>
          <div className="btnIconDiv">
            <i class="fa-solid fa-plus"></i>
          </div>
        </ButtonComp>
        <ButtonComp btnText={"Tickets"} method={handleGetDataClick}>
          <div className="btnIconDiv">
            <i class="fa-solid fa-ticket"></i>
          </div>
        </ButtonComp>
      </div>
    </>
  );
}
