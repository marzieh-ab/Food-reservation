import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import arrow from "../assets/images/arrow-right.png";
import add from "../assets/images/add.png";
import question from "../assets/images/question.png";
import headset from "../assets/images/headset_24px.png";
import basketcart from "../assets/images/Vector (3).png";
import closecircle from "../assets/images/close-circle.png";
import Factor from "./Factor";

export default function Wallet() {


  const [showFactor,setShowFactor]=React.useState<boolean>(false)
  const navigate = useNavigate();
  return (

    <Box>
      {showFactor ?
      <Box 
      sx={{
        width: "360px",
        height: "666px",
        position: "fixed",
        backgroundColor:"#000",
        opacity:"0.4",
        zIndex: "999",
        padding: "0 10px",
        transition:"all 0.5s ease-in",
    
        borderRadius: "10px",
      
      }}
      
      >
        
      </Box>
      :
      ""
    }
    <Box
      sx={{
        width: "360px",
        height: "666px",
        backgroundColor: "#FFF",
       
        position:"absolute",
        zIndex:"100",
        borderRadius:"10px"
       
      }}
    >
      <Box
        sx={{
          width: "360px",
          height: "361px",
          backgroundColor: "#FFA800",
          padding: "0 10px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "24px",
            height: "24px",
            paddingTop: "5px",
          }}
        >
          <img src={arrow} alt=""  onClick={()=>navigate(-1)}/>
        </Box>
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              color: "#FFF",
              fontWeight: "700",
              fontSize: "20px",
              //   lineHeight: "30px",
              fontFamily: "IRANSans",
            }}
          >
            کیف پول
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              color: "#FFF",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "24px",
              fontFamily: "IRANSansNum",
              marginTop: "25px",
              marginBottom: "10px",
            }}
          >
            1.942.000ریال
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              color: "#FFF",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "24px",
              fontFamily: "IRANSans",
            }}
          >
            موجودی
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: "20px",
          }}
        >
          <Box
            sx={{
              width: "48px",
              height: "48px",
              backgroundColor: "#fff",
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={add} alt="" />
          </Box>

          <Box
            sx={{
              width: "48px",
              height: "48px",
              backgroundColor: "#fff",
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.4)",
            }}
          >
            <img src={question} alt="" />
          </Box>
          <Box
            sx={{
              width: "48px",
              height: "48px",
              backgroundColor: "#fff",
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.4)",
            }}
          >
            <img src={headset} alt="" />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: "20px",
            width: "360px",
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "24px",
              fontFamily: "IRANSans",
            }}
          >
            شارژحساب
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "24px",
              fontFamily: "IRANSans",
            }}
          >
            قوانین ومقررات
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "24px",
              fontFamily: "IRANSans",
            }}
          >
            پشتیبانی
          </Typography>
        </Box>
      </Box>



      <Box
        sx={{
          width: "360px",
          height: "361px",
          backgroundColor: "#FFF",
          padding: "0 10px",
          position: "relative",
          top: "-77px",
          borderRadius: "10px ",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: "20px",
            width: "360px",
          }}
        >
          <Box

onClick={() => setShowFactor(true)}
            sx={{
              display: "flex",

              alignItems: "center",
              justifyContent: "space-evenly",
              marginTop: "20px",
              width: "360px",
              // borderBottom:"1px solid rgba(0,0,0,0.1) ",
              position:"relative"
             
            }}
          >
            <Box
              sx={{
                width: "38px",
                height: "38px",
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFBC39",
              }}
            >
              <img src={basketcart} alt="" />
            </Box>

            <Box >
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "24px",
                  fontFamily: "IRANSans",
                }}
              >
                خرید
              </Typography>
              <Typography 
               sx={{
                color:" rgba(0, 0, 0, 0.4)",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "24px",
                fontFamily: "IRANSansNum",
              }} 
              
              >سه شنبه 27 دی ماه 1400</Typography>
            </Box>








            <Box>
              <Typography
                sx={{
                  color:"#000",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "24px",
                  fontFamily: "IRANSansNum",
                }} 
              
              
              >25000تومان</Typography>
            </Box>

            <Box  
            
            sx={{
              position:"absolute",
              width:"90%",
              // border:"0.5px solid rgba(0,0,0,0.1)",
              height:"1px",
              bottom:"-14px",
              backgroundColor:"rgba(0,0,0,0.1)"
             


            }}>
             
            </Box>



           



          </Box>







            <Box
            sx={{
              display: "flex",

              alignItems: "center",
              justifyContent: "space-evenly",
              marginTop: "20px",
              width: "360px",
              position:"relative"
            }}
          >
            <Box
              sx={{
                width: "38px",
                height: "38px",
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFBC39",
              }}
            >
              <img src={basketcart} alt="" />
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "24px",
                  fontFamily: "IRANSans",
                }}
              >
                خرید
              </Typography>
              <Typography 
               sx={{
                color:" rgba(0, 0, 0, 0.4)",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "24px",
                fontFamily: "IRANSansNum",
              }} 
              
              >سه شنبه 27 دی ماه 1400</Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color:"#000",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "24px",
                  fontFamily: "IRANSansNum",
                }} 
              
              
              >25000تومان</Typography>
            </Box>

            
            <Box  
            
            sx={{
              position:"absolute",
              width:"90%",
              // border:"0.5px solid rgba(0,0,0,0.1)",
              height:"1px",
              bottom:"-14px",
              backgroundColor:"rgba(0,0,0,0.1)"
             


            }}>
             
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",

              alignItems: "center",
              justifyContent: "space-evenly",
              marginTop: "20px",
              width: "360px",
          position:"relative"
            }}
          >
            <Box
              sx={{
                width: "38px",
                height: "38px",
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFBC39",
              }}
            >
              <img src={basketcart} alt="" />
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "24px",
                  fontFamily: "IRANSans",
                }}
              >
                خرید
              </Typography>
              <Typography 
               sx={{
                color:" rgba(0, 0, 0, 0.4)",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "24px",
                fontFamily: "IRANSansNum",
              }} 
              
              >سه شنبه 27 دی ماه 1400</Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color:"#000",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "24px",
                  fontFamily: "IRANSansNum",
                }} 
              
              
              >25000تومان</Typography>
            </Box>

            
            <Box  
            
            sx={{
              position:"absolute",
              width:"90%",
              // border:"0.5px solid rgba(0,0,0,0.1)",
              height:"1px",
              bottom:"-14px",
              backgroundColor:"rgba(0,0,0,0.1)"
             


            }}>
             
            </Box>
          </Box>
        
        </Box>

       
      </Box>

     
    </Box>

      


  
    {showFactor &&    <Factor  showFactor={showFactor}  setShowFactor={setShowFactor}/>}

    
    
    </Box>
 
    
  );
}
