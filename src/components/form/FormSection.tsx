
import { ReactNode } from "react";

interface FormSectionProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}

export const FormSection = ({ title, children, icon }: FormSectionProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
        {icon}
        <h3 className="text-lg font-semibold text-nzc-dark-blue">{title}</h3>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};
