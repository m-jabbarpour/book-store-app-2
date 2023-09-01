interface Props {
  title: string;
}

const Title: React.FC<Props> = ({ title }) => {
  return (
    <div className="relative mb-8">
      <hr className="border-none h-[2px] bg-gray-400" />
      <div className="absolute top-[-16px] left-1/2 translate-x-[-50%] px-4 text-xl font-bold bg-neutral-100 dark:bg-slate-800">
        {title}
      </div>
    </div>
  );
};

export default Title;
