import { useState } from "react";
import Layout from "./Layout";

const Payments = () => {
  const [payments, setPayments] = useState([
    {
      customerName: "John Doe",
      email: "john.doe@example.com",
      mobile: "1234567890",
      amount: 5000,
      date: "2022-01-01",
    },
    {
      customerName: "Jane Doe",
      email: "jane.doe@example.com",
      mobile: "9876543210",
      amount: 10000,
      date: "2022-02-15",
    },
    {
      customerName: "Mary Smith",
      email: "mary.smith@example.com",
      mobile: "0987654321",
      amount: 7000,
      date: "2022-03-05",
    },
    {
      customerName: "David Johnson",
      email: "david.johnson@example.com",
      mobile: "3456789012",
      amount: 8000,
      date: "2022-04-20",
    },
  ]);
  return (
    <>
      <Layout>
        <div>
          <h1 className="text-xl font-semibold ">Payments</h1>
          <div className="mt-6">
            <table className="w-full ">
              <thead>
                <tr className="bg-green-300 text-left">
                  <th className="p-4">Customers name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {payments.map((item, index) => (
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
                    <td>₹ {item.amount.toLocaleString()}</td>

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

export default Payments;
