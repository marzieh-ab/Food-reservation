import React, { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/images/arrowright.png";
import makeen from "../assets/images/makeen2.png";

function FurtherInformation() {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [nationalCode, setNationalCode] = useState<string>("");
  const [flagphone, setFlagphone] = useState<boolean>(true);
  const [flagname, setFlagname] = useState<boolean>(true);
  const [flagcode, setFlagcode] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [errorphone, setErrorphone] = useState<boolean>(false);
  const [errorcode, setErrorcode] = useState<boolean>(false);
  const [isAccepted, setIsAccepted] = useState<boolean>(false);

  console.log(isAccepted, "error");

  const navigate = useNavigate();

  const handelInputPhone=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setPhone(e.target.value)
    setFlagphone(true)
    setErrorphone(false)
  }


  const handelInputNationalCode=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setNationalCode(e.target.value)
    setFlagcode(true)
    setErrorcode(false)
  }

  
  const handelInputName=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value)
    setFlagname(true)
   
  }




  const acceptHadler=()=>{
    setIsAccepted(!isAccepted)
  }

  const handelClick = () => {

   
    if (phone !== "") {
      if (/^(09)[0-9]{9}$/.test(phone)) {
        setErrorphone(false);
      } else {
        setErrorphone(true);
      }
    } else {
      setFlagphone(false);
    }

    if (nationalCode !== "") {
      if (/^(?!(\d)\1{9})\d{10}$/.test(nationalCode)) {
        setErrorcode(false);
      } else {
        setErrorcode(true);
      }
    } else {
      setFlagcode(false);
    }

    if (name == "") {
      setFlagname(false);
    }

     if(isAccepted && phone!=="" && name!=="" && nationalCode!==""){
      navigate("/factor")
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
          اطلاعات تکمیلی زیر را وارد کنید
        </Typography>
      </Box>

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
          نام
        </Typography>

        {flagname ? (
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            value={name}
            type="text"
            style={{
              width: "327px",
              height: "48px",
              background: "#F0F0F0",
              boxShadow: " 0px 2px 0px rgba(0, 133, 255, 0.25)",
              borderRadius: "6px",
              border: "none",
              outline: "none",
            }}
          />
        ) : (
          <>
            <input
            

              onChange= {handelInputName}
              value={name}
              type="text"
              style={{
                width: "327px",
                height: "48px",
                background: "#F0F0F0",
                boxShadow: " 0px 2px 0px rgba(255,0,0,0.3)",
                borderRadius: "6px",
                border: "none",
                outline: "none",
                fontFamily: "IRANSansNum",
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

      {!errorphone && (
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
            موبایل
          </Typography>

          {flagphone ? (
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
                  fontFamily: "IRANSansNum",
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
        {errorphone && (
          <>
            <Typography
              sx={{
                color: "rgba(0,0,0,,0.1)",
                fontWeight: "500",
                fontSize: "14px",
                fontFamily: "IRANSans",

                margin: "10px",
              }}
            >
              موبایل
            </Typography>

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
                fontFamily: "IRANSansNum",
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

      {!errorcode && (
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
            کدملی
          </Typography>

          {flagcode ? (
            <input
            onChange={handelInputNationalCode}
              value={nationalCode}
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
                    onChange={handelInputNationalCode}
                value={nationalCode}
                type="text"
                style={{
                  width: "327px",
                  height: "48px",
                  background: "#F0F0F0",
                  boxShadow: " 0px 2px 0px rgba(255,0,0,0.3)",
                  borderRadius: "6px",
                  border: "none",
                  outline: "none",
                  fontFamily: "IRANSansNum",
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
        {errorcode && (
          <>
            <Typography
              sx={{
                color: "rgba(0,0,0,,0.1)",
                fontWeight: "500",
                fontSize: "14px",
                fontFamily: "IRANSans",

                margin: "10px",
              }}
            >
              کدملی
            </Typography>
            <input
                 onChange={handelInputNationalCode}
              value={nationalCode}
              type="text"
              style={{
                width: "327px",
                height: "48px",
                background: "#F0F0F0",
                boxShadow: " 0px 2px 0px rgba(255,0,0,0.3)",
                borderRadius: "6px",
                border: "none",
                outline: "none",
                fontFamily: "IRANSansNum",
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
              کدملی معتبر نیست
            </p>
          </>
        )}
      </Box>

      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <p
            style={{
              color: "rgba(0,0,0,,0.1)",
              fontWeight: "400",
              fontSize: "12px",
              fontFamily: "IRANSans",

              margin: "10px",
            }}
          >
            ورودشما به معنای
            <span style={{ color: "#0084FF", padding: "2px" }}>
              <span></span>
              پذیرفتن قوانین
              <span></span>
            </span>
            است
          </p>

          <div>
            <label className="container">
              <input
                type="checkbox"

                value={isAccepted.toString()}
                onChange={acceptHadler}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </Box>
      </Box>

      {!isAccepted ? (
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
              color: "rgba(0, 0, 0, 0.38)",
              backgroundColor: "rgba(0,0,0,0.12)",
              fontFamily: "IRANSans",
              margin: "auto",
              borderRadius: "6px",
              outline: "none",
              border: "none",
            }}
       
            onClick={handelClick}
          >
            ثبت اطلاعات
          </button>
        </Box>
      ) : (
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
              color: "#FFF",
              backgroundColor: "#FFA800",
              fontFamily: "IRANSans",
              margin: "auto",
              borderRadius: "6px",
              outline: "none",
              border: "none",
            }}
            onClick={handelClick}
          >
            ثبت اطلاعات
          </button>
        </Box>
      )}
    </Box>
  );
}

export default FurtherInformation;
