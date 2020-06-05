import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import ImageGallery from "react-image-gallery";
import { ThemeContext } from "../../context/ThemeContext";

import "../../App.css";
import "./style.css";

// Component import
import PictureLoader from "../../components/PictureLoader/PictureLoader";

export default function PhotoScreen() {
      // Theme definition
      const [theme] = useContext(ThemeContext);
      const { themeSelected, themeOne, themeTwo, themeThree } = theme;
      let option;

      switch (themeSelected) {
            case "theme1":
                  option = themeOne;
                  break;
            case "theme2":
                  option = themeTwo;
                  break;
            case "theme3":
                  option = themeThree;
                  break;
            default:
                  console.log("default");
      }

      // Get Images to display
      const [image, setImage] = useState([]);
      const [isLoading, setIsLoading] = useState(true);

      const fetchImages = async () => {
            try {
                  const response = await Axios.get(
                        // "http://localhost:4000/picture"
                        "https://massecritique-datanews-backend.herokuapp.com/picture"
                        // process.env.REACT_APP_WEBADDRESS + "/picture"
                  );
                  if (response.data) {
                        // console.log(response.data);
                        setImage(response.data);
                        setIsLoading(false);
                  } else {
                        console.log(response);
                  }
            } catch (error) {
                  console.log(error.message);
            }
      };

      useEffect(() => {
            fetchImages();
      }, []);

      let images = [];

      if (image) {
            for (let i = 0; i < image.length; i++) {
                  images.push({
                        original: image[i].url,
                        thumbnail: image[i].url,
                  });
            }
      }

      console.log(images);

      return (
            <div
                  className="page"
                  style={{
                        background: option.syntax,
                  }}
            >
                  <div
                        className="photo-container"
                        style={{ background: option.bg }}
                  >
                        <div className="photo-flex0">
                              <h2
                                    style={{
                                          color: option.syntax,
                                    }}
                              >
                                    Photos
                              </h2>
                        </div>
                        {isLoading ? (
                              <PictureLoader
                                    className="picture-loader"
                                    backgroundColor={option.syntax}
                                    foregroundColor={option.bg}
                              />
                        ) : (
                              <div className="photo-flex">
                                    <ImageGallery
                                          items={images}
                                          infinite={true}
                                          lazyLoad={true}
                                          // showNav={true}
                                          // showThumbnails={false}
                                          thumbnailPosition="left"
                                          showIndex={true}
                                          // disableThumbnailScroll={true}
                                    />
                              </div>
                        )}
                  </div>
            </div>
      );
}
