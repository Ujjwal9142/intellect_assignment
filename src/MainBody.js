import React, { useEffect, useState } from "react";
import "./MainBody.css";
import DonutChart from "react-donut-chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const MainBody = () => {
  const barData = [
    { name: "Jan", x: 12, y: 23, z: 52 },
    { name: "Feb", x: 22, y: 13, z: 53 },
    { name: "Mar", x: 13, y: 15, z: 32 },
    { name: "Apr", x: 44, y: 35, z: 23 },
    { name: "May", x: 35, y: 45, z: 20 },
    { name: "Jun", x: 62, y: 25, z: 29 },
    { name: "Jul", x: 37, y: 17, z: 61 },
  ];
  return (
    <div className="mainbody__container">
      <div className="mainbody__top">
        <div className="mainbody__topLeft">
          <div className="mainbody__topLeft__part1">
            <h1 className="mainbody__topLeft__start">Welcome</h1>
            <h1 className="mainbody__topLeft__end">Ujjwal Nicolus</h1>
          </div>

          <div className="mainbody__topLeft__part2">
            <h3>ND, IND</h3>
          </div>
        </div>
        <div className="mainbody__topRight">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5yEBjrL52TGc9KwWHRgB2VxFGy99OpxltMQ&usqp=CAU"
            alt="pic"
          />
        </div>
      </div>
      <div className="mainbody__bottom">
        <div className="donut__chart__container">
          <h2>Expenditure Schedule</h2>
          <DonutChart
            className="donut__chart"
            legend={false}
            width={250}
            height={250}
            colors={["#f36b7f", "#fbe0dc", "#81b3a3", "#f8cf61", "#3040c4"]}
            data={[
              {
                label: "Rent",
                value: 20,
              },
              {
                label: "Groceries",
                value: 19,
              },
              {
                label: "Education",
                value: 18,
              },
              {
                label: "Savings",
                value: 20,
              },
              {
                label: "Bills",
                value: 20,
              },
            ]}
            innerRadius={0.6}
            strokeColor="white"
            selectedOffset={0.08}
          />
        </div>
        <div className="bar__chart__container">
          <h2>Net Income</h2>
          <ResponsiveContainer width="90%" height="80%">
            <BarChart width={300} height={300} data={barData}>
              <CartesianGrid />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="x" stackId="a" fill="#f37284" barSize={10} />
              <Bar dataKey="y" stackId="a" fill="#86b6a7" barSize={10} />
              <Bar dataKey="z" stackId="a" fill="#2F3FC4" barSize={10} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
