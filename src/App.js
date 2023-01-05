import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Content } from './components/content';
import Container from 'react-bootstrap/Container';
import { Import } from './components/import';
import { Edit } from './components/edit';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

class MovieApp extends React.Component {
  render() {
    return (
      <Router>
        <div className="HomePage">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/import">Import</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path='/' element={<Content></Content>}></Route>
            <Route path='/import' element={<Import></Import>}></Route>
            <Route path='/edit/:id' element={<Edit></Edit>}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}
export default MovieApp;