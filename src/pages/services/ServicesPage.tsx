import Services from "../../components/Services";
import CTA from "../../components/CTA";
import FullServiceList from "../../components/FullServiceList";

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <Services />
      <FullServiceList />
      <CTA />
    </div>
  );
}
