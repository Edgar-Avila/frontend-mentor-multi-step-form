import cn from "@/utils";
import { forwardRef } from "react";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  checked?: boolean;
}

const Switch = forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <label
        className={cn("inline-block rounded-full cursor-pointer", className)}
      >
        <input type="checkbox" className="hidden peer" ref={ref} {...props} />
        <span
          className={cn(
            "inline-block w-12 h-6 rounded-full bg-marine-blue relative before:absolute before:h-4 before:w-4 before:transition-transform before:rounded-full before:left-1 before:top-1 before:bg-white before:peer-checked:translate-x-6",
          )}
        ></span>
      </label>
    );
  },
);

export default Switch;
