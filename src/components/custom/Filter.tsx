import { Bars3Icon } from "@heroicons/react/24/outline";

interface Props {
  title: string;
  options: string[];
  addFilter: (value: string) => void;
  removeFilter: (value: string) => void;
}

const Filter: React.FC<Props> = ({
  title,
  options,
  addFilter,
  removeFilter,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      addFilter(value);
    } else {
      removeFilter(value);
    }
  };

  return (
    <div className="px-3 pt-3 pb-2 bg-white dark:bg-slate-950 rounded-lg">
      <div className="flex gap-2 pb-2">
        <Bars3Icon className="w-6" />
        <h5>{title}</h5>
      </div>
      <form className="flex flex-col gap-2 pr-1 overflow-y-auto h-36">
        {options.map((option, index) => (
          <div className="flex gap-2" key={index}>
            <input
              type="checkbox"
              name={String(index)}
              value={option}
              onChange={handleChange}
            />
            <label className="text-xs" htmlFor={String(index)}>
              {option}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Filter;
