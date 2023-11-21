import thankYouIcon from "@/assets/images/icon-thank-you.svg";

const ThankYou: React.FC = () => {
  return (
    <div className="flex flex-col text-center justify-center gap-4 my-16 mx-10 lg:mx-20 flex-grow basis-2/3">
      <div className="mx-auto">
        <img src={thankYouIcon} />
      </div>
      <h2 className="text-marine-blue text-3xl font-bold">Thank you!</h2>
      <p className="text-cool-gray text-lg leading-tight">
        Thanks for confirming you subscription! We hope you have fun using our
        platform, if you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default ThankYou;
