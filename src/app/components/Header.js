"use client";
import { UserOutlined, BellOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Avatar, Popover } from "antd";

export default function Header() {
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <div className="flex">
      <div className="w-3/4 flex justify-around items-center">
        <div className="">serch bar</div>
        <div className="">mic</div>
      </div>
      <div className="w-1/4 flex  justify-around items-center">
        <div className="">camera</div>
        <div className="">
          <Popover
            content={<a onClick={hide}>Close</a>}
            title="Title"
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
          >
            <Avatar size="large" icon={<BellOutlined />} />
          </Popover>
        </div>
        <div className="">
          <Avatar size="large" icon={<UserOutlined />} />
        </div>
      </div>
    </div>
  );
}
