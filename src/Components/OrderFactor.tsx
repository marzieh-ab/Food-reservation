import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

import arrow from "../assets/images/arrowright.png";
import food from "../assets/images/food.png";
import bag from "../assets/images/bag.png";
import refresh from "../assets/images/refresh.png";

import { useNavigate } from "react-router-dom";

export type FoodType = {
  id: string;
  name: string;
  price: number;
  date: string;
  day: string;
  image: string;
};

const OrderFactor = () => {
  const UID = () =>
    `${new Date().getTime()}${String(Math.random()).slice(3, 8)}`;
  const navigate = useNavigate();

  const [foods, setFoods] = useState<FoodType[]>([
    {
      id: UID(),
      name: "قورمه سبزی",
      day: "شنبه",
      date: "10/10/1401",
      price: 25000,
      image: "assets/images/food.png",
    },
    {
      id: UID(),
      name: "قیمه",
      day: "یکشنبه",
      date: "11/10/1401",
      price: 25000,
      image: "assets/images/food.png",
    },
    {
      id: UID(),
      name: "مرغ",
      day: "دوشنبه",
      date: "12/10/1401",
      price: 25000,
      image: "assets/images/food.png",
    },
    {
      id: UID(),
      name: "ابگوشت",
      day: "سه شنبه",
      date: "13/10/1401",
      price: 25000,
      image: "assets/images/food.png",
    },
  ]);

  const [refreshorder,setRefreshorder]=useState<boolean>(false)

  const handelDelete = (id: string) => {
    const removeFood: FoodType[] = foods.filter((food) => food.id !== id);

    setFoods(removeFood);
    setRefreshorder(true);
  


    const interval = setInterval(() => {
      setRefreshorder(false);
   }, 3000);

  //  console.log(interval)

   
  
  //    clearInterval(interval);
 
    
  };

  return (
    <Box
      sx={{
        width: "360px",
        height: "666px",
        backgroundColor: "#FFF",
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
        <img src={arrow} alt="" onClick={() => navigate(-1)} />
      </Box>

      <Box>
        <Typography
          sx={{
            color: "#000",
            fontWeight: "700",
            fontSize: "20px",
            fontFamily: "IRANSans",

            margin: "12px",
          }}
        >
          فاکتورسفارش
        </Typography>
      </Box>

      <Box sx={{ marginTop: "20px" }}>
        {foods.map((food) => {
          return (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                // borderBottom:"2px solid #F9F9F9",
                padding: "10px",
                position: "relative",
                marginTop: "10px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "92%",
                  border: "1px solid #F9F9F9",
                  top: "86px",
                }}
              ></Box>
              <img src={food.image} alt="" />
              <Box>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "16px",
                    fontFamily: "IRANSans",
                  }}
                >
                  {food.name}
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "14px",
                    fontFamily: "IRANSans",
                  }}
                >
                  {food.day}
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "14px",
                    fontFamily: "IRANSansNum",
                  }}
                >
                  {food.date}
                </Typography>
              </Box>

              <Box onClick={() => handelDelete(food.id)}>
                <img
                  src={bag}
                  alt=""
                  style={{ position: "absolute", left: "28px", top: "10px" }}
                />
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "12px",
                    fontFamily: "IRANSansNum",
                    marginTop: "41px",
                  }}
                >
                  {food.price}تومان
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>



      {refreshorder ? <Box
        sx={{
          background: "#DBDBDB",
         
          color: "#000",
          height: "48px",
          width: "320px",
          margin: "50px auto",
          borderRadius: "5px",
          display:"flex",
          alignItems: "center",
          padding:"5px"
        }}
      >

        <img src={refresh} alt=""  style={{width:"24px",height:"24px",marginRight:"50px"}}/>
        <Typography 
           sx={{
            color: "#000",
            fontWeight: "500",
            fontSize: "14px",
            fontFamily: "IRANSans",
            marginRight:"10px"
          }}
        
        >بازگشت سفارش حذف شده</Typography>
      </Box>:""}



      

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          // marginTop:"70px",
          borderTop: "2px solid #F9F9F9",
          padding: "10px",

          position: "absolute",
          top: "560px",
          width: "360px",
          cursor: "pointer",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#000",
              fontWeight: "500",
              fontSize: "12px",
              fontFamily: "IRANSans",
            }}
          >
            جمع کل
          </Typography>
          <Typography
            sx={{
              color: "#000",
              fontWeight: "500",
              fontSize: "16px",
              fontFamily: "IRANSansNum",
              marginTop: "10px",
            }}
          >
            25.000.000تومان
          </Typography>
        </Box>
        <button
          style={{
            width: "154px",
            height: "45px",
            color: "#fff",
            backgroundColor: "#FFA800",
            fontFamily: "IRANSans",

            borderRadius: "6px",
            outline: "none",
            border: "none",
          }}
        >
          درگاه پرداخت
        </button>
      </Box>
    </Box>
  );
};

export default OrderFactor;
