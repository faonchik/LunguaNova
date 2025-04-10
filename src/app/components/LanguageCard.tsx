import Image from 'next/image';
import Link from 'next/link';

interface LanguageCardProps {
  name: string;
  coursesCount: number;
  flagImagePath: string;
  href: string;
}

export function LanguageCard({ 
  name, 
  coursesCount, 
  flagImagePath, 
  href 
}: LanguageCardProps) {
  return (
    <Link 
      href={href}
      className="block"
    >
      <div
        className="bg-white shadow-lg rounded-lg p-4 flex flex-col border border-[#48B7F2] relative 
                   hover:bg-[#f0f9ff] transition-colors duration-200 focus:outline-none focus:ring-2 
                   focus:ring-[#48B7F2] focus:ring-opacity-50 active:bg-[#e0f2fe] cursor-pointer"
        style={{ width: "328px", height: "195px" }}
      >
        <div className="absolute top-3 left-3 bg-[#48B7F2] text-white text-sm font-bold px-3 py-1 rounded-full">
          {coursesCount} курсов
        </div>
        <div className="flex items-center justify-between mt-10">
          <h3 className="text-[#48B7F2] font-bold text-lg">{name}</h3>
          <div className="ml-4">
            <Image
              src={flagImagePath}
              alt={`Флаг ${name}`}
              width={60}
              height={40}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </Link>
  );
}