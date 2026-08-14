import { ChevronDown } from "lucide-react";

interface ISelectProps {
  valueSelected: string;
  setSelection: (period: string) => void;
  label: string;

  values: string[];
}

const Select = ({
  valueSelected,
  setSelection,
  label,
  values,
}: ISelectProps) => {
  return (
    <div className="w-full">
      <label className="font-mono mb-1.5 block text-sm font-medium uppercase">
        {label}
      </label>

      <div className="flex flex-row justify-between items-center w-full rounded-sm border border-[#3E484F] px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
        <select
          value={valueSelected}
          onChange={(e) => setSelection(e.target.value)}
        >
          {values.map((value) => (
            <option key={value} value={value}>
              {label === "período" ? `Últimos ${value} dias` : value}
            </option>
          ))}
        </select>
        <ChevronDown className="relative -right-1" color="#6B7280" size={24} />
      </div>
    </div>
  );
};

export default Select;
