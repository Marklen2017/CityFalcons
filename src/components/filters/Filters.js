import { Select } from "antd";
import React from "react";
import "./Filters.scss";

const Filters = ({ options }) => {
  const { Option } = Select;
  return (
    <div className="wrapperFilters">
      <div>
        <Select
          defaultValue={options[0]}
          style={{ width: 172, height: 40, marginRight: 10 }}
        >
          {options.map((i) => {
            return <Option value={i}>{i}</Option>;
          })}
        </Select>
      </div>
    </div>
  );
};

export default Filters;
