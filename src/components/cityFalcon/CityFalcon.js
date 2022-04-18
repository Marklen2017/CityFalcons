import { FilterOutlined, RedoOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import Filters from "../filters/Filters";
import Header from "../header/Header";
import MainButtons from "../mainButtons/MainButtons";
import CityCard from "../card/Card";
import "./CityFalcon.scss";
import { Button } from "antd";

const languages = [
  "Select/Unselect All",
  "English",
  "German",
  "Chinese",
  "Italian",
];
const order = ["Top Rated", "Latest", "Most Read", "Popular"];
const times = ["10 second", "30 second", "1 minuts", "10 minuts"];

const CityFalcon = () => {
  const [data, setData] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    async function getDta() {
      try {
        let response = await fetch(
          "https://cf-endpoint-proxy.herokuapp.com/webapi/v1/stories"
        );
        let data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
      }
    }
    getDta();
  }, []);

  const handleOpenFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div>
      <Header />
      <div className="cityFalconWrapper">
        <h1 className="watchlistName">Watchlist Name</h1>
        <div className="buttonsWrapper">
          <MainButtons text="Refresh">
            <RedoOutlined style={{ color: "#3971c1" }} />
          </MainButtons>
          <MainButtons text="Filters" handleOpenFilter={handleOpenFilter}>
            <FilterOutlined style={{ color: "#3971c1" }} />{" "}
          </MainButtons>
        </div>
        {isFilterOpen && (
          <div className="filtersWrapper">
            <Filters options={times} />
            <Filters options={order} />
            <Filters options={languages} />
            <Button type="primary" className="resetButton">
              Reset
            </Button>
          </div>
        )}
        <div>
          {data.stories?.map((item) => {
            return <CityCard item={item} key={item.uuid} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CityFalcon;
