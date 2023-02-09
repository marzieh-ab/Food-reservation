import React, { useState, useEffect } from "react";
import { Box, Typography, TextField } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import arrow2 from "../assets/images/arrow-left.png";
import arrow from "../assets/images/arrowright.png";

const Sms = () => {
  const [code, setCode] = useState<string>("");
  const [flag, setFlag] = useState<boolean>(true);
  const [timer, setTimer] = useState<number>(1 * 60);
  const [counter, setCounter] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
       setTimer((timer) => (timer >= 1 ? timer - 1 : 0));
    }, 1000);

    
    if(timer==0){
      setTimer(1*60)
    }

    return () => {
      clearInterval(interval);
    };

  }, [timer]);

  const navigate = useNavigate();

  const getTimer = (timee: number) => {
    return timee.toString().padStart(2, "0");
  };

  const minute = getTimer(Math.floor(timer / 60));
  const second = getTimer(timer - Number(minute) * 60);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handelClick = () => {
    console.log("ok");
    if (!code) {
      setFlag(false);
    }
    else{
      navigate('/information')
    }
  };

  return (
    <Box
      sx={{
        width: "360px",
        height: "666px",
        backgroundColor: "#F9F9F9",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          width: "17px",
          height: "17px",
          padding: "10px",
          textAlign: "center",
        }}
      >
            <img src={arrow} alt=""  onClick={()=>navigate(-1)}/>
      </Box>

      <Box sx={{ marginTop: "100px" }}>
        <Typography
          sx={{
            color: "#000",
            fontWeight: "600",
            fontSize: "20px",

            fontFamily: "IRANSans",
            padding: "20px",
          }}
        >
          کدتایید را وارد کنید
        </Typography>
      </Box>

      <Box
        sx={{
          margin: "0 21px 0 0 ",
        }}
      >
        <Typography
          sx={{
            color: "#4B4B4B",
            fontWeight: "500",
            fontSize: "13px",

            fontFamily: "IRANSansNum",
          }}
        >
          کدتایید برای 09178122989ارسال گردید
        </Typography>
      </Box>
      <Box
        sx={{
          margin: "15px 12px 0 0 ",
        }}
      >
        {flag ? (
          <input
            onChange={handleChange}
            value={code}
            type="text"
            style={{
              width: "327px",
              height: "48px",
              background: "#F0F0F0",
              boxShadow: " 0px 2px 0px rgba(0, 133, 255, 0.25)",
              borderRadius: "6px",
              border: "none",
              outline: "none",
              fontFamily: "IRANSansNum",
            }}
          />
        ) : (
          <>
            <input
              onChange={handleChange}
              value={code}
              type="text"
              style={{
                width: "327px",
                height: "48px",
                background: "#F0F0F0",
                boxShadow: " 0px 2px 0px rgba(255,0,0,0.3)",
                borderRadius: "6px",
                border: "none",
                outline: "none",
              }}
            />
            <p
              style={{
                color: "red",
                fontWeight: "500",
                fontSize: "14px",
                fontFamily: "IRANSans",
                margin: " 5px 10px",
              }}
            >
              لطفا این قسمت را خالی نگذارید
            </p>
          </>
        )}
      </Box>

    

         <Box sx={{ margin: "10px 18px 0 0 " }}>
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{
              color: "#0084FF",
              fontWeight: "500",
              fontSize: "13px",
              fontFamily: "IRANSansNum",
              marginRight: "10px",
            }}
          >
            {minute}:{second}
          </Typography>
          <Typography
            sx={{
              color: "#000",
              fontWeight: "500",
              fontSize: "13px",
              fontFamily: "IRANSansNum",
              marginRight: "10px",
            }}
          >
            مانده تا دریافت مجددکد
          </Typography>
        </Box>
      </Box>
      
     

      

      <Box
        sx={{
          width: "360px",
          margin: "40px 12px 0 0 ",
        }}
      >
        <button
          style={{
            width: "327px",
            height: "48px",
            color: "#fff",
            backgroundColor: "#FFA800",
            fontFamily: "IRANSans",
            margin: "auto",
            borderRadius: "6px",
            outline: "none",
            border: "none",
          }}
          onClick={handelClick}
        >
          ورود
        </button>
      </Box>
    </Box>
  );
};

export default Sms;
