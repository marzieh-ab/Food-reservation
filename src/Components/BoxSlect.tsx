import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import closecircle from "../assets/images/close-circle.png";
import { useState } from "react";

import { FC } from "react";


import { FoodType } from "../Components/WebLayOut";

type IPropse = {
  selectFood: FoodType[];
  foods: FoodType[];
  setSelectFood: React.Dispatch<React.SetStateAction<FoodType[]>>;
};

const BoxSlect: FC<IPropse> = ({ selectFood, setSelectFood, foods }) => {
  const removeFood = (id: string): void => {
    const foods: FoodType[] = [...selectFood];

    const removeFood: FoodType[] = foods.filter((food) => food.id !== id);
 

    setSelectFood(removeFood);
  };

  const hanselBorderClick = (id: string) => {
    const foodSelect = foods.find((food) => food.id === id);

    if (foodSelect) {
      foodSelect.select = false;
    }

    console.log(foodSelect)
  };

  return (
    <Box
      sx={{
        margin: "40px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        height: "auto",
      }}
    >
      {selectFood.map((food) => {
        return (
          <Box
            sx={{
              width: "140px",
              height: "25px",
              borderRadius: "5px",
              border: "0.5px solid  #46B55E",
              background: "rgba(70, 181, 94, 0.1)",
              padding: "5px",
              display: "flex",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <img
              src={closecircle}
              alt=""
              onClick={() => {
                removeFood(food.id);

                hanselBorderClick(food.id);
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "IRANSans",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "12px",
                  lineHeight: "30px",
                  color: "#46B55E",
                  marginRight: "5px",
                }}
              >
                {food.name}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "IRANSansNum",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "12px",
                  lineHeight: "30px",
                  color: "#46B55E",
                  marginRight: "5px",
                }}
              >
                {food.day}
              </Typography>
            </Box>
          </Box>
        );
      })}

      {/* <Box  sx={{
            width:"140px",
            height:"25px",
            borderRadius:"5px",
            border:"0.5px solid  #46B55E",
            background: "rgba(70, 181, 94, 0.1)",
            padding:"5px",
            display:"flex",
            alignItems:"center",
            marginBottom:"5px"
          


           

        }}>

            <img src={closecircle} alt="" />
            <Typography   sx={{

            fontFamily: "IRANSans", 
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "12px",
            lineHeight: "30px",
            color:"#46B55E",
            marginRight:"5px"


            }}>
                دوشنبه قرمزه سبزی



            </Typography>

        </Box>
        <Box  sx={{
            width:"140px",
            height:"25px",
            borderRadius:"5px",
            border:"0.5px solid  #46B55E",
            background: "rgba(70, 181, 94, 0.1)",
            padding:"5px",
            display:"flex",
            alignItems:"center",
            marginBottom:"5px"
          


           

        }}>

            <img src={closecircle} alt="" />
            <Typography   sx={{

            fontFamily: "IRANSans", 
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "12px",
            lineHeight: "30px",
            color:"#46B55E",
            marginRight:"5px"


            }}>
                یکشنبه قیمه



            </Typography>

        </Box>
        <Box  sx={{
            width:"140px",
            height:"25px",
            borderRadius:"5px",
            border:"0.5px solid  #46B55E",
            background: "rgba(70, 181, 94, 0.1)",
            padding:"5px",
            display:"flex",
            alignItems:"center",
            marginBottom:"5px"
          


           

        }}>

            <img src={closecircle} alt="" />
            <Typography   sx={{

            fontFamily: "IRANSans", 
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "12px",
            lineHeight: "30px",
            color:"#46B55E",
            marginRight:"5px"


            }}>
                یکشنبه قیمه



            </Typography>

        </Box>
        <Box  sx={{
            width:"140px",
            height:"25px",
            borderRadius:"5px",
            border:"0.5px solid  #46B55E",
            background: "rgba(70, 181, 94, 0.1)",
            padding:"5px",
            display:"flex",
            alignItems:"center",
            marginBottom:"5px"
          


           

        }}>

            <img src={closecircle} alt="" />
            <Typography   sx={{

            fontFamily: "IRANSans", 
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "12px",
            lineHeight: "30px",
            color:"#46B55E",
            marginRight:"5px"


            }}>
                یکشنبه قیمه



            </Typography>

        </Box>
        <Box  sx={{
            width:"140px",
            height:"25px",
            borderRadius:"5px",
            border:"0.5px solid  #46B55E",
            background: "rgba(70, 181, 94, 0.1)",
            padding:"5px",
            display:"flex",
            alignItems:"center",
            marginBottom:"5px"
          


           

        }}>

            <img src={closecircle} alt="" />
            <Typography   sx={{

            fontFamily: "IRANSans", 
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "12px",
            lineHeight: "30px",
            color:"#46B55E",
            marginRight:"5px"


            }}>
                سه شنبه زرشک پلوبامرغ



            </Typography>

        </Box>
        <Box  sx={{
            width:"140px",
            height:"25px",
            borderRadius:"5px",
            border:"0.5px solid  #46B55E",
            background: "rgba(70, 181, 94, 0.1)",
            padding:"5px",
            display:"flex",
            alignItems:"center",
            marginBottom:"5px"
          


           

        }}>

            <img src={closecircle} alt="" />
            <Typography   sx={{

            fontFamily: "IRANSans", 
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "12px",
            lineHeight: "30px",
            color:"#46B55E",
            marginRight:"5px"


            }}>
                سه شنبه زرشک پلوبامرغ



            </Typography>

        </Box>
        <Box  sx={{
            width:"140px",
            height:"25px",
            borderRadius:"5px",
            border:"0.5px solid  #46B55E",
            background: "rgba(70, 181, 94, 0.1)",
            padding:"5px",
            display:"flex",
            alignItems:"center",
            marginBottom:"5px"
          


           

        }}>

            <img src={closecircle} alt="" />
            <Typography   sx={{

            fontFamily: "IRANSans", 
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "12px",
            lineHeight: "30px",
            color:"#46B55E",
            marginRight:"5px"


            }}>
                سه شنبه زرشک پلوبامرغ



            </Typography>

        </Box> */}
    </Box>
  );
};

export default BoxSlect;
