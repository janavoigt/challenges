import TabBar from "./TabBar";
import Tabs from "./Tabs.jsx";
import Badge from "./Badge.jsx";
import "./App.css";

export default function SectionEntry() {
  return (
    <section className="section_entries">
      <TabBar>
        <Tabs active>
          All Entries <Badge isActive>3</Badge>
        </Tabs>
        <Tabs>
          Favorites <Badge>1</Badge>
        </Tabs>
      </TabBar>
    </section>
  );
}
