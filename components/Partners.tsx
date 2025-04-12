const Partners = () => {
  const partners = [
    { src: "https://optim.tildacdn.com/tild3863-3832-4636-a637-663139373837/-/resize/192x/-/format/webp/IMI.png" },
    { src: "https://optim.tildacdn.com/tild6662-6562-4963-a463-613534636238/-/resize/192x/-/format/webp/Continental.png" },
    { src: "https://optim.tildacdn.com/tild3238-3335-4532-b037-663463383736/-/resize/192x/-/format/webp/Honda.png" },
    { src: "https://optim.tildacdn.com/tild3166-3461-4235-b862-666337316161/-/resize/192x/-/format/webp/Pirelli.png" },
    { src: "https://optim.tildacdn.com/tild3939-6663-4132-b365-353038336134/-/resize/192x/-/format/webp/SKF.png" },
    { src: "https://optim.tildacdn.com/tild3937-3630-4162-a161-636430366432/-/resize/192x/-/format/webp/ADAYO-Photoroom.png" },
    { src: "https://optim.tildacdn.com/tild3937-3231-4137-a634-666430333233/-/resize/192x/-/format/webp/himile.png" },
    { src: "https://optim.tildacdn.com/tild3662-3436-4937-a437-616564343966/-/resize/192x/-/format/webp/AMETEK.png" },
    { src: "https://optim.tildacdn.com/tild3766-6563-4064-b663-323366373465/-/resize/192x/-/format/webp/Nokian_Tyres.png" },
    { src: "https://optim.tildacdn.com/tild3065-3164-4966-a234-353961643134/-/resize/192x/-/format/webp/Hankook.png" },
    { src: "https://optim.tildacdn.com/tild3538-6263-4836-b932-306662653462/-/resize/192x/-/format/webp/FLEXTRONICS.png" },
    { src: "https://optim.tildacdn.com/tild3235-3834-4566-a464-326664396263/-/resize/192x/-/format/webp/noroot.png" }
  ];

  return (
    <div id="partners" className="relative h-[697px]">
      {/* Фоновое изображение */}
      <div 
        className="t-cover__carrier absolute inset-0"
        style={{
          backgroundImage: 'url(https://optim.tildacdn.com/tild6665-3265-4239-b438-633632373939/-/format/webp/WhatsApp_Image_2025-.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
          height: '697px'
        }}
      />

      {/* Фильтр - серый фон с прозрачностью 50% */}
      <div 
        className="t-cover__filter absolute inset-0"
        style={{
          height: '697px',
          backgroundColor: 'rgba(153, 153, 153, 0.5)' // #999999 с прозрачностью 50%
        }}
      />

      {/* Контент с партнерами */}
      <div className="t-container t-card__container relative z-20 h-full">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="t1074__textwrapper text-center mb-12">
            <div className="text-[30px] text-black font-[Arial] mb-16">
              Партнеры
            </div>
          </div>

          <div className="max-w-[1200px] mx-auto px-5">
            {/* Первый ряд */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
              {partners.slice(0, 6).map((partner, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    className={`t1074__img w-auto object-contain ${
                      partner.src.includes('Honda') ? 'w-[120px] h-[120px]' : 'max-h-[60px]'
                    }`}
                    src={partner.src}
                    alt=""
                  />
                </div>
              ))}
            </div>

            {/* Второй ряд */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
              {partners.slice(6).map((partner, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    className="t1074__img max-h-[60px] w-auto object-contain"
                    src={partner.src}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners; 