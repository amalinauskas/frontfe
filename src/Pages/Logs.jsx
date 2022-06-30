import React, { useEffect, useState } from "react";
import LogsList from "../components/LogsList/LogsList";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import "./Home.css";

const Logs = () => {
  const [data, setData] = useState();

  const getData = async () => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/logs`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const resData = await res.json();

    setData(resData);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return (
      <>
        {" "}
        <Hero
          title="Your Logs"
          subtitle="“Take care of all your memories. For you cannot relive them” – Bob Dylan"
        />
        <Section>
          <p className="loading">Loading logs...</p>
        </Section>
      </>
    );
  }

  if (data) {
    return (
      <>
        <Hero
          title="Your Logs"
          subtitle="“Take care of all your memories. For you cannot relive them” – Bob Dylan"
        />
        <Section>
          {" "}
          <LogsList allPosts={data} />
        </Section>
      </>
    );
  }
};

export default Logs;
