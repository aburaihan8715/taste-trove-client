import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import LoadingSpinner from "../common/LoadingSpinner/LoadingSpinner";

const Blogs = () => {
  const [data, setData] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);
  console.log(data);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false)
      });
  }, []);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="container mx-auto">
      <h2>length:{data?.length}</h2>
      blogs
    </div>
  );
};

export default Blogs;
