const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Левая половина - изображение */}
          <div className="h-full">
            <img
              src="/assets/Company.png"
              alt="INNO LINK LLC"
              className="w-full h-full object-cover"
              style={{ maxHeight: '600px' }}
            />
          </div>

          {/* Правая половина - текст */}
          <div className="flex flex-col p-8">
            <div className="flex items-center gap-4 mb-[30px]">
              <img
                src="/assets/LOGO_INNO_LINK_LLC-P.png"
                alt="INNO LINK LLC Logo"
                width={110}
                height={109}
                className="w-[110px] h-[109px]"
              />
              <h2 className="text-[33px] font-normal">О КОМПАНИИ</h2>
            </div>

            <div>
              <p className="text-[27px] leading-[1.4]">
                <strong>INNO LINK LLC</strong> — это международная производственная компания, специализирующаяся на выпуске <strong>высококачественных компонентов</strong> для автомобильной, судостроительной и полупроводниковой промышленности. Благодаря современным технологиям и строгому контролю качества компания обеспечивает надежность и долговечность своей продукции.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 