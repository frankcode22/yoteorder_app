import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

// Pass URL
const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  let history = useNavigate();
  

  const handleGoogle = async (response) => {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ credential: response.credential }),
    })
      .then((res) => {
        setLoading(false);

        return res.json();
      })
      .then((data) => {
        if (data?.user) {
          localStorage.setItem("user", JSON.stringify(data?.user));

    
           //console.log('THIS IS THE USEFETCH DATA',data?.user)

          // let user_data=JSON.stringify(data?.user)

           if(data?.user.role==='User'){

            localStorage.setItem('accessToken', data?.user.token);

            history('/home-user');
             // window.location.reload(false);

             window.location.reload();

           }

           else if(data?.user.role==='Admin'){

            localStorage.setItem('accessToken', data?.user.token);

            history('/home_admin');
             // window.location.reload(false);

             window.location.reload();

           }

           else if(data?.user.role==='Vendor'){

            localStorage.setItem('accessToken', data?.user.token);

            history('/home_retailer');
             // window.location.reload(false);

             window.location.reload();

           }


           else if(data?.user.role==='Supplier'){

            localStorage.setItem('accessToken', data?.user.token);

            history('/home_retailer');
             // window.location.reload(false);

             window.location.reload();

           }

           else{
            history("/create_account");
            window.location.reload();
           }


           
           
              

             
         
    
          
          // window.location.reload();
         
        }

        throw new Error(data?.message || data);
      })
      .catch((error) => {
        setError(error?.message);
      });
  };
  return { loading, error, handleGoogle };
};

export default useFetch;
