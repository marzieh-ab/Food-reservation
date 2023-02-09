import { Box, Avatar, Typography, Stack, Button } from "@mui/material";
import React, { useState } from "react";
import BoxSlect from "./BoxSlect";
import image from "../assets/images/image.png";
import food from "../assets/images/food.png";
import user from "../assets/images/user.png";
import makeen from "../assets/images/آکادمی مکینNC 1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";

export type FoodType = {
  id: string;
  name: string;
  price: number;
  date: string;
  day: string;
  image: string;
  select: boolean;
};

const WebLayOut = () => {
  const UID = () =>
    `${new Date().getTime()}${String(Math.random()).slice(3, 8)}`;
  const [isShow, setIsShow] = useState<boolean>(false);
  
  const [foods, setFoods] = useState<FoodType[]>([
    {
      id: UID(),
      name: "قورمه سبزی",
      day: "شنبه",
      date: "10/10/1401",
      price: 25000,
      image: "assets/images/food.png",
      select: false,
    },
    {
      id: UID(),
      name: "قیمه",
      day: "یکشنبه",
      date: "11/10/1401",
      price: 25000,
      image: "assets/images/food.png",
      select: false,
    },
    {
      id: UID(),
      name: "مرغ",
      day: "دوشنبه",
      date: "12/10/1401",
      price: 25000,
      image: "assets/images/food.png",
      select: false,
    },
    {
      id: UID(),
      name: "ابگوشت",
      day: "سه شنبه",
      date: "13/10/1401",
      price: 25000,
      image: "assets/images/food.png",
      select: false,
    },
    {
      id: UID(),
      name: "مرغ",
      day: "چهارشنبه",
      date: "14/10/1401",
      price: 25000,
      image: "assets/images/food.png",
      select: false,
    },
    {
      id: UID(),
      name: "مرغ",
      day: "پنچشنبه",
      date: "15/10/1401",
      price: 25000,
      image: "assets/images/food.png",
      select: false,
    },
  ]);
  const [selectFood, setSelectFood] = useState<FoodType[]>([]);

  const handelClick = (id: string) => {
    const foodSelect = foods.find((food) => food.id === id);

    if (foodSelect) {
      setSelectFood((selectFood) => [...selectFood, foodSelect]);
     
    }

    setIsShow(true);
  };

  const hanselBorderClick = (id: string) => {
    const foodSelect = foods.find((food) => food.id === id);
    console.log(foodSelect,"one")

    if (foodSelect) {
      foodSelect.select = true;
    }

    // setIsShow(false);
  };

  return (
    <>
      <Box
        sx={{
          width: "360px",
          height: "666px",
          backgroundColor: "#fff",
          borderRadius: "20px",
     
        }}
      >
        <Box
          sx={{
            height: "260px",
            width: "360px",
            position: "relative",
          }}
        >
          <img
            src={image}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          <Link to="/wallet">
            <Box
              sx={{
                color: "#FFF",
                width: "30px",
                height: "30px",
                position: "absolute",
                left: "11.17%",
                top: "5.62%",
                zIndex: "1",
              }}
            >
              <img src={user} alt="" />
            </Box>
          </Link>

          <Box
            sx={{
              color: "#fff",
              width: "30px",
              height: "30px",
              top: "5.62%",
              left: "87.78%",
              position: "absolute",
              zIndex: "1",
            }}
          >
            <img src={makeen} alt="" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,

              background:
                "linear-gradient(180deg, rgba(20, 20, 20, 0.8) 3.96%, rgba(0, 0, 0, 0.6) 27.92%, rgba(0, 0, 0, 0.4) 50.31%, rgba(0, 0, 0, 0.2) 71.15%, rgba(0, 0, 0, 0) 89.58%)",
            }}
          ></Box>
        </Box>

        <Box
          sx={{
            width: "360px",
            height: "666px",

            borderRadius: "20px",
            position: "absolute",
            top: "163px",
            boxShadow: "box-shadow: 0px -4px 4px rgba(34, 34, 34, 0.1)",
            background: "#F9F9F9",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              color: "#000",
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "30px",
              fontFamily: "IRANSans",
              padding: "20px",
            }}
          >
            منو کافه
          </Typography>

          <Box
            sx={{
              border: "1px solid rgba(157, 158, 164, 0.2)",
              width: "328px",
              marginRight: "12px",
            }}
          ></Box>

          <Box sx={{ margin: "0 5px" }}>
            <Typography
              sx={{
                textAlign: "right",
                color: "#000",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
                fontFamily: "IRANSans",
                padding: "20px",
                // margin: "10px",
              }}
            >
              غذای روزانه
            </Typography>

            <Box sx={{ padding: " 0 20px" }}>
              <Swiper
                spaceBetween={50}
                slidesPerView={3}
                // onSlideChange={() => console.log("slide change")}
                // onSwiper={(swiper) => console.log(swiper)}
              >
                {foods.map((food) => {
                  return (
                    <SwiperSlide>
                      <Box
                        onClick={() => {
                          handelClick(food.id);
                          hanselBorderClick(food.id);
                        }}
                        key={food.id}
                        sx={{
                          width: "109px",
                          height: "162px",
                          background: "#FFF",
                          borderRadius: "10px",
                          position: "relative",
                          border:"none",
                          outline:"none"
                       
                        }}
                      >
                        <img
                          src={food.image}
                          style={{
                            width: "106px",
                            height: "62px",
                            marginTop: "20px",
                          }}
                        />
                        <Typography
                          sx={{
                            textAlign: "center",
                            color: "#000",
                            fontWeight: "500",
                            fontSize: "12px",
                            lineHeight: "21px",
                            fontFamily: "IRANSans",
                          }}
                        >
                          {food.name}
                        </Typography>

                        <Typography
                          sx={{
                            textAlign: "center",
                            color: "#000",
                            fontWeight: "400",
                            fontSize: "14px",
                            lineHeight: "21px",
                            fontFamily: "IRANSansNum",
                            margin: "5px 0",
                          }}
                        >
                          {food.price}تومان
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              textAlign: "center",
                              color: "#000",
                              fontWeight: "400",
                              fontSize: "11px",
                              lineHeight: "18px",
                              fontFamily: "IRANSansNum",
                            }}
                          >
                            {food.day}
                          </Typography>

                          <Typography
                            sx={{
                              textAlign: "center",
                              color: "#000",
                              fontWeight: "400",
                              fontSize: "11px",
                              lineHeight: "18px",
                              fontFamily: "IRANSansNum",
                            }}
                          >
                            {food.date}
                          </Typography>
                        </Box>
                        <div className={food.select ? "box-slider" : ""}></div>
                        {/* <div className= "box-slider"></div> */}
                      </Box>

                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Box>

            {/* {isShow && 
            defaultDb.foods.map((food)=>{
            
               return <BoxSlect   key={food.id}    setfoodselect={setFoodSelect}  food={foodSelect} />
            })
            
            
           } */}

            {isShow && (
              <BoxSlect
                selectFood={selectFood}
                setSelectFood={setSelectFood}
                foods={foods}
              />
            )}

            <Box
              sx={{
                width: "360px",
                margin: "0 12px 0 0 ",
                position: "absolute",
                left: "-13px",
                top: "520px",
              }}
            >
              <Link to="/login">
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
                >
                  ثبت رزرو
                </button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WebLayOut;
