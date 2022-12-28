// function or class
// return UI or null
// component can take properties
// class components may have state
// internal
// props
/*
    * Instal react-router-dom
    * header links
    * Route configurations
*/
import Footer from './Footer';
import Header from './Header';
import ProductList from './products/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Users from './users/Users';
import NotFound from './NotFound';
import NewProduct from './products/NewProduct';
import ProductDetail from './products/ProductDetail';
import Login from './auth/Login';
import AppContext from './context/AppContext';
import { useEffect, useState } from 'react';

const App = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const userState = {
        authenticated, setAuthenticated
    };

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setAuthenticated(true);
        }
    }, []);

    return <AppContext.Provider value={userState}>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/users" element={<Users />} />
                <Route path="/products/new" element={<NewProduct />} />
                <Route path="/products/detail/:id" element={<ProductDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </AppContext.Provider>
};

export default App;
