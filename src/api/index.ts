import iconAdvanced from "@/assets/images/icon-advanced.svg";
import iconArcade from "@/assets/images/icon-arcade.svg";
import iconPro from "@/assets/images/icon-pro.svg";

type AddOnNameType = "onlineService" | "largerStorage" | "customizableProfile";

type AddOnType = {
  name: AddOnNameType;
  title: string;
  desc: string;
  price: {
    monthly: number;
    yearly: number;
  };
};

export const getPlans = () => {
  const plans = {
    arcade: {
      icon: iconArcade,
      name: "arcade",
      price: {
        monthly: 9,
        yearly: 90,
      },
    },
    advanced: {
      icon: iconAdvanced,
      name: "advanced",
      price: {
        monthly: 12,
        yearly: 120,
      },
    },
    pro: {
      icon: iconPro,
      name: "pro",
      price: {
        monthly: 15,
        yearly: 150,
      },
    },
  };
  return plans;
};

export const getAddOns = () => {
  const addOns: AddOnType[] = [
    {
      name: "onlineService",
      title: "Online service",
      desc: "Access to multiplayer games",
      price: {
        monthly: 1,
        yearly: 10,
      },
    },
    {
      name: "largerStorage",
      title: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
    {
      name: "customizableProfile",
      title: "Customizable profile",
      desc: "Custom theme on your profile",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
  ];
  return addOns;
};
