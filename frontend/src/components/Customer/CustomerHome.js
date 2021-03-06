import React, {useState, useEffect} from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Outlet} from 'react-router-dom';
import axios from "axios";

export default function CustomerHome() {

    axios
        .get('http://localhost:8080/test/customer/viewRestaurants')
        .then(response => {
            localStorage.setItem('restaurants', JSON.stringify(response.data));
        });
    axios
        .get('http://localhost:8080/test/customer/viewMenu')
        .then(response => {
            localStorage.setItem('allFoods', JSON.stringify(response.data));
        })

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/customer/">Customer</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/customer/viewRestaurants">View Restaurants</Nav.Link>
                        <Nav.Link href="/customer/viewMenu">View Menu</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
}