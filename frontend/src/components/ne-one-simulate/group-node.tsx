'use client';

interface GroupNodeProps {
  data: {
    label: string;
    color: string;  // Add color to data interface
  };
}

export function GroupNode({ data }: GroupNodeProps) {
  return (
    <div className="absolute -left-12 top-0 h-full flex items-center">
      <div 
        className="origin-center -rotate-90 whitespace-nowrap px-4 py-1 rounded-t-lg text-sm font-semibold text-gray-600"
        style={{ backgroundColor: data.color }}
      >
        {data.label}
      </div>
    </div>
  );
}
