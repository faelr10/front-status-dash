import { InfoShow } from "./InfoShow";
import { LeftBar } from "./LeftBar";
import { ContainerBox } from "./style";

export function Container() {
  return (
    <ContainerBox>
      <LeftBar />
      <InfoShow />
    </ContainerBox>
  );
}
