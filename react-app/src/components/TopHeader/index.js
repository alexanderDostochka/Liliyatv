import React from 'react';
import { Navbar, Grid, Nav, NavItem } from 'react-bootstrap';
import './index.css';

const TopHeader = () => (
    <Navbar className="top-header"> 
      <Grid>
          <Nav className="top-nav" pullLeft>
              <NavItem eventKey={1} href="#" className="nav-item">
                  Акции
              </NavItem>
              <NavItem eventKey={2} href="#" className="nav-item">
                  Помощь
              </NavItem>
              <NavItem eventKey={3} href="#" className="nav-item">
                  Сервисы
              </NavItem>
          </Nav>
          <Nav className="top-nav" pullRight>
              <NavItem eventKey={1} href="#" className="nav-item">
                  Задать вопрос
              </NavItem>
              <NavItem eventKey={2} href="#" className="nav-item">
                  Личный кабинет
              </NavItem>
              <NavItem eventKey={3} href="#" className="nav-item">
                  Оплата
              </NavItem>
          </Nav>
      </Grid>
    </Navbar>
);

export default TopHeader;