import { Component } from "react";

import {
  Routes,
  Route,
  Navigate,
  NavLink,
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

const Home = () => {
  return <div>Home page</div>;
};

const Learn = () => {
  return (
    <div>
      <h1>Learn page</h1>

      <Link to="/learn/courses">Courses</Link>
      <Link to="/learn/examples">Examples</Link>

      <Outlet />
    </div>
  );
};

const News = () => {
  return <div>News page</div>;
};

const Courses = () => {
  const coursesList = ["react", "angular", "vue"];

  const randomCourse =
    coursesList[Math.floor(Math.random() * coursesList.length)];
  return (
    <div>
      <h1>Courses</h1>
      <div>More test</div>

      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "green" : "red",
          };
        }}
        to={`/learn/courses/${randomCourse}`}
      >
        {randomCourse}
      </NavLink>

      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "green" : "red",
          };
        }}
        to={`/learn/courses/test`}
      >
        test
      </NavLink>

      <Outlet />
    </div>
  );
};

const CoursesId = () => {
  const { coursesId } = useParams();

  const navigate = useNavigate();

  return (
    <div>
      <div>CourseId : {coursesId}</div>
      <button onClick={() => navigate("/price", { state: coursesId })}>
        Price
      </button>

      <Link to="/price" state={coursesId}>
        Test link
      </Link>
    </div>
  );
};

const Price = () => {
  const location = useLocation();

  return <div>Price is : {location.state}</div>;
};

const Examples = () => {
  return <div>Examples</div>;
};

export default class RouterApp extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/learn">Learn</Link>
          </div>
          <div>
            <Link to="/news">News</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="learn" element={<Learn />}>
            <Route path="courses" element={<Courses />}>
              <Route path=":coursesId" element={<CoursesId />} />
            </Route>
            <Route path="examples" element={<Examples />} />
          </Route>
          <Route path="/price" element={<Price />} />
        </Routes>
      </div>
    );
  }
}
