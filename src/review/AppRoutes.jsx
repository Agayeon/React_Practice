import React from "react";
import KeyList from "review/KeyList";
import ParentComponent1 from "review/ParentComponent1";
import AppCSR from "review/AppCSR";
import TodoListUsingReducerApp from "project2/TodoListUsingReducerApp";
import VarCompare from "components3/varCompare";
import CounterReducerTest from "components3/CounterReducerTest";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import NotFoundPage from "review/NotFoundPage";
import EmpDetailPage from "context/emp/EmpDetailpage";
import EmpInsertPage from "context/emp/EmpInsertPage";
import EmpListPage from "context/emp/EmpListPage";
import Counter from "componenets2/Counter";
import HomePage from "review/HomePage";
import CounterApp from "review/CounterApp";
import EmpLayout from "context/emp/EmpLayout";
import AppDiary from "project3/components/AppDiary.jsx";
import APITest from "context/emp/APITest";

function AppRoutes(props) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/parent">parent이동</Link>
        </li>
        <li>
          <Link to="/todo">todo이동</Link>
        </li>
        <li>
          <Link to="/mydiary">diary 이동</Link>
        </li>
      </ul>

      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              keylist
            </Nav.Link>
            <Nav.Link as={Link} to="/parent">
              parent이동
            </Nav.Link>
            <Nav.Link as={Link} to="/todo">
              todo이동
            </Nav.Link>
            <Nav.Link as={Link} to="/key">
              key사용
            </Nav.Link>
            <Nav.Link as={Link} to="/counter1">
              counter사용1
            </Nav.Link>
            <Nav.Link as={Link} to="/emp">
              EMP이동
            </Nav.Link>
            <Nav.Link as={Link} to="/emplist">
              emp목록
            </Nav.Link>
            <Nav.Link as={Link} to="/empdetail/100">
              emp상세
            </Nav.Link>
            <Nav.Link as={Link} to="/empinsert">
              직원입력
            </Nav.Link>
            <Nav.Link as={Link} to="/mydiary">
              diary
            </Nav.Link>
            <Nav.Link as={Link} to="/api">
              API
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/key" element={<KeyList />} />
        <Route path="/counter1" element={<CounterApp />} />
        <Route path="/counter2" element={<Counter />} />
        <Route path="/parent" element={<ParentComponent1 />} />
        <Route path="/csr" element={<AppCSR />} />
        <Route path="/todo" element={<TodoListUsingReducerApp />} />
        <Route path="/compare" element={<VarCompare />} />
        <Route path="/reducer" element={<CounterReducerTest />} />

        <Route path="/mydiary/*" element={<AppDiary />} />

        <Route path="/emp" element={<EmpLayout />}>
          <Route path="/emplist" element={<EmpListPage />} />
          <Route path="/empdetail/:empid" element={<EmpDetailPage />} />
          <Route path="/empinsert" element={<EmpInsertPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />

        <Route path="/api" element={<APITest />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
