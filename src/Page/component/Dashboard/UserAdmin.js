const { useState, useEffect } = require("react");

const UserAdmin = (user) => {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const email = user?.email;
    console.log(email);
    if (email) {
      fetch(`https://secure-beach-51021.herokuapp.com/admin/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
        });
    }
  }, [user]);
  return [admin];
};
export default UserAdmin;
