import { OptionsLeftBar } from "./OptionsLeftBar";
import { LeftBarContainer, TitleLeftBar } from "./style";
import { IoConstruct } from "react-icons/io5";

export function LeftBar() {
  return (
    <LeftBarContainer>
      <TitleLeftBar>
        <IoConstruct size={30} />
        <h1>Status</h1>
      </TitleLeftBar>
      <OptionsLeftBar />
    </LeftBarContainer>
  );
}
