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
        <ButtonComp btnText={"+ Create"} method={handlePostDataClick} />
        <ButtonComp btnText={"Get Data"} method={handleGetDataClick} />
      </div>
    </>
  );
}
