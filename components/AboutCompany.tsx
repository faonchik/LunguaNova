import React from 'react';
import Image from 'next/image';

const AboutCompany: React.FC = () => {
  return (
    <div className="relative w-full">
      <div className="flex flex-row">
        {/* Левая колонка с изображением */}
        <div 
          className="relative" 
          style={{
            width: '634px',
            height: '475px',
            left: '0px',
            top: '14px',
            transformOrigin: 'center center'
          }}
        >
          <Image
            src="/assets/Company.png"
            alt="INNO LINK LLC"
            width={1000}
            height={600}
            className="w-full sm:w-auto md:w-[960px] lg:w-full object-cover"
            unoptimized
          />
        </div>
        
        {/* Правая колонка с текстом */}
        <div className="flex flex-col pl-[21px] pt-[14px]">
          {/* Заголовок с логотипом */}
          <div className="flex items-center gap-4 mb-[30px]">
            <Image
              src="/assets/LOGO_INNO_LINK_LLC-P.png"
              alt="INNO LINK LLC Logo"
              width={110}
              height={109}
            />
            <h2 className="text-[33px] font-normal">О КОМПАНИИ</h2>
          </div>
          
          {/* Описание */}
          <div className="max-w-[511px]">
            <p className="text-[27px] leading-[27px]">
              <strong>INNO LINK LLC</strong> — это международная производственная компания, 
              специализирующаяся на выпуске <strong>высококачественных компонентов</strong> для 
              автомобильной, судостроительной и полупроводниковой промышленности. Благодаря 
              современным технологиям и строгому контролю качества компания обеспечивает 
              надежность и долговечность своей продукции.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany; 