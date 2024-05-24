import styled from "styled-components";
import Light from "../Light";
import lightsStore from "@/components/lightsStore";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights() {
  const lights = lightsStore((state) => state.lights);
  const onToggle = lightsStore((state) => state.toggleLight);
  return (
    <StyledLights>
      {lights.map((light) => {
        return (
          <li key={light.id}>
            <Light
              name={light.name}
              isOn={light.isOn}
              onToggle={() => onToggle(light.id)}
            />
          </li>
        );
      })}
    </StyledLights>
  );
}
