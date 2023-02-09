import { Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import closecircle from "../assets/images/close.png";
import { FC } from "react";

type Ipropse={
    showFactor:boolean,
    setShowFactor:React.Dispatch<React.SetStateAction<boolean>>

}

const Factor: FC<Ipropse> = ({showFactor, setShowFactor }) => { 

    const handelClick=()=>{
        setShowFactor(false)


    }
  return (
    <Box
      sx={{
        width: "360px",
        height: "259px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        position: "absolute",
        top: "464px",
        padding: "10px",
        zIndex: "9999",
    
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "#000",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "30px",
            fontFamily: "IRANSans",
          }}
        >
          فاکتور
        </Typography>
        <Box>
          <img src={closecircle} alt=""  onClick={handelClick}/>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
       <Box     sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}>
       <Typography
          sx={{
            textAlign: "center",
            color: "#000",
            fontWeight: "400",
            fontSize: "12px",

            fontFamily: "IRANSans",
          }}
        >
          چلو قیمه کباب
        </Typography>
        <p
          style={{
            textAlign: "center",
            color: "#848484",
            fontWeight: "400",
            fontSize: "12px",

            fontFamily: "IRANSans",
            margin:"0"
          }}
        >
          (22/10/1401)
        </p>

       </Box>
        <Typography
         sx={{
            textAlign: "center",
            color: "#000",
            fontWeight: "400",
            fontSize: "14px",

            fontFamily: "IRANSans",
          }} 
        
        >99000تومان</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
       <Box     sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}>
       <Typography
          sx={{
            textAlign: "center",
            color: "#000",
            fontWeight: "400",
            fontSize: "12px",

            fontFamily: "IRANSans",
          }}
        >
          چلو قیمه کباب
        </Typography>
        <p
          style={{
            textAlign: "center",
            color: "#848484",
            fontWeight: "400",
            fontSize: "12px",

            fontFamily: "IRANSans",
            margin:"0"
          }}
        >
          (22/10/1401)
        </p>

       </Box>
        <Typography
         sx={{
            textAlign: "center",
            color: "#000",
            fontWeight: "400",
            fontSize: "14px",

            fontFamily: "IRANSans",
          }} 
        
        >99000تومان</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
       <Box     sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}>
       <Typography
          sx={{
            textAlign: "center",
            color: "#000",
            fontWeight: "400",
            fontSize: "12px",

            fontFamily: "IRANSans",
          }}
        >
          چلو قیمه کباب
        </Typography>
        <p
          style={{
            textAlign: "center",
            color: "#848484",
            fontWeight: "400",
            fontSize: "12px",

            fontFamily: "IRANSans",
            margin:"0"
          }}
        >
          (22/10/1401)
        </p>

       </Box>
        <Typography
         sx={{
            textAlign: "center",
            color: "#000",
            fontWeight: "400",
            fontSize: "14px",

            fontFamily: "IRANSansNum",
          }} 
        
        >99000تومان</Typography>
      </Box>

      <Box 
       sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
      }}
      
      > 
      <Typography 

sx={{
    textAlign: "center",
    color: "#000",
    fontWeight: "600",
    fontSize: "14px",

    fontFamily: "IRANSans",
  }}
      
      >جمع کل</Typography>
      <Typography 

sx={{
    textAlign: "center",
    color: "#46B55E",
    fontWeight: "600",
    fontSize: "14px",

    fontFamily: "IRANSansNum",
 
}}
      >1.200.000</Typography>
      


         </Box>
    </Box>
  );
}
export default Factor;
