import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
import HomePage      from './pages/HomePage';
import AboutPage     from './pages/AboutPage';
import SkillsPage    from './pages/SkillsPage';
import ExperincePage from './pages/ExperincePage';
import EducationPage from './pages/EducationPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage      from './pages/BlogPage';
import ContactPage   from './pages/ContactPage';
import NavbarPage    from './components/NavbarPage';

class App extends Component{
  
  render(){
  return (
    <Router>
        <Container fluid>
          <Row>
                                            {/* NAVBAR SECTION */}            
            <Col md={2} className="menu">
              <NavbarPage />
            </Col>
                            {/* MAIN SECTION INCLUDING ALL THE CONTENTS LIKE HOMEPAGE, ABOUT PAGE, etc */}
            <Col md={10}  >
              <Route path="/"          component = {HomePage} exact/>
              <Route path="/about"     component = {AboutPage} />
              <Route path="/skills"    component = {SkillsPage} />
              <Route path="/experince" component = {ExperincePage} />
              <Route path="/education" component = {EducationPage} />
              <Route path="/portfolio" component = {PortfolioPage} />
              <Route path="/blog" component = {BlogPage} />
              <Route path="/contact" component = {ContactPage} />
            </Col>
          </Row>
    </Container>
  </Router>   
  );
}
}
export default App;
