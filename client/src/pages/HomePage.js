import React, { useEffect } from "react";
import axios from "axios";
import { Layout } from "antd";

import CustomLayout from "./../components/Layout"; // assuming Layout.js is renamed to CustomLayout.js

const HomePage = () => {
  // login user data
  const getUserData = async () => {
    try {
      await axios.post(
        "/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <CustomLayout> {/* Use the imported CustomLayout component here */}
      <Layout>
        <h1>Home Page</h1>
      </Layout>
    </CustomLayout>
  );
};

export default HomePage;
