import Link from "../components/Link";
import lightsStore from "@/components/lightsStore";

export default function HomePage() {
  const lights = lightsStore((state) => state.lights);
  const numLightsOn = lights.filter((light) => light.isOn).length;
  return (
    <div>
      <h1>Home</h1>
      <p>{numLightsOn} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
