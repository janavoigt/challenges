import { create } from "zustand";

function turnLightsOn(lights, on) {
  return lights.map((light) => ({ ...light, isOn: on }));
}

const lightsStore = create((set) => ({
  lights: [
    { name: "Living Room", isOn: true, id: 1 },
    { name: "Kitchen", isOn: false, id: 2 },
    { name: "Bedroom", isOn: false, id: 3 },
    { name: "Bathroom", isOn: false, id: 4 },
    { name: "Garage", isOn: false, id: 5 },
    { name: "Porch", isOn: false, id: 6 },
    { name: "Garden", isOn: false, id: 7 },
    { name: "Office", isOn: false, id: 8 },
  ],
  toggleLight: (id) =>
    set((state) => {
      const toggledLight = state.lights.find((light) => light.id === id);
      const lights = [
        ...state.lights.filter((light) => light.id !== id),
        { ...toggledLight, isOn: !toggledLight.isOn },
      ];
      lights.sort((a, b) => a.id - b.id);
      return {
        lights: lights,
      };
    }),
  turnAllOn: () =>
    set((state) => ({ lights: turnLightsOn(state.lights, true) })),
  turnAllOff: () =>
    set((state) => ({ lights: turnLightsOn(state.lights, false) })),
}));

export default lightsStore;
