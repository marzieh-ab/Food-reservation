import React, { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/images/arrowright.png";
import makeen from "../assets/images/makeen2.png";

function Login() {
  const [phone, setPhone] = useState<string>("");
  const [flag, setFlag] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  

  const handelInputPhone=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setPhone(e.target.value)
    setFlag(true)
    setError(false)
  }

  const handelClick = () => {
    console.log("ok");
    if (phone == "") {
      setFlag(false);
    } else {
      if (/^(09)[0-9]{9}$/.test(phone)) {
        navigate("/verificationcode");
      } else {
        setError(true);
      }
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
      <Box
        sx={{
          width: "100%",
          marginTop: "25px",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        <img src={makeen} alt="" style={{ width: "50%" }} />
      </Box>
      <Box>
        <Typography
          sx={{
            color: "#000",
            fontWeight: "700",
            fontSize: "20px",

            fontFamily: "IRANSans",
            padding: "15px",
          }}
        >
          ورود
        </Typography>
      </Box>
      {!error && (
        <Box
          sx={{
            margin: "15px 12px 0 0 ",
          }}
        >
          <Typography
            sx={{
              color: "rgba(0,0,0,,0.1)",
              fontWeight: "500",
              fontSize: "14px",
              fontFamily: "IRANSans",

              margin: "10px",
            }}
          >
            لطفا شماره موبایل خود را وارد کنید
          </Typography>

          {flag ? (
            <input
              onChange={handelInputPhone}
              value={phone}
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
                onChange={handelInputPhone}
                value={phone}
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
      )}

      <Box
        sx={{
          margin: "15px 12px 0 0 ",
        }}
      >
       

        {error && (
          <>
            <input
              onChange={handelInputPhone}
              value={phone}
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
              شماره موبایل معتبر نیست
            </p>
          </>
        )}
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
}

export default Login;
