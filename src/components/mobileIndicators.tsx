import bgSidebarMobile from "@/assets/images/bg-sidebar-mobile.svg";
import Step from "./step";
interface Props extends React.HTMLAttributes<HTMLDivElement> { }

const MobileIndicators: React.FC<Props> = () => {
  return (
    <div className="md:hidden absolute left-0 top-0">
      <img src={bgSidebarMobile} alt="sidebar" className="w-screen" />
      <div className="flex justify-center w-screen gap-4 absolute top-8 left-0">
        <Step step={1} text="Your Info" />
        <Step step={2} text="Select Plan" />
        <Step step={3} text="Add-ons" />
        <Step step={4} text="Summary" />
      </div>
    </div>
  );
};

export default MobileIndicators;
