import ThankYou from "./components/ThankYou";
import AddOnsForm from "./components/addOnsForm";
import InfoForm from "./components/infoForm";
import MobileIndicators from "./components/mobileIndicators";
import NavigationButtons from "./components/navigationButtons";
import PlanForm from "./components/planForm";
import Sidebar from "./components/sidebar";
import SummaryForm from "./components/summaryForm";
import { useStepContext } from "./context/stepContext";

const steps = [
  <InfoForm />,
  <PlanForm />,
  <AddOnsForm />,
  <SummaryForm />,
  <ThankYou />,
];

function App() {
  const { currentStep } = useStepContext();

  return (
    <div className="min-h-screen bg-gray bg-magnolia px-4 flex flex-col justify-center items-center">
      <MobileIndicators />
      <div className="rounded-xl bg-white container max-w-5xl box-border pb-4 md:p-2 flex z-20 my-auto mt-28 md:my-auto">
        <Sidebar />
        {steps[currentStep - 1]}
      </div>
      <div className="bg-white w-screen p-4 md:hidden mt-auto">
        <NavigationButtons mobile/>
      </div>
    </div>
  );
}

export default App;
