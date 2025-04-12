import Image from 'next/image';

const Advantages: React.FC = () => {
  const checkIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSI+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2IDMxQzI0LjI4NDMgMzEgMzEgMjQuMjg0MyAzMSAxNkMzMSA3LjcxNTczIDI0LjI4NDMgMSAxNiAxQzcuNzE1NzMgMSAxIDcuNzE1NzMgMSAxNkMxIDI0LjI4NDMgNy43MTU3MyAzMSAxNiAzMVpNMjQuNzE0IDExLjU1NjZMMjMuMjIzNSAxMC4xMzA5TDEzLjYzOTkgMjAuMTUwMkw5LjIyOTIgMTUuNzM5NUw3Ljc3MDggMTcuMTk4TDEzLjY3MjYgMjMuMDk5OEwyNC43MTQgMTEuNTU2NloiIGZpbGw9ImJsYWNrIiBzdHlsZT0iZmlsbDogcmdiKDMsIDQyLCA5OCk7Ii8+Cjwvc3ZnPg==`;

  return (
    <div className="t1115">
      <div className="t-container t-container_flex t1115__container_vmiddle">
        <div className="t-col t-col_6">
          <div className="t1115__content">
            <div className="t1115__textwrapper t-align_left">
              <h1 className="t1115__title t-title t-title_xs" field="btitle">
                <div style={{ fontSize: '30px' }} data-customstyle="yes">
                  <strong>Наши преимущества</strong>
                </div>
              </h1>
              <div className="t1115__descr t-descr t-descr_xl" field="bdescr">
                <div style={{ fontSize: '18px' }} data-customstyle="yes">
                  Мы стремимся к постоянному развитию и совершенствованию, предлагая качественные, надежные, быстрые и доступные решения в<br />индустрии.
                </div>
              </div>
            </div>
            <ul role="list" className="t1115__features t1115__features_column-2">
              <li className="t1115__feature t1115__feature_icon-left t-item">
                <div className="t1115__feature-icon-wrap">
                  <img className="t1115__feature-img t-img" src={checkIcon} style={{ marginTop: '3.5px' }} alt="" />
                </div>
                <div className="t1115__feature-text-wrap">
                  <h3 className="t1115__feature-title t-name t-name_md">
                    <div style={{ fontSize: '16px' }} data-customstyle="yes">
                      <strong>Инновационные технологии</strong>
                    </div>
                  </h3>
                  <div className="t1115__feature-descr t-descr t-descr_sm">
                    <div style={{ fontSize: '16px' }} data-customstyle="yes">
                      Используем передовые методы проектирования и производства.
                    </div>
                  </div>
                </div>
              </li>
              <li className="t1115__feature t1115__feature_icon-left t-item">
                <div className="t1115__feature-icon-wrap">
                  <img className="t1115__feature-img t-img" src={checkIcon} style={{ marginTop: '3.5px' }} alt="" />
                </div>
                <div className="t1115__feature-text-wrap">
                  <h3 className="t1115__feature-title t-name t-name_md">
                    <div style={{ fontSize: '16px' }} data-customstyle="yes">
                      <strong>Высочайшее качество</strong>
                    </div>
                  </h3>
                  <div className="t1115__feature-descr t-descr t-descr_sm">
                    <div style={{ fontSize: '16px' }} data-customstyle="yes">
                      Многоуровневый контроль качества на каждом этапе позволяет нам предлагать продукцию высочайшего качества.
                    </div>
                  </div>
                </div>
              </li>
              <li className="t1115__feature t1115__feature_icon-left t-item">
                <div className="t1115__feature-icon-wrap">
                  <img className="t1115__feature-img t-img" src={checkIcon} style={{ marginTop: '3.5px' }} alt="" />
                </div>
                <div className="t1115__feature-text-wrap">
                  <h3 className="t1115__feature-title t-name t-name_md">
                    <div style={{ fontSize: '16px' }} data-customstyle="yes">
                      <strong>Гибкий подход</strong>
                    </div>
                  </h3>
                  <div className="t1115__feature-descr t-descr t-descr_sm">
                    <div style={{ fontSize: '16px' }} data-customstyle="yes">
                      Индивидуальная работа с клиентами и кастомизация продукции.
                    </div>
                  </div>
                </div>
              </li>
              <li className="t1115__feature t1115__feature_icon-left t-item">
                <div className="t1115__feature-icon-wrap">
                  <img className="t1115__feature-img t-img" src={checkIcon} style={{ marginTop: '3.5px' }} alt="" />
                </div>
                <div className="t1115__feature-text-wrap">
                  <h3 className="t1115__feature-title t-name t-name_md">
                    <strong>Глобальное присутствие</strong>
                  </h3>
                  <div className="t1115__feature-descr t-descr t-descr_sm">
                    <div style={{ fontSize: '16px' }} data-customstyle="yes">
                      Более 1000 парнеров по всему миру.
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="t-col t-col_6 t1115__col-bottom">
          <Image 
            className="t1115__image t-img"
            src="https://static.tildacdn.com/tild3533-3636-4462-a661-343966636538/WhatsApp_Image_2025-.jpeg"
            alt=""
            width={560}
            height={293}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Advantages; 