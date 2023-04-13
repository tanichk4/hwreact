import Task1 from "../task1/Task1.js";
import Task2 from "../task2/Task2.js";
import Task3 from "../task3/Task3.js";
import Task4 from "../task4/Task4.js";
import Task5 from "../task5/Task5.js";

import { Routes, Route, Link, useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }
  return (
    <div>
      <div>
        <h2>Це вирішення 4-го домашнього завдання від Тетяни.</h2>
        <button onClick={handleClick}>Вернутися на попередню сторінку</button>
      </div>

      <div>
        <Link to="/tasks">Tasks</Link>
        <Link to="/tasks/description">Tasks desc</Link>
      </div>

      <Routes>
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/description" element={<TasksDescription />} />
        <Route path="/tasks/description/1" element={<Tasks1Description />} />
        <Route path="/tasks/description/2" element={<Tasks2Description />} />
        <Route path="/tasks/description/3" element={<Tasks3Description />} />
        <Route path="/tasks/description/4" element={<Tasks4Description />} />
        <Route path="/tasks/description/5" element={<Tasks5Description />} />
        <Route path="/tasks/1" element={<Task1Page />} />
        <Route path="/tasks/2" element={<Task2Page />} />
        <Route path="/tasks/3" element={<Task3Page />} />
        <Route path="/tasks/4" element={<Task4Page />} />
        <Route path="/tasks/5" element={<Task5Page />} />
      </Routes>
    </div>
  );
};

const Tasks = () => {
  return (
    <div>
      <h1>Список виконаних завдань:</h1>
      <ul>
        <li>
          <Link to="/tasks/1">Task #1 - Toggler HOC</Link>
        </li>

        <li>
          <Link to="/tasks/2">Task #2 – Fetching Data HOC</Link>
        </li>
        <li>
          <Link to="/tasks/3">Task #3 - render-props</Link>
        </li>
        <li>
          <Link to="/tasks/4">Task #4 - Tooltip</Link>
        </li>
        <li>
          <Link to="/tasks/5">Task #5 - custom hooks</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/tasks/1" element={<Task1Page />} />
        <Route path="/tasks/2" element={<Task2Page />} />
        <Route path="/tasks/3" element={<Task3Page />} />
        <Route path="/tasks/4" element={<Task4Page />} />
        <Route path="/tasks/5" element={<Task5Page />} />
      </Routes>
    </div>
  );
};

const Task1Page = () => {
  return (
    <div>
      <h1>Задание #1</h1>
      <Task1 />
    </div>
  );
};

const Task2Page = () => {
  return (
    <div>
      <h1>Задание #2</h1>
      <Task2 />
    </div>
  );
};

const Task3Page = () => {
  return (
    <div>
      <h1>Задание #3</h1>
      <Task3 />
    </div>
  );
};

const Task4Page = () => {
  return (
    <div>
      <h1>Задание #4</h1>
      <Task4 />
    </div>
  );
};

const Task5Page = () => {
  return (
    <div>
      <h1>Задание #5</h1>
      <Task5 />
    </div>
  );
};

const TasksDescription = () => {
  return (
    <div>
      <h1>Список опису завдань:</h1>
      <ul>
        <li>
          <Link to="/tasks/description/1">Task #1 - Toggler HOC</Link>
        </li>
        <li>
          <Link to="/tasks/description/2">Task #2 – Fetching Data HOC</Link>
        </li>
        <li>
          <Link to="/tasks/description/3">Task #3 - render-props</Link>
        </li>
        <li>
          <Link to="/tasks/description/4">Task #4 - Tooltip</Link>
        </li>
        <li>
          <Link to="/tasks/description/5">Task #5 - custom hooks</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/tasks/description/1" element={<Tasks1Description />} />
        <Route path="/tasks/description/2" element={<Tasks2Description />} />
        <Route path="/tasks/description/3" element={<Tasks3Description />} />
        <Route path="/tasks/description/4" element={<Tasks4Description />} />
        <Route path="/tasks/description/5" element={<Tasks5Description />} />
      </Routes>
    </div>
  );
};

const Tasks1Description = () => {
  return (
    <div>
      <h1>Задача №1. Робота з Toggler HOC</h1>
      <p>Відповідає за функціоналом тоглера (переключення стану true/false)</p>
      <ol>
        <li>
          <p>
            Створити компонент <strong>User</strong> тa <strong>Album</strong>,{" "}
            <strong>withToggler</strong>
          </p>
          <ul>
            <li>
              <strong>User</strong> рендерить дані юзера
            </li>
            <li>
              <strong>Album</strong> - рендерить дані альбома
            </li>
            <li>
              <strong>withToggler</strong> – HOC, який забезпечує функціонал
              тоглера
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>User:</strong>
          </p>
          <ul>
            <li>
              Дані для поста можна скопіювати тут -{" "}
              <a href="https://jsonplaceholder.typicode.com/users/1">
                https://jsonplaceholder.typicode.com/users/1
              </a>
            </li>
            <li>
              Рендерить данні <em>username</em>, <em>email</em>, a також{" "}
              <em>детальну інформацію</em> про юзера: address (city, street,
              suit), phone, company (name)
            </li>
            <li>Кнопку “See details” / “hide details”</li>
            <li>
              При початковому рендері детальна інформація прихована, назва
              кнопки “See details”.
            </li>
            <li>
              При кліці на кнопку в стані “See details” – показуємо детальну
              інформацію і змінюємо назву кнопки на “Hide details”
            </li>
            <li>
              При кліці на кнопку в стані “ Hide details ” – приховуємо детальну
              інформацію і змінюємо назву кнопки на “ See details”
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>Album:</strong>
          </p>
          <ul>
            <li>
              Дані для альбому можна отримати тут -{" "}
              <a href="https://jsonplaceholder.typicode.com/albums/1/photos">
                https://jsonplaceholder.typicode.com/albums/1/photos
              </a>{" "}
              (перший елемент масиву)
            </li>
            <li>Показує – назву альбома і його картинку</li>
            <li>
              Кнопка міняє свій статус (подобається / НЕ подобається) при кліці.
            </li>
          </ul>
        </li>
        <li>
          <p>
            Логіку для toggled винести в HOC – <strong>withToggler</strong>.
          </p>
          <p>Постачає WrappedComponent пропсами:</p>
          <ul>
            <li>
              <em>toggled</em> (стан тоглера true/false)
            </li>
            <li>
              <em>changeToggled</em> (функція для зміни стану тоглера)
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};
const Tasks2Description = () => {
  return (
    <div>
      <h1>Задача №2</h1>
      <p>
        Робота з <strong>Fetching Data HOC</strong>, який відповідає за
        функціонал для асинхронного запиту.
      </p>
      <h4>
        2.1. Створити наступні компоненти: <strong>UsersList</strong>,{" "}
        <strong>User</strong>, <strong>AlbumsList</strong>,{" "}
        <strong>Album</strong>, <strong>withFetchingData</strong>
      </h4>
      <ul>
        <li>
          <strong>UsersList</strong> – список усіх юзерів (тобто список із{" "}
          <strong>User</strong>).
        </li>
        <li>
          <strong>User</strong> – описує 1 юзера (<em>username, email</em>,{" "}
          <em>address, phone, company</em>).
        </li>
        <li>
          <strong>AlbumsList</strong> – список усіх коментарів (Comment).
        </li>
        <li>
          <strong>Album</strong> – описує 1 альбом (<em>title</em>).
        </li>
        <li>
          <strong>withFetchingData</strong> – HOC з функціоналом роботи з
          асинхронним кодом (запит на сервер, отримання даних, стан загрузки,
          наявність помилки).
        </li>
      </ul>
      <h4>
        2.2. Списки (<strong>UsersList</strong> та <strong>AlbumsList</strong>)
      </h4>
      <ul>
        <li>
          логіку по роботі із асинхронним кодом отримують із HOC –{" "}
          <em>withFetchingData</em> (див.п2.3), який снабжає їх відповідними
          пропсами:
          <ul>
            <li>
              <em>data</em> (результат загрузки – масив певних даних),
            </li>
            <li>
              <em>isLoading</em> (стан загрузки),
            </li>
            <li>
              <em>error</em> (текст помилки).
            </li>
          </ul>
        </li>
        <li>
          показують компонент <em>Loader</em>, якщо йде загрузка відповідних
          списків
        </li>
        <li>
          показують компонент <em>Error</em>, якщо наявна помилка при запиті
        </li>
        <li>рендерять відповідні списки – результат запиту</li>
      </ul>
      <p>
        <em>Примітки:</em>
      </p>
      <ul>
        <li>
          в якості компонентів <em>Loader</em> і <em>Error</em> можна
          відобразити &lt;div&gt; з відповідним текстом
        </li>
        <li>
          компоненти <strong>User</strong> та <strong>Album</strong> можна взяти
          iз попереднього завдання
        </li>
      </ul>
      <p>
        2.3. <strong>HOC - withFetchingData</strong>
      </p>
      <ul>
        <li>робить асинхронний запит</li>
        <li>забезпечує WrappedComponent наступними даними:</li>
        <ul>
          <li>
            <em>data</em> (результат загрузки даних), <em>isLoading</em> (стан
            загрузки), <em>error</em> (текст помилки)
          </li>
        </ul>
        <li>
          сcилка для запиту отримується із пропса <em>url</em> компонента,
          створеного за допомогою нашого HOC
        </li>
      </ul>
      <p>
        2.4. <strong>Ендпоінти</strong> для запитів:
      </p>
      <ul>
        <li>
          юзерів -{" "}
          <a href="https://jsonplaceholder.typicode.com/users?_limit=10">
            https://jsonplaceholder.typicode.com/users?_limit=10
          </a>
        </li>
        <li>
          альбоми -{" "}
          <a href="https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10">
            https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10
          </a>
        </li>
      </ul>
    </div>
  );
};

const Tasks3Description = () => {
  return (
    <div>
      <p>
        **Задание #3 - работа с render-props** 1. Создать компоненты Task3 ,
        DataMaker , Posts , Post 2. Компонент Task3 1. Хранит в себе переменную
        с url -
        [https://jsonplaceholder.typicode.com/todos?_limit=10](https://jsonplaceholder.typicode.com/todos?_limit=10)
        2. Внутри себя рендерит div , в котором вложен компонент DataMaker 3. В
        DataMaker передается два пропс - url (со значением переменной url) ,и
        проп renderDataUrl -который в себе использует паттерн render props , а
        именно принимает data и прокидывай их в компонент Posts в виде пропа 3.
        Компонент DataMaker - это функциональный компонент ,который принимает в
        себя параметры url , и renderDataUrl 1. Внутри себя компонент имеет
        состояние posts (в нем буду хранится посты) 2. Внутри себя выполняется
        запрос на сервер - используя prop url (который пришел ранее) 3. Данные
        полученые с сервера кладутся в state постов 4. Функциональный компонент
        возвращает div в котором происходит вызов функции renderDataUrl с
        передачей постов из state 4. Компоненты Posts && Post только отображают
        данные полученые в пропах 1. Posts получает проп с постами и рисует
        список, внутри списка рендерятся компоненты Post 2. В компонент Post
        передавать все значение одним пропом 3. Компонент Post -принимает пропы
        и рисует разметку вида
      </p>
    </div>
  );
};

const Tasks4Description = () => {
  return (
    <div>
      <p>
        **Render Props Patern** **Задание #4:** Создание компонента Tooltip
        (всплывающая подсказка) для карт продуктов с использованием паттерна
        render-props 1. ***Создание обязательных компонентов:*** -
        ProductCardList - список всех карточек - ProductCard – карточка о
        продукте - Tooltip - всплывающая подсказка 1. ***ProductCard :*** -
        изначально показывает *картинку продукта, название и описание*. - при
        наведении на *картинку* продукта (далее - Компонент) – показывает
        Tooltip с дополнительной информацией 1. ***Всплывающая подсказка должна
        отображаться при наведении пользователя на Компонент*** (событие
        MouseEnter) и скрыться, когда пользователь уходит с него (событие
        MouseLeave).  При перемещении мышки в пределах Компонента, за ней
        движется и подсказка (событие MouseMove) 4. ***Tooltip*** 4.1. содержит
        всю логику по отображению подсказки: - отслеживает показывать подсказку
        или нет ( isTooltipShown ) , х/y позиции для отображения подсказки (
        tooltipX / tooltipY ) - функцию-тоглер (показать/спрятать подсказку) -
        функцию для изменения х/y позиций подсказки при движении мышки 4.2 
        рендерит: - Компонент (при помощи render-props) - и саму подсказку
        (отпозиционированный div + контент подсказки, внутри этого div)
        4.3. принимает 2 пропа: а) render, который должен быть функцией. Т.е
        здесь будем реализовывать Render Props. b) content – содержимое
        подсказки (название продукта, цену и рейтинг.) 4.4.  Колбек-функция  для
        пропа render будет: - принимать аргументом функцию-тоглер для подсказки
        + функцию для изменения х/y позиций подсказки, - и возвращать Компонент
        5. ***Линка для получения данных с продуктами***  -
        [https://my.api.mockaroo.com/coffee.json?key=778301b0](https://my.api.mockaroo.com/coffee.json?key=778301b0)
        1. ***Стилизация произвольная***
      </p>
    </div>
  );
};

const Tasks5Description = () => {
  return (
    <div>
      <p>
        **Завдання 5.** Реалізуйте функціонал із завдань 1-2 за допомогою
        кастомних хуків замість HOC-ів
      </p>
    </div>
  );
};

export default Main;
