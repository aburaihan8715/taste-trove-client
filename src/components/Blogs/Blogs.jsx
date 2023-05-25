import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h2>length:{data?.length}</h2>
      blogs
    </div>
  );
};

export default Blogs;
