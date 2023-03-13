import axios from "axios";
import { Route, Routes } from "react-router-dom";

import {
    Board,
    Customer,
    Orders,
    Product,
    Sales,
    Staff,
    Supplier,
    Dashboard,
    Login,
    NewUser,
    UpdateUser,
    NewProduct,
    UpdateProduct
} from "./index";

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
                    <Route path="/dashboard/updateUser" element={<UpdateUser />}/>
                    <Route path="/dashboard/createProduct" element={<NewProduct />} />
                    <Route path="/dashboard/updateProduct" element={<UpdateProduct />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
