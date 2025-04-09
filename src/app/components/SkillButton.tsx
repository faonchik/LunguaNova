import Image from 'next/image';

interface SkillButtonProps {
  label: string;
  width: number;
  height: number;
  iconPath: string;
  iconWidth: number;
  iconHeight: number;
}

export function SkillButton({ label, width, height, iconPath, iconWidth, iconHeight }: SkillButtonProps) {
  return (
    <button
      type="button"
      style={{ width: `${width}px`, height: `${height}px` }}
      className="flex items-center justify-center bg-white border border-[#48B7F2] rounded hover:bg-[#F0F9FF] transition-colors"
      aria-label={`Кнопка ${label}`}
    >
      <Image
        src={iconPath}
        alt={`Иконка ${label}`}
        width={iconWidth}
        height={iconHeight}
        className="mr-1"
      />
      <span className="font-inter font-normal text-[#48B7F2] text-[12px] leading-none">
        {label}
      </span>
    </button>
  );
}