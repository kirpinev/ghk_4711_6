import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import smart from "./assets/smart.png";
import drums from "./assets/drums.png";
import smileArrow from "./assets/smile-arrow.png";
import gift from "./assets/gift.png";
import cashback from "./assets/cashback.png";
import percent from "./assets/percent.png";
import free from "./assets/free.png";
import transfer from "./assets/transfer.png";
import cash from "./assets/cash.png";
import discount from "./assets/discount.png";
import family from "./assets/family.png";
import text from "./assets/text.png";
import gen from "./assets/gen.png";
import code from "./assets/code.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { Gap } from "@alfalab/core-components/gap";
import { Status } from "@alfalab/core-components/status";
import { RedirectTo } from "../RedirectTo.tsx";

interface Product {
  title: string;
  text: string;
  image: string;
  isNew?: boolean;
  isAi?: boolean;
}

const familyProducts: Product[] = [
  {
    title: "Все преимущества доступны близким",
    text: "Делитесь бесплатно до конца года",
    image: family,
  },
];

const products: Product[] = [
  {
    title: "+1 топовая категория кэшбэка",
    text: "5% на самое популярное",
    image: smileArrow,
  },
  {
    title: "+1 попытка крутить барабан суперкэшбэка",
    text: "Выше шанс выиграть до 100% в случайной категории",
    image: drums,
  },
  {
    title: "Секретная подборка партнёров с кэшбэком",
    text: "Доступ к специальным предложениям",
    image: gift,
  },
  {
    title: "Увеличенный лимит кэшбэка",
    text: "7000 ₽ в месяц вместо 5000 ₽ за покупки в категориях",
    image: cashback,
  },
  {
    title: "+1% годовых",
    text: "По накопительному Альфа-Счёту на ежедневный остаток",
    image: percent,
  },
  {
    title: "Бесплатные уведомления",
    text: "Пуши и смс об операциях по всем дебетовым картам",
    image: free,
  },
  {
    title: "Бесплатные переводы",
    text: "По России без ограничений по сумме",
    image: transfer,
  },
  {
    title: "Бесплатное снятие наличных",
    text: "В банкоматах любых банков России",
    image: cash,
  },
  {
    title: "Скидка 20% на комиссию на бирже",
    text: "0,24% за сделки с ценными бумагами и валютой",
    image: discount,
  },
];

const aiProducts: Product[] = [
  {
    title: "Работа с текстом",
    text: "Генерация, анализ и перевод текстов",
    image: text,
    isAi: true,
  },
  {
    title: "Генерация изображений",
    text: "Создавайте уникальные картинки по запросу",
    image: gen,
    isAi: true,
  },
  {
    title: "Написание кода",
    text: "Помощь в разработке и автоматизации",
    image: code,
    isAi: true,
  },
];

export const App = () => {
  const thxShow = LS.getItem(LSKeys.ShowThx, false);

  const submit = () => {
    window.gtag("event", "4711_get_sub", {
      variant_name: "4711_6",
    });

    LS.setItem(LSKeys.ShowThx, true);
  };

  if (thxShow) {
    return <RedirectTo />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <img src={smart} alt="Картинка Альфа-Смарт" />
          <Typography.TitleResponsive
            tag="h1"
            view="medium"
            font="system"
            weight="bold"
          >
            Альфа-Смарт
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" color="secondary">
            Первый месяц бесплатно, <br /> далее — 399 ₽ в месяц
          </Typography.Text>
        </div>

        <Gap size={32} />

        <div className={appSt.products}>
          <Typography.TitleResponsive
            font="system"
            tag="h2"
            weight="bold"
            view="small"
            className={appSt.productsTitle}
          >
            В вашей подписке
          </Typography.TitleResponsive>

          {products.map((product) => (
            <div className={appSt.product} key={product.title}>
              <div>
                <Typography.TitleMobile
                  font="system"
                  view="small"
                  weight="bold"
                  tag="h3"
                >
                  {product.title}
                </Typography.TitleMobile>
                <Gap size={8} />
                <Typography.Text
                  view="primary-small"
                  tag="p"
                  color="secondary"
                  defaultMargins={false}
                >
                  {product.text}
                </Typography.Text>
              </div>
              <img
                src={product.image}
                alt=""
                height={96}
                className={appSt.productIcon}
              />
            </div>
          ))}
        </div>

        <Gap size={32} />

        <div className={appSt.products}>
          <Typography.TitleResponsive
            font="system"
            tag="h2"
            weight="bold"
            view="small"
            className={appSt.productsTitle}
          >
            Семейный доступ
          </Typography.TitleResponsive>

          {familyProducts.map((product) => (
            <div className={appSt.product} key={product.title}>
              <div>
                <Typography.TitleResponsive
                  font="system"
                  view="small"
                  weight="bold"
                  tag="h3"
                >
                  {product.title}
                </Typography.TitleResponsive>
                <Gap size={8} />
                <Typography.Text
                  view="primary-small"
                  tag="p"
                  color="secondary"
                  defaultMargins={false}
                >
                  {product.text}
                </Typography.Text>
              </div>
              <img
                src={product.image}
                alt=""
                height={96}
                className={appSt.productIcon}
              />
            </div>
          ))}
        </div>

        <Gap size={40} />

        <div className={appSt.productsAi}>
          <Status
            view="contrast"
            uppercase={false}
            color="red"
            size={24}
            className={appSt.status}
          >
            Новое
          </Status>
          <Typography.TitleResponsive
            font="system"
            tag="h2"
            weight="bold"
            view="small"
            className={appSt.productsTitle}
          >
            ИИ-помощник
          </Typography.TitleResponsive>
          <Gap size={8} />
          <Typography.Text view="primary-medium" tag="p">
            Поможет быстро разобраться с повседневными задачами
          </Typography.Text>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {aiProducts.map((product) => (
              <div className={appSt.product} key={product.title}>
                <div>
                  <Typography.TitleResponsive
                    font="system"
                    view="small"
                    weight="bold"
                    tag="h3"
                  >
                    {product.title}
                  </Typography.TitleResponsive>
                  <Gap size={8} />
                  <Typography.Text
                    view="primary-small"
                    tag="p"
                    color="secondary"
                    defaultMargins={false}
                  >
                    {product.text}
                  </Typography.Text>
                </div>
                <img
                  src={product.image}
                  alt=""
                  height={64}
                  className={appSt.productIcon}
                />
              </div>
            ))}
          </div>
          <Gap size={8} />
          <Typography.Text
            style={{ textAlign: "center", width: "100%", display: "block" }}
          >
            И мноооогие другие задачи!
          </Typography.Text>
        </div>
      </div>

      <Gap size={72} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          block
          view="primary"
          onClick={submit}
          href="alfabank:///sdui_screen?screenName=InvestmentLongread&fromCurrent=true&endpoint=v1/invest-main-screen-view/investment-longread/50352%3flocation=AM%26campaignCode=GH"
        >
          Подключить
        </ButtonMobile>
      </div>
    </>
  );
};
