import sidebarDesktop from "@/assets/images/bg-sidebar-desktop.svg";
import Step from "./step";
import cn from "@/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Sidebar: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div className={cn("relative hidden md:block", className)} {...props}>
      <img src={sidebarDesktop} alt="Sidebar" className="w-full" />
      <div className="absolute left-0 top-0 py-10 md:px-8 space-y-6">
        <Step step={1} text="Your Info" />
        <Step step={2} text="Select Plan" />
        <Step step={3} text="Add-ons" />
        <Step step={4} text="Summary" />
      </div>
    </div>
  );
};

export default Sidebar;
