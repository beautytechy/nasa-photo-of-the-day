import React, { useState, useEffect } from "react";
import axios from "axios"
import NasaCard from "../src/NasaCard"

function NasaInfo() {
  // const [nasaInfo, setnasaInfo] = useState();
  const [nasaImg, setnasaImg] = useState([]);
  // const [nasaDate, setnasaDate] = useState();
  // const [rover, setRover] = useState();

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=EzI2ZyM0jdh3VfJEA3sPgtDUuZ2CDkd4z9dKZPqx
      `).then(response => {
     
        const nasaImg = response.data.photos;
        console.log(response.data);
        setnasaImg(nasaImg);
      })
      .catch(error => {
        console.log("API data was not returned", error);
      });
  }, []);
  return (
    <div>
      {nasaImg.map(info => {
        console.log(info);
        return (
          <NasaCard
            key={info.id}
            date={info.earth_date}
            banana={info.img_src}
            
          />
        )
      })
      }
    </div>
  )
    }
  export default NasaInfo;
