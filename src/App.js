import './App.css';
import 'antd/dist/antd.min.css';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { Button, Carousel } from 'antd';
const Questoins = {
  0: {
    useEffect: () => {
      let img = document.getElementById('img')

      function mousemove(e) {
        let x = e.pageX - this.offsetLeft;
        let y = e.pageY - this.offsetTop;
        // let bgWebKit = `circle(100px at ${x}px ${y}px)`;
        let bgWebKit = `circle(100px at ${x}px ${y}px)`;
        img.style.clipPath = bgWebKit
      }
      document.body.addEventListener('mousemove', mousemove)
      return () => { document.body.removeEventListener('mousemove', mousemove) }
    },
    quest: "Какое домашнее животное подходит вам?",
    decorator: <>
      <div id='img' className='image' />
      <div className='bgimage' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Я хочу узнать!": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      }
    }
  },
  // 1: {
  //   useEffect: () => { },
  //   quest: "Питомец должен быть большим, средним или маленьким?",
  //   decorator: null,
  //   mainContainerProps: { className: "App" },
  //   questContainerProps: { className: "App-header" },
  //   answersContainerProps: { className: "default-answerContainer" },
  //   answers: {
  //     "Большой": {
  //       next: "2",
  //       props: { className: "colorful-4 defaultAnswer" }
  //     },
  //     "Средний": {
  //       next: "0",
  //       props: { className: "colorful-4 defaultAnswer middle" }
  //     },
  //     "Маленький": {
  //       next: "0",
  //       props: { className: "colorful-4 defaultAnswer small" }
  //     }
  //   }
  // },
  1: {
    useEffect: () => { },
    quest: "Вы живёте в большой квартире?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "2",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Нет": {
        next: "3",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  2: {
    useEffect: () => { },
    quest: "У вас много свободного времени?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "6",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Нет": {
        next: "7",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  3: {
    useEffect: () => { },
    quest: "Любите экзотических животных?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "5",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Нет": {
        next: "4",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  4: {
    useEffect: () => { },
    quest: "Вам нравятся грызуны?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "8",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Нет": {
        next: "9",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  5: {
    useEffect: () => { },
    quest: "Есть возможность много гулять?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "51",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Нет": {
        next: "10",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  6: {
    useEffect: () => { },
    quest: "Любите экзотических животных?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "11",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Нет": {
        next: "12",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  7: {
    useEffect: () => { },
    quest: "Вы часто ездите в командировки?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "27",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Нет": {
        next: "18",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  8: {
    useEffect: () => { },
    quest: "У вас есть дети?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "13",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Нет": {
        next: "14",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  9: {
    useEffect: () => { },
    quest: "Вы спокойно относитесь к шуму?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "15",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Нет": {
        next: "23",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  10: {
    useEffect: () => { },
    quest: "Любите яркие цвета?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "53",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Нет": {
        next: "52",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  11: {
    useEffect: () => { },
    quest: "Вы планируете участвовать в выставках?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "54",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Нет": {
        next: "16",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  12: {
    useEffect: () => { },
    quest: "Какой вид шерсти вы предпочитаете?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Без": {
        next: "55",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Короткий": {
        next: "56",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Длинный": {
        next: "17",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  13: {
    useEffect: () => { },
    quest: "Вы хотели бы активное животное?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "20",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Нет": {
        next: "49",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  14: {
    useEffect: () => { },
    quest: "В какое время вы работаете?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Днём": {
        next: "21",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Ночью": {
        next: "50",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  15: {
    useEffect: () => { },
    quest: "Вы хотите собеседника?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "22",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Нет": {
        next: "32",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  16: {
    useEffect: () => { },
    quest: "У вас большая семья?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "25",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Нет": {
        next: "24",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  17: {
    useEffect: () => { },
    quest: "Вам нравятся крупные животные?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "42",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Нет": {
        next: "57",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  18: {
    useEffect: () => { },
    quest: "У вас есть дети?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "46",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Нет": {
        next: "19",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  19: {
    useEffect: () => { },
    quest: "Вам нравятся декоративные собаки?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "26",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Нет": {
        next: "45",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  20: {
    useEffect: () => { },
    quest: "Вы готовы часто делать уборку?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "28",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Нет": {
        next: "29",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  21: {
    useEffect: () => { },
    quest: "Есть ли у вас склонности к аллергии?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "30",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Нет": {
        next: "31",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  22: {
    useEffect: () => { },
    quest: "Потратить много денег на животное?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "33",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Нет": {
        next: "34",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  23: {
    useEffect: () => { },
    quest: "Отрицательно относитесь к спячке?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Нет": {
        next: "35",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Да": {
        next: "36",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  24: {
    useEffect: () => { },
    quest: "Должно обеспечить вам защиту?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "37",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Нет": {
        next: "38",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  25: {
    useEffect: () => { },
    quest: "Чего вы хотите?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Преданность": {
        next: "39",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Ласка": {
        next: "40",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Внимание": {
        next: "41",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  26: {
    useEffect: () => { },
    quest: "Аттрибут стиля?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "43",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Нет": {
        next: "44",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  27: {
    useEffect: () => { },
    quest: "Куда отдадите питомца?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Гостиница": {
        next: "47",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Родственники": {
        next: "48",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  28: {
    useEffect: () => { },
    quest: "Вам подходит мышь",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  29: {
    useEffect: () => { },
    quest: "Вам подходит Песчанка",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  30: {
    useEffect: () => { },
    quest: "Вам подходит Шиншилла",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  31: {
    useEffect: () => { },
    quest: "Вам подходит Кролик",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  32: {
    useEffect: () => { },
    quest: "Вам подходит Канарейка",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  33: {
    useEffect: () => { },
    quest: "Вам подходит Попугай жако",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  34: {
    useEffect: () => { },
    quest: "Вам подходит Волнистый попугай",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  35: {
    useEffect: () => { },
    quest: "Вам подходит Черепаха",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  36: {
    useEffect: () => { },
    quest: "Вам подходит Рыбка",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  37: {
    useEffect: () => { },
    quest: "Вам подходит Овчарка",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  38: {
    useEffect: () => { },
    quest: "Вам подходит Болонка французская",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  39: {
    useEffect: () => { },
    quest: "Вам подходит Собака хаски",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  40: {
    useEffect: () => { },
    quest: "Вам подходит Персидская кошка",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  41: {
    useEffect: () => { },
    quest: "Вам подходит Сибирская кошка",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  42: {
    useEffect: () => { },
    quest: "Вам подходит Мейн кун",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  43: {
    useEffect: () => { },
    quest: "Вам подходит Той терьер",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  44: {
    useEffect: () => { },
    quest: "Вам подходит Шпиц",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  45: {
    useEffect: () => { },
    quest: "Вам подходит Колли",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  46: {
    useEffect: () => { },
    quest: "Вам подходит Ньюфаундленд",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  47: {
    useEffect: () => { },
    quest: "Вам подходит Такса",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  48: {
    useEffect: () => { },
    quest: "Вам подходит Морская свинка",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  49: {
    useEffect: () => { },
    quest: "Вам подходит Крыса",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  50: {
    useEffect: () => { },
    quest: "Вам подходит Хомяк",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  51: {
    useEffect: () => { },
    quest: "Вам подходит Хорек",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  52: {
    useEffect: () => { },
    quest: "Вам подходит Сцинк",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  53: {
    useEffect: () => { },
    quest: "Вам подходит Хамелеон",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  54: {
    useEffect: () => { },
    quest: "Вам подходит Скоттиш-Фолд",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  55: {
    useEffect: () => { },
    quest: "Вам подходит Сфинкс",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  56: {
    useEffect: () => { },
    quest: "Вам подходит Абиссинская кошка",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  57: {
    useEffect: () => { },
    quest: "Вам подходит Гималайская кошка",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "(заново)": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
  'end': {
    useEffect: () => { },
    quest: "Мы рады что смогли вам помочь!",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "(заново)": {
      next: "1",
      props: { className: "colorful-4 defaultAnswer" }
    },}
  }
}
function App() {
  const CarouselRef = useRef(null)
  const [currentQuest, setCurrentQuest] = useState(Questoins.first)
  const goTo = (next) => {
    if (next == 'end')
      CarouselRef.current.goTo(Object.keys(Questoins).length-1, false)
    CarouselRef.current.goTo(next, false)
  }
  return (
    <Carousel
      accessibility={false}
      arrows={false}
      dots={false}
      effect='fade'
      ref={CarouselRef}>
      {/* <Quest {...currentQuest} goTo={goTo} /> */}
      {
        Object.keys(Questoins).map((value) => {
          let answer = Questoins[value]
          return <Quest key={value}{...answer} goTo={goTo} />
          // return <a {...answer.props} onClick={props.goTo(answer.next)}>value</a>
        }
        )
      }
    </Carousel>
  );
}
function Quest(props) {
  useEffect(props.useEffect)
  return (
    <div {...props.mainContainerProps}>
      {props.decorator ?
        props.decorator
        : null}
      <div {...props.questContainerProps}>
        <p style={{ zIndex: 100 }}>{props.quest}</p>
        <div {...props.answersContainerProps}>
          {
            Object.keys(props.answers).map((value) => {
              let answer = props.answers[value]
              return <a key={value} {...answer.props} onClick={() => props.goTo(answer.next)}>{value}</a>
            }
            )
          }
        </div>
      </div>
    </div>
  )


}
export default App;
