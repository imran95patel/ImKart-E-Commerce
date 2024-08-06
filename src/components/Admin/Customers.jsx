import { useState } from "react";
import Layout from "./Layout";

const Customers = () => {
  const [customers, setsetCustomersOrders] = useState([
    {
      customerName: "John Doe",
      email: "john.doe@example.com",
      mobile: "1234567890",
      date: "2022-01-01",
    },
    {
      customerName: "Jane Smith",
      email: "jane.smith@example.com",
      mobile: "0987654321",
      date: "2022-02-15",
    },
    {
      customerName: "Alice Johnson",
      email: "alice.johnson@example.com",
      mobile: "9876543210",
      date: "2022-03-30",
    },
    {
      customerName: "Bob Brown",
      email: "bob.brown@example.com",
      mobile: "1234567890",
      date: "2022-04-10",
    },
    {
      customerName: "Emily Davis",
      email: "emily.davis@example.com",
      mobile: "0987654321",
      date: "2022-05-25",
    },
    {
      customerName: "Michael Wilson",
      email: "michael.wilson@example.com",
      mobile: "9876543210",
      date: "2022-06-30",
    },
  ]);
  return (
    <>
      <Layout>
        <div>
          <h1 className="text-xl font-semibold ">Customers</h1>
          <div className="mt-6">
            <table className="w-full ">
              <thead>
                <tr className="bg-green-300 text-left">
                  <th className="p-4">Customers name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {customers.map((item, index) => (
                  <tr
                    key={index}
                    className=""
                    style={{
                      background: (index + 1) % 2 === 0 ? "#f1f5f9" : "White",
                    }}
                  >
                    <td className="capitalize px-4 py-2">
                      <div className="flex gap-3 items-center ">
                        <img
                          src="/Images/Designer.png"
                          alt=""
                          className="w-10 h-10 rounded-full "
                        />
                        <div className="flex flex-col justify-center ">
                          <span className="font-semibold">
                            {item.customerName}
                          </span>
                          <small className="text-gray-500">{item.date}</small>
                        </div>
                      </div>
                    </td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.date}</td>
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

export default Customers;
