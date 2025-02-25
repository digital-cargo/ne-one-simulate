'use client';

interface GroupNodeProps {
  data: {
    label: string;
    color: string;
    isLast?: boolean; // Optional flag to identify the last swim lane
  };
  children?: React.ReactNode;
}

export function GroupNode({ data, children }: GroupNodeProps) {
  return (
    <div className={`relative border-t border-l border-r ${!data.isLast ? 'border-b border-dashed' : 'border-b'} border-gray-200 bg-blue-50 min-h-32 w-full p-4`}>
      {/* Header/Label for the swim lane */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gray-100 flex items-center border-r border-gray-200">
        <div className="origin-center -rotate-90 absolute whitespace-nowrap px-4 py-2 text-base font-semibold text-gray-600 w-32 text-center">
          {data.label}
        </div>
      </div>
      
      {/* Content area with padding to accommodate the label column */}
      <div className="ml-16 w-full h-full">
        {children}
      </div>
    </div>
  );
}