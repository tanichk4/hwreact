const buttons = [
  {
    label: "Кнопка 1",
    imageSrc: "/view_1.svg",
    onClickFunction: (data) => {
      // const [isCardClicked, setIsCardClicked] = useState(false);
      console.log(`Нажата кнопка 1 ${data}`);
      // <HideDigits />
    },
  },
  {
    label: "Кнопка 2",
    imageSrc: "/businessman-showing-stats-graphic_1.svg",
    onClickFunction: () => {
      console.log("Нажата кнопка 2");
    },
  },
  {
    label: "Кнопка 3",
    imageSrc: "/flip_2.svg",
    onClickFunction: () => {
      console.log("Нажата кнопка 3");
    },
  },
];

export default buttons;
