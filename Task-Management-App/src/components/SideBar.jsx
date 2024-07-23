import ButtonComp from "./ButtonComp";

export default function SideBar() {
  return (
    <>
      <div className="sidebarContainer">
        <ButtonComp btnText={"+ Create"} />
        <ButtonComp btnText={"Get Data"} />
      </div>
    </>
  );
}
