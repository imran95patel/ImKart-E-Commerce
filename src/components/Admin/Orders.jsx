import { useState } from "react";
import Layout from "./Layout";

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      orderId: "12345",
      customerName: "John Doe",
      email: "john.doe@example.com",
      mobile: "1234567890",
      product: "Shirt",
      amount: 10000,
      date: "2022-01-01",
      status: "Pending",
    },
    {
      orderId: "67890",
      customerName: "imran patel",
      email: "imran@example.com",
      mobile: "0987654321",
      product: "Mobile",
      amount: 15000,
      date: "2022-02-01",
      status: "Shipped",
    },
    {
      orderId: "34567",
      customerName: "Alice Johnson",
      email: "alice.johnson@example.com",
      mobile: "9876543210",
      product: "Watch",
      amount: 5000,
      date: "2022-03-01",
      status: "Delivered",
    },

    {
      orderId: "78901",
      customerName: "Bob Smith",
      email: "bob.smith@example.com",
      mobile: "1234567890",
      product: "Bag",
      amount: 20000,
      date: "2022-04-01",
      status: "Cancelled",
    },
    {
      orderId: "45678",
      customerName: "Charlie Brown",
      email: "charlie.brown@example.com",
      mobile: "0987654321",
      product: "Laptop",
      amount: 30000,
      date: "2022-05-01",
      status: "Completed",
    },
    {
      orderId: "45678",
      customerName: "Charlie Brown",
      email: "charlie.brown@example.com",
      mobile: "0987654321",
      product: "Laptop",
      amount: 30000,
      date: "2022-05-01",
      status: "Completed",
    },
    {
      orderId: "45678",
      customerName: "Charlie Brown",
      email: "charlie.brown@example.com",
      mobile: "0987654321",
      product: "Laptop",
      amount: 30000,
      date: "2022-05-01",
      status: "Completed",
    },
    {
      orderId: "45678",
      customerName: "Charlie Brown",
      email: "charlie.brown@example.com",
      mobile: "0987654321",
      product: "Laptop",
      amount: 30000,
      date: "2022-05-01",
      status: "Completed",
    },
    {
      orderId: "45678",
      customerName: "Charlie Brown",
      email: "charlie.brown@example.com",
      mobile: "0987654321",
      product: "Laptop",
      amount: 30000,
      date: "2022-05-01",
      status: "Completed",
    },
    {
      orderId: "45678",
      customerName: "Charlie Brown",
      email: "charlie.brown@example.com",
      mobile: "0987654321",
      product: "Laptop",
      amount: 30000,
      date: "2022-05-01",
      status: "Completed",
    },
    {
      orderId: "45678",
      customerName: "Charlie Brown",
      email: "charlie.brown@example.com",
      mobile: "0987654321",
      product: "Laptop",
      amount: 30000,
      date: "2022-05-01",
      status: "Completed",
    },
    {
      orderId: "45678",
      customerName: "Charlie Brown",
      email: "charlie.brown@example.com",
      mobile: "0987654321",
      product: "Laptop",
      amount: 30000,
      date: "2022-05-01",
      status: "Completed",
    },
    {
      orderId: "45678",
      customerName: "Charlie Brown",
      email: "charlie.brown@example.com",
      mobile: "0987654321",
      product: "Laptop",
      amount: 30000,
      date: "2022-05-01",
      status: "Completed",
    },
    {
      orderId: "45678",
      customerName: "Charlie Brown",
      email: "charlie.brown@example.com",
      mobile: "0987654321",
      product: "Laptop",
      amount: 30000,
      date: "2022-05-01",
      status: "Completed",
    },
    {
      orderId: "45678",
      customerName: "Charlie Brown",
      email: "charlie.brown@example.com",
      mobile: "0987654321",
      product: "Laptop",
      amount: 30000,
      date: "2022-05-01",
      status: "Completed",
    },
    {
      orderId: "45678",
      customerName: "Charlie Brown",
      email: "charlie.brown@example.com",
      mobile: "0987654321",
      product: "Laptop",
      amount: 30000,
      date: "2022-05-01",
      status: "Completed",
    },
    {
      orderId: "45678",
      customerName: "Charlie Brown",
      email: "charlie.brown@example.com",
      mobile: "0987654321",
      product: "Laptop",
      amount: 30000,
      date: "2022-05-01",
      status: "Completed",
    },
  ]);
  return (
    <>
      <Layout>
        <div>
          <h1 className="text-xl font-semibold ">Orders</h1>
          <div className="mt-6">
            <table className="w-full ">
              <thead>
                <tr className="bg-green-300">
                  <th className="p-4">OrderId</th>
                  <th>Customers name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((item, index) => (
                  <tr
                    key={index}
                    className="text-center"
                    style={{
                      background: (index + 1) % 2 === 0 ? "#f1f5f9" : "White",
                    }}
                  >
                    <td className="py-4">{item.orderId}</td>
                    <td className="capitalize">{item.customerName}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td className="capitalize">{item.product}</td>
                    <td> ₹ {item.amount.toLocaleString()}</td>
                    <td>{item.date}</td>
                    <td className="capitalize">
                      <select className="border p-2 border-gray-200">
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="dispatched">Dispatched</option>
                        <option value="returned">Returned</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Orders;
