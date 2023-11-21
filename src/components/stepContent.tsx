import cn from "@/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const StepContent: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <div className={cn("flex flex-col gap-4", className)} {...props}>
      {children}
    </div>
  );
};

export default StepContent;
