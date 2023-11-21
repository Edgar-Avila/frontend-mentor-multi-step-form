interface Props extends React.HTMLAttributes<HTMLDivElement> { 
  title: string;
  subtitle: string;
}

const FormTitle: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="mt-8 mb-4">
      <h2 className="text-marine-blue text-3xl font-bold">{title}</h2>
      <p className="text-cool-gray">{subtitle}</p>
    </div>
  );
};

export default FormTitle;