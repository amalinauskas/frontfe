import React, { useEffect, useState } from "react";
import LogsList from "../components/LogsList/LogsList";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import "./Home.css";
import Notification from "../components/Notification/Notification";

const Logs = () => {
  const [logs, setLogs] = useState();
  const [error, setError] = useState();

  const getData = async () => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/logs`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();

    setLogs(data);
  };

  useEffect(() => {
    getData();
  }, []);
  //
  const removeLog = async (id) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/logs/${id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,

            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        }
      );
      const data = await res.json();

      if (data.err) {
        return setError(data.err);
      }
      getData();
      return setError("Succesfully removed a post");
    } catch (err) {
      return setError(err.message);
    }
  };
  //
  if (!logs) {
    return (
      <>
        <Hero
          title="Your Logs"
          subtitle="“Take care of all your memories. For you cannot relive them” – Bob Dylan"
        />
        <Section>
          <p className="loading">Loading logs...</p>
          <p>{error && <Notification>{error}</Notification>}</p>
        </Section>
      </>
    );
  }

  if (logs) {
    return (
      <>
        <Hero
          title="Your Logs"
          subtitle="“Take care of all your memories. For you cannot relive them” – Bob Dylan"
        />
        <Section>
          <>
            {logs && logs.length === 0 && (
              <div className="noPosts">Only empty spaces can be filled...</div>
            )}
            {logs && logs.length > 0 && (
              <LogsList
                allPosts={logs}
                handleSubmit={(e) => {
                  removeLog(e.currentTarget.value);
                }}
              ></LogsList>
            )}
          </>
        </Section>
      </>
    );
  }
};

export default Logs;
