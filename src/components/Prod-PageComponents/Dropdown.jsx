import { Dropdown, Menu, Space } from "antd";
import React from "react";

const DropDown = () => {
  const menu = (
    <Menu
      items={[
        {
          label: <a href="#">Newest</a>,
          key: "0",
        },
        {
          label: <a href="#">Popular</a>,
          key: "1",
        },
        // {
        //   type: "divider",
        // },
        // {
        //   label: "3rd menu item",
        //   key: "3",
        // },
      ]}
    />
  );

  return (
    <div>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              Product Short By
            </a>
            {/* <DownOutlined /> */}
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default DropDown;
