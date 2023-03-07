import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import NewUser from "./components/newUser/newUser";
import { Board, Customer, Orders, Product, Sales, Staff, Supplier, Dashboard } from './index'

axios.defaults.baseURL = "http://localhost:3000";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="/dashboard/supplier" element={<Supplier />} />
                    <Route path="/dashboard/customer" element={<Customer />} />
                    <Route path="/dashboard/admin" element={<Staff />} />
                    <Route path="/dashboard/products" element={<Product />} />
                    <Route path="/dashboard/orders" element={<Orders />} />
                    <Route path="/dashboard/board" element={<Board />} />
                    <Route path="/dashboard/sales" element={<Sales />} />
                    <Route path="/dashboard/createUser" element={<NewUser />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
