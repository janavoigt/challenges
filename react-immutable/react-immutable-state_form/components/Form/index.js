import { useState } from "react";
import { StyledForm, StyledInputContainer } from "./Form.styled";

export default function Form() {
  const [mountain, setMountain] = useState({
    name: "Mount Everest",
    values: {
      altitude: 8848,
      mountainRange: "Himalayas",
    },
  });

  function handleNameChange(event) {
    event.preventDefault();
    let nameMountain = event.target.value;
    setMountain({ ...mountain, name: nameMountain });
  }

  function handleAltitudeChange(event) {
    event.preventDefault();
    let altitudeMountain = event.target.value;
    setMountain({
      ...mountain,
      values: { ...mountain.values, altitude: altitudeMountain },
    });
  }

  function handleMountainRangeChange(event) {
    event.preventDefault();
    let mountainRanges = event.target.value;
    setMountain({
      ...mountain,
      values: { ...mountain.values, mountainRange: mountainRanges },
    });
  }

  return (
    <StyledForm>
      <StyledInputContainer>
        <label htmlFor="name">Name:</label>
        <input id="name" value={mountain.name} onChange={handleNameChange} />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="altitude">Altitude:</label>
        <input
          id="altitude"
          value={mountain.values.altitude}
          onChange={handleAltitudeChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="mountainRange">Mountain Range:</label>
        <input
          id="mountainRange"
          value={mountain.values.mountainRange}
          onChange={handleMountainRangeChange}
        />
      </StyledInputContainer>
      <output>
        <i>{mountain.name}</i>
        {" is "}
        {mountain.values.altitude}
        {" meters high"}
        <br />
        (and located in the {mountain.values.mountainRange})
      </output>
    </StyledForm>
  );
}
