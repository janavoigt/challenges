import Image from "./Image.jsx";

export default function Avatar() {
  return (
    <button
      type="button"
      onClick={() => console.log("I could toggle a profile!")}
      aria-label="toggle profile"
    >
      <Image src="../assets/avatar.jpg" alt="avatar" />
    </button>
  );
}
