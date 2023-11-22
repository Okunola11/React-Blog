import React from "react";
import Feed from "./Feed";
import { useContext } from "react";
import DataContexts from "./Context/DataContext";

const Home = () => {
  const { results, fetchError, isLoading } = useContext(DataContexts);

  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading Posts...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (results.length ? (
          <Feed posts={results} />
        ) : (
          <p className="statusMsg">No posts to display</p>
        ))}

      {/*  {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: "2rem" }}>No posts to display</p>
      )} */}
    </main>
  );
};

export default Home;
