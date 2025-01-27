import { useState } from "react";

import Card from "../../components/card/Card";

import styles from "./Catalog.module.sass";

const Catalog = () => {
  const [card, setCard] = useState([
    {
      id: "x000",
      menuName: "Новинки",
      menuId: "000",
      products: [
        {
          id: "y000",
          name: "Атласное платье",
          price: "3599",
          news: true,
          categoryId: "aa003",
          menuId: "001",
          desc: "Параметры: Вырез горловины: воротник стойка; Застежка: пуговицы; Силуэт: приталенный; трапеция; Стиль: Вечерний; Повседневный; Длина платья/юбки: миди",
          details:
            "Состав: 100% полиэстер. Страна-производитель: КИТАЙ. Уход: Бережная стирка при максимальной температуре 30ºС, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          images: [
            "https://i.ibb.co/sP5XFgz/1.jpg",
            "https://i.ibb.co/KVq4vT2/2.jpg",
            "https://i.ibb.co/FKGfsCF/3.jpg",
            "https://i.ibb.co/C9pd7LF/4.jpg",
          ],
        },
        {
          id: "y001",
          name: "Джемпер с принтом",
          price: "2999",
          news: true,
          categoryId: "ab003",
          menuId: "002",
          desc: "Уход: Ручная стирка при максимальной температуре 40ºС, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details:
            "Состав: 74% акрил, 22% полиэстер, 4% эластан. Страна-производитель: КИТАЙ.",
          images: [
            "https://i.ibb.co/QbtNkQm/1.jpg",
            "https://i.ibb.co/hYcDW9J/2.jpg",
            "https://i.ibb.co/dDmY9K6/3.jpg",
            "https://i.ibb.co/0BFms72/4.jpg",
          ],
        },
        {
          id: "y002",
          name: "Атласное платье",
          price: "3599",
          news: true,
          categoryId: "aa003",
          menuId: "001",
          desc: "Параметры: Вырез горловины: воротник стойка; Застежка: пуговицы; Силуэт: приталенный; трапеция; Стиль: Вечерний; Повседневный; Длина платья/юбки: миди",
          details:
            "Состав: 100% полиэстер. Страна-производитель: КИТАЙ. Уход: Бережная стирка при максимальной температуре 30ºС, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          images: [
            "https://i.ibb.co/DWtTMm2/1.jpg",
            "https://i.ibb.co/LQtCfgP/2.jpg",
            "https://i.ibb.co/SRk0K9L/3.jpg",
            "https://i.ibb.co/25ndkMq/4.jpg",
          ],
        },
        {
          id: "y003",
          name: "Свитер оверсайз",
          price: "2599",
          news: true,
          categoryId: "ab003",
          menuId: "002",
          desc: "Уход: Ручная стирка при максимальной температуре 40ºС, Не отбеливать, Сушка в расправленном виде, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details:
            "Состав: 57% полиэстер, 23% акрил, 17% полиамид, 3% эластан. Страна-производитель: КИТАЙ",
          images: [
            "https://i.ibb.co/HCkg7hJ/1.jpg",
            "https://i.ibb.co/LZN6VKs/2.jpg",
            "https://i.ibb.co/CWK4rcx/3.jpg",
            "https://i.ibb.co/sq1xC7Y/4.jpg",
          ],
        },
        {
          id: "y004",
          name: "Джемпер с мерцающей нитью",
          price: "1399",
          news: true,
          categoryId: "ab003",
          menuId: "002",
          desc: "Уход: Ручная стирка при максимальной температуре 40ºС, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details:
            "Состав: 73% полиэстер, 20% люрекс, 7% эластан. Страна-производитель: КИТАЙ",
          images: [
            "https://i.ibb.co/R2zZZrN/1.jpg",
            "https://i.ibb.co/tX173Vg/2.jpg",
            "https://i.ibb.co/v1YYqYR/3.jpg",
            "https://i.ibb.co/Bsfbcsw/4.jpg",
          ],
        },
        {
          id: "y005",
          name: "Рубашка оверсайз",
          price: "2599",
          news: true,
          categoryId: "ab002",
          menuId: "002",
          desc: "Уход: Ручная стирка при максимальной температуре 40ºС, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details:
            "Состав: 65% полиэстер, 35% хлопок. Страна-производитель: ВЬЕТНАМ",
          images: [
            "https://i.ibb.co/7rv6xWm/1.jpg",
            "https://i.ibb.co/4t6DcJz/2.jpg",
            "https://i.ibb.co/0nT7QWx/3.jpg",
            "https://i.ibb.co/vhyJDdK/4.jpg",
          ],
        },
        {
          id: "y006",
          name: "Свитшот с объемными рукавами",
          price: "3599",
          news: true,
          categoryId: "ab003",
          menuId: "002",
          desc: "Уход: Ручная стирка в холодной воде, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Сухая чистка запрещена",
          details:
            "Состав: 61% вискоза, 39% полиамид. Страна-производитель: КИТАЙ",
          images: [
            "https://i.ibb.co/YfrRBqL/1.jpg",
            "https://i.ibb.co/vdZhdjv/2.jpg",
            "https://i.ibb.co/HdhhP5V/3.jpg",
            "https://i.ibb.co/KqVZQfc/4.jpg",
          ],
        },
        {
          id: "y007",
          name: "Вязаный джемпер",
          price: "2199",
          news: true,
          categoryId: "ab003",
          menuId: "002",
          desc: "Уход: Ручная стирка в холодной воде, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Сухая чистка запрещена",
          details:
            "Состав: 61% вискоза, 39% полиамид. Страна-производитель: КИТАЙ",
          images: [
            "https://i.ibb.co/ccNbXyL/1.jpg",
            "https://i.ibb.co/dQQJfG4/2.jpg",
            "https://i.ibb.co/vwYPyKD/3.jpg",
            "https://i.ibb.co/xmxgZx6/4.jpg",
          ],
        },
        {
          id: "y008",
          name: "Жакет с перьями",
          price: "5999",
          news: true,
          categoryId: "ab001",
          menuId: "002",
          desc: "Уход: Не стирать, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details:
            "Состав: 92% полиэстер, 8% эластан, 100% перья, 100% полиэстер. Страна-производитель: КИТАЙ",
          images: [
            "https://i.ibb.co/0tHx43N/1.jpg",
            "https://i.ibb.co/L61bcXT/2.jpg",
            "https://i.ibb.co/xm57c0v/3.jpg",
            "https://i.ibb.co/DwRGbGX/4.jpg",
          ],
        },
        {
          id: "y011",
          name: "Двубортный жакет",
          price: "4599",
          news: true,
          categoryId: "ab001",
          menuId: "002",
          desc: "Уход: Не стирать, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details:
            "Состав: 92% полиэстер, 8% эластан, 100% полиэстер. Страна-производитель: ВЬЕТНАМ",
          images: [
            "https://i.ibb.co/c1Cgrty/4224208608-43-1.jpg",
            "https://i.ibb.co/DRpvxYT/4224208608-43-2.jpg",
            "https://i.ibb.co/XVCX17q/4224208608-43-3.jpg",
            "https://i.ibb.co/52f3vDx/4224208608-43-4.jpg",
          ],
        },
      ],
    },
    {
      id: "x003",
      menuName: "Верх",
      menuId: "002",
      products: [
        {
          id: "y009",
          name: "Атласная блузка",
          price: "3599",
          news: false,
          categoryId: "ab002",
          menuId: "002",
          desc: "Уход: Бережная стирка при максимальной температуре 30ºС, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details:
            "Состав: 96% полиэстер, 4% эластаню. Страна-производитель: ВЬЕТНАМ",
          images: [
            "https://i.ibb.co/58WGkvZ/1.jpg",
            "https://i.ibb.co/DYcfCPD/2.jpg",
            "https://i.ibb.co/hdRLT5Y/3.jpg",
            "https://i.ibb.co/gzbBbVm/4.jpg",
          ],
        },
        {
          id: "y005",
          name: "Рубашка оверсайз",
          price: "2599",
          news: true,
          categoryId: "ab002",
          menuId: "002",
          desc: "Уход: Ручная стирка при максимальной температуре 40ºС, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details:
            "Состав: 65% полиэстер, 35% хлопок. Страна-производитель: ВЬЕТНАМ",
          images: [
            "https://i.ibb.co/7rv6xWm/1.jpg",
            "https://i.ibb.co/4t6DcJz/2.jpg",
            "https://i.ibb.co/0nT7QWx/3.jpg",
            "https://i.ibb.co/vhyJDdK/4.jpg",
          ],
        },
        {
          id: "y010",
          name: "Рубашка оверсайз",
          price: "2159",
          news: false,
          categoryId: "ab002",
          menuId: "002",
          desc: "Уход: Бережная стирка при максимальной температуре 30ºС, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details: "Состав: 100% полиэстер. Страна-производитель: КИТАЙ",
          images: [
            "https://i.ibb.co/KXCV78X/1.jpg",
            "https://i.ibb.co/Lk6c9f8/2.jpg",
            "https://i.ibb.co/7yDR3Lv/3.jpg",
            "https://i.ibb.co/zR92vSp/4.jpg",
          ],
        },
        {
          id: "y001",
          name: "Джемпер с принтом",
          price: "2999",
          news: true,
          categoryId: "ab003",
          menuId: "002",
          desc: "Уход: Ручная стирка при максимальной температуре 40ºС, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details:
            "Состав: 74% акрил, 22% полиэстер, 4% эластан. Страна-производитель: КИТАЙ.",
          images: [
            "https://i.ibb.co/QbtNkQm/1.jpg",
            "https://i.ibb.co/hYcDW9J/2.jpg",
            "https://i.ibb.co/dDmY9K6/3.jpg",
            "https://i.ibb.co/0BFms72/4.jpg",
          ],
        },
        {
          id: "y003",
          name: "Свитер оверсайз",
          price: "2599",
          news: true,
          categoryId: "ab003",
          menuId: "002",
          desc: "Уход: Ручная стирка при максимальной температуре 40ºС, Не отбеливать, Сушка в расправленном виде, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details:
            "Состав: 57% полиэстер, 23% акрил, 17% полиамид, 3% эластан. Страна-производитель: КИТАЙ",
          images: [
            "https://i.ibb.co/HCkg7hJ/1.jpg",
            "https://i.ibb.co/LZN6VKs/2.jpg",
            "https://i.ibb.co/CWK4rcx/3.jpg",
            "https://i.ibb.co/sq1xC7Y/4.jpg",
          ],
        },
        {
          id: "y004",
          name: "Джемпер с мерцающей нитью",
          price: "1399",
          news: true,
          categoryId: "ab003",
          menuId: "002",
          desc: "Уход: Ручная стирка при максимальной температуре 40ºС, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details:
            "Состав: 73% полиэстер, 20% люрекс, 7% эластан. Страна-производитель: КИТАЙ",
          images: [
            "https://i.ibb.co/R2zZZrN/1.jpg",
            "https://i.ibb.co/tX173Vg/2.jpg",
            "https://i.ibb.co/v1YYqYR/3.jpg",
            "https://i.ibb.co/Bsfbcsw/4.jpg",
          ],
        },
        {
          id: "y006",
          name: "Свитшот с объемными рукавами",
          price: "3599",
          news: true,
          categoryId: "ab003",
          menuId: "002",
          desc: "Уход: Ручная стирка в холодной воде, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Сухая чистка запрещена",
          details:
            "Состав: 61% вискоза, 39% полиамид. Страна-производитель: КИТАЙ",
          images: [
            "https://i.ibb.co/YfrRBqL/1.jpg",
            "https://i.ibb.co/vdZhdjv/2.jpg",
            "https://i.ibb.co/HdhhP5V/3.jpg",
            "https://i.ibb.co/KqVZQfc/4.jpg",
          ],
        },
        {
          id: "y007",
          name: "Вязаный джемпер",
          price: "2199",
          news: true,
          categoryId: "ab003",
          menuId: "002",
          desc: "Уход: Ручная стирка в холодной воде, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Сухая чистка запрещена",
          details:
            "Состав: 61% вискоза, 39% полиамид. Страна-производитель: КИТАЙ",
          images: [
            "https://i.ibb.co/ccNbXyL/1.jpg",
            "https://i.ibb.co/dQQJfG4/2.jpg",
            "https://i.ibb.co/vwYPyKD/3.jpg",
            "https://i.ibb.co/xmxgZx6/4.jpg",
          ],
        },
        {
          id: "y008",
          name: "Жакет с перьями",
          price: "5999",
          news: true,
          categoryId: "ab001",
          menuId: "002",
          desc: "Уход: Не стирать, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details:
            "Состав: 92% полиэстер, 8% эластан, 100% перья, 100% полиэстер. Страна-производитель: КИТАЙ",
          images: [
            "https://i.ibb.co/0tHx43N/1.jpg",
            "https://i.ibb.co/L61bcXT/2.jpg",
            "https://i.ibb.co/xm57c0v/3.jpg",
            "https://i.ibb.co/DwRGbGX/4.jpg",
          ],
        },
        {
          id: "y011",
          name: "Двубортный жакет",
          price: "4599",
          news: true,
          categoryId: "ab001",
          menuId: "002",
          desc: "Уход: Не стирать, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details:
            "Состав: 92% полиэстер, 8% эластан, 100% полиэстер. Страна-производитель: ВЬЕТНАМ",
          images: [
            "https://i.ibb.co/c1Cgrty/4224208608-43-1.jpg",
            "https://i.ibb.co/DRpvxYT/4224208608-43-2.jpg",
            "https://i.ibb.co/XVCX17q/4224208608-43-3.jpg",
            "https://i.ibb.co/52f3vDx/4224208608-43-4.jpg",
          ],
        },
        {
          id: "y012",
          name: "Однобортный жакет",
          price: "3999",
          news: false,
          categoryId: "ab001",
          menuId: "002",
          desc: "Уход: Не стирать, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details:
            "Состав: 92% полиэстер, 8% эластан, 100% полиэстер. Страна-производитель: ВЬЕТНАМ",
          images: [
            "https://i.ibb.co/d4WmNPH/4224200600-1-3.jpg",
            "https://i.ibb.co/rsdqkW2/4224200600-1-4.jpg",
            "https://i.ibb.co/vVd4R2s/4224200600-1-1.jpg",
            "https://i.ibb.co/WWvv5k3/4224200600-1-2.jpg",
          ],
        },
        {
          id: "y013",
          name: "Футболка из хлопка",
          price: "799",
          news: false,
          categoryId: "ab0005",
          menuId: "002",
          desc: "Уход: Не стирать, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details:
            "Состав: 92% полиэстер, 8% эластан, 100% полиэстер. Страна-производитель: ВЬЕТНАМ",
          images: [
            "https://i.ibb.co/KbHzG32/4224200600-1-1.jpg",
            "https://i.ibb.co/NStmDx3/4224200600-1-2.jpg",
            "https://i.ibb.co/1ddGJ56/4224200600-1-3.jpg",
            "https://i.ibb.co/wrphkCJ/4224200600-1-4.jpg",
          ],
        },
        {
          id: "y014",
          name: "Блузка с завязками",
          price: "2399",
          news: false,
          categoryId: "ab006",
          menuId: "002",
          desc: "Уход: Не стирать, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details:
            "Состав: 92% полиэстер, 8% эластан, 100% полиэстер. Страна-производитель: ВЬЕТНАМ",
          images: [
            "https://i.ibb.co/HFZz6HR/4224200600-1-1.jpg",
            "https://i.ibb.co/Kw0Lmsd/4224200600-1-2.jpg",
            "https://i.ibb.co/jwJC4fF/4224200600-1-3.jpg",
            "https://i.ibb.co/NZTVvRc/4224200600-1-4.jpg",
          ],
        },
      ],
    },
    {
      id: "x002",
      menuName: "Платья",
      menuId: "001",
      products: [
        {
          id: "y015",
          name: "Черно-белое платье",
          price: "999",
          news: false,
          categoryId: "aa001",
          menuId: "001",
          desc: "Уход: Не стирать, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details: "Состав: 51% вискоза, 25% полиэстер, 24% полиамид",
          images: [
            "https://i.ibb.co/gmkL1d2/4224200600-1-1.jpg",
            "https://i.ibb.co/N1y1fhR/4224200600-1-2.jpg",
            "https://i.ibb.co/R4PkH3w/4224200600-1-3.jpg",
            "https://i.ibb.co/M7Rpkr8/4224200600-1-4.jpg",
          ],
        },
        {
          id: "y016",
          name: "Платье миди",
          price: "3599",
          news: false,
          categoryId: "aa002",
          menuId: "001",
          desc: "Уход: Не стирать, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details: "Состав: 51% вискоза, 25% полиэстер, 24% полиамид",
          images: [
            "https://i.ibb.co/YQGSsvW/4224200600-1-1.jpg",
            "https://i.ibb.co/r2sCnzx/4224200600-1-2.jpg",
            "https://i.ibb.co/yptJNmp/4224200600-1-3.jpg",
            "https://i.ibb.co/zHMsxJX/4224200600-1-4.jpg",
          ],
        },
        {
          id: "y017",
          name: "Платье с принтом",
          price: "2599",
          news: false,
          categoryId: "aa004",
          menuId: "001",
          desc: "Уход: Не стирать, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details: "Состав: 51% вискоза, 25% полиэстер, 24% полиамид",
          images: [
            "https://i.ibb.co/jfxmkqm/4224200600-1-2.jpg",
            "https://i.ibb.co/6vwfDtX/4224200600-1-1.jpg",
            "https://i.ibb.co/ctMbhB9/4224200600-1-3.jpg",
            "https://i.ibb.co/km9915v/4224200600-1-4.jpg",
          ],
        },
      ],
    },
    {
      id: "x004",
      menuName: "Юбки",
      menuId: "003",
      products: [
        {
          id: "y018",
          name: "Джинсовая юбка",
          price: "3999",
          news: false,
          categoryId: "ac001",
          menuId: "003",
          desc: "Уход: Не стирать, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details: "Состав: 51% вискоза, 25% полиэстер, 24% полиамид",
          images: [
            "https://i.ibb.co/k0b115T/4224200600-1-1.jpg",
            "https://i.ibb.co/2c9WWhG/4224200600-1-2.jpg",
            "https://i.ibb.co/HB4MjnZ/4224200600-1-3.jpg",
            "https://i.ibb.co/HHCKS1m/4224200600-1-4.jpg",
          ],
        },
        {
          id: "y019",
          name: "Юбка макси",
          price: "3999",
          news: false,
          categoryId: "ac001",
          menuId: "003",
          desc: "Уход: Не стирать, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details: "Состав: 51% вискоза, 25% полиэстер, 24% полиамид",
          images: [
            "https://i.ibb.co/KbZSJWW/4224200600-1-1.jpg",
            "https://i.ibb.co/8YCQJhy/4224200600-1-2.jpg",
            "https://i.ibb.co/sKK6XzC/4224200600-1-3.jpg",
            "https://i.ibb.co/XWrZyK9/4224200600-1-4.jpg",
          ],
        },
        {
          id: "y020",
          name: "Юбка из искусственной кожи",
          price: "3599",
          news: false,
          categoryId: "ac002",
          menuId: "003",
          desc: "Уход: Не стирать, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details: "Состав: 51% вискоза, 25% полиэстер, 24% полиамид",
          images: [
            "https://i.ibb.co/cwyVzDY/4224200600-1-1.jpg",
            "https://i.ibb.co/frz2Lgc/4224200600-1-2.jpg",
            "https://i.ibb.co/dtYG6H8/4224200600-1-3.jpg",
            "https://i.ibb.co/9nvqw8x/4224200600-1-4.jpg",
          ],
        },
        {
          id: "y021",
          name: "Юбка макси",
          price: "3999",
          news: false,
          categoryId: "ac004",
          menuId: "003",
          desc: "Уход: Не стирать, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details: "Состав: 51% вискоза, 25% полиэстер, 24% полиамид",
          images: [
            "https://i.ibb.co/KbZSJWW/4224200600-1-1.jpg",
            "https://i.ibb.co/8YCQJhy/4224200600-1-2.jpg",
            "https://i.ibb.co/sKK6XzC/4224200600-1-3.jpg",
            "https://i.ibb.co/XWrZyK9/4224200600-1-4.jpg",
          ],
        },
        {
          id: "y022",
          name: "Юбка из искусственной кожи",
          price: "3599",
          news: false,
          categoryId: "ac004",
          menuId: "003",
          desc: "Уход: Не стирать, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details: "Состав: 51% вискоза, 25% полиэстер, 24% полиамид",
          images: [
            "https://i.ibb.co/cwyVzDY/4224200600-1-1.jpg",
            "https://i.ibb.co/frz2Lgc/4224200600-1-2.jpg",
            "https://i.ibb.co/dtYG6H8/4224200600-1-3.jpg",
            "https://i.ibb.co/9nvqw8x/4224200600-1-4.jpg",
          ],
        },
        {
          id: "y023",
          name: "Юбка макси",
          price: "2799",
          news: false,
          categoryId: "ac004",
          menuId: "003",
          desc: "Уход: Не стирать, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details: "Состав:  60% полиэстер, 40% вискоза",
          images: [
            "https://i.ibb.co/PGLM0P1/4224200600-1-3.jpg",
            "https://i.ibb.co/vzwYr2M/4224200600-1-1.jpg",
            "https://i.ibb.co/2hzmwYk/4224200600-1-2.jpg",
            "https://i.ibb.co/Tt8x54F/4224200600-1-4.jpg",
          ],
        },
        {
          id: "y024",
          name: "Юбка макси",
          price: "2799",
          news: false,
          categoryId: "ac0005",
          menuId: "003",
          desc: "Уход: Не стирать, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
          details: "Состав:  60% полиэстер, 40% вискоза",
          images: [
            "https://i.ibb.co/PGLM0P1/4224200600-1-3.jpg",
            "https://i.ibb.co/vzwYr2M/4224200600-1-1.jpg",
            "https://i.ibb.co/2hzmwYk/4224200600-1-2.jpg",
            "https://i.ibb.co/Tt8x54F/4224200600-1-4.jpg",
          ],
        },
      ],
    },
    {
      id: "x005",
      menuName: "Верхняя одежда",
      menuId: "004",
      products: [],
    },
    {
      id: "x006",
      menuName: "Мелочи",
      menuId: "005",
      products: [],
    },
    {
      id: "x007",
      menuName: "Костюмы",
      menuId: "006",
      products: [],
    },
  ]);
  return (
    <div className={styles.catalog}>
      {card.map(
        ({ products }) => {
          if (products.length > 1) {
            console.log(products.name);
          } else {
            console.log("sfg");
          }
        }
        // <Card
        //   id={products.id}
        //   cardBox={`cardBox`}
        //   textSize={`cardText`}
        //   priceSize={`cardPrice`}
        //   image={products.images}
        //   text={products.name}
        //   price={`${products.price} ₽`}
        // />
      )}
    </div>
  );
};

export default Catalog;
