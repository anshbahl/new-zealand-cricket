
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface YearGroupSelectorProps {
  selectedYears: string[];
  onChange: (years: string[]) => void;
}

export const YearGroupSelector = ({ selectedYears, onChange }: YearGroupSelectorProps) => {
  const yearGroups = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Year 7', 'Year 8'];

  const handleYearChange = (year: string, checked: boolean) => {
    if (checked) {
      onChange([...selectedYears, year]);
    } else {
      onChange(selectedYears.filter(y => y !== year));
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {yearGroups.map((year) => (
        <div key={year} className="flex items-center space-x-2 p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
          <Checkbox 
            id={year} 
            checked={selectedYears.includes(year)}
            onCheckedChange={(checked) => handleYearChange(year, checked as boolean)}
          />
          <Label htmlFor={year} className="text-sm font-medium cursor-pointer">{year}</Label>
        </div>
      ))}
    </div>
  );
};
