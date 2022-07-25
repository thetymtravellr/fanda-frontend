import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      axios.get(`http://localhost:8080/admin/${email}`)
      .then((data) => {
        console.log(data)
        setAdmin(data?.data);
        setAdminLoading(false);
      });
    }
  }, [user]);

  return [admin];
};

export default useAdmin;
