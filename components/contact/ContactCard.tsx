import React from "react";
import { cn } from "@/lib/utils";

interface ContactCardProps {
  title: string;
  value: string;
  valuebottom?: string;
  icon: React.ElementType;
  className?: string;
}

const ContactCard = ({
  title,
  value,
  valuebottom,
  icon: Icon,
  className,
}: ContactCardProps) => {
  return (
    <div
      className={cn(
        "border border-primary/50 rounded-lg p-6 flex flex-col gap-5 items-start flex-1 shadow-md bg-white transition-all duration-300 hover:shadow-lg hover:border-primary/90",
        className
      )}
    >
      <div className="flex items-center gap-5 w-full">
        <div className="bg-primary text-primary-foreground rounded-lg flex justify-center items-center w-16 h-16 flex-shrink-0">
          <Icon className="size-8" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold text-gray-800">{title}</p>
          <div className="text-sm text-gray-600">
            <p>{value}</p>
            {valuebottom && <p>{valuebottom}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
