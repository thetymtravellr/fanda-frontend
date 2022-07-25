import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      axios.get(`https://quiet-refuge-20911.herokuapp.com/admin/${email}`)
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
