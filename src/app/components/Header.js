"use client";
import React, { useState } from "react";
import { Popover } from "antd";

export default function Header() {
  
//function for cameara icon 
const [open, setOpen] = useState(false);
const hide = () => {
  setOpen(false);
};
const camIcon = (newOpen) => {
  setOpen(newOpen);
};

//function for bell Icon
const [show, setShow] = useState(false);
const unShow = () => {
  setOpen(false);
};
const notification = (newOpen) => {
  setOpen(newOpen);
};

//function for user icon
const [openUserIcon, setopenUserIcon] = useState(false);
const closeUserIconMenu = () => {
  setOpen(false);
};
const userIconMeun = (newOpen) => {
  setOpen(newOpen);
};
  return (
    <div className="flex">
      <div className="w-3/4 flex justify-around items-center">
        <div className="">serch bar</div>
        <div className="">mic</div>
      </div>
      <div className="w-1/4 flex  justify-around items-center">
        <div className="">
          {" "}
          <Popover
            content={<a onClick={hide}>Close</a>}
            title="Title"
            trigger="click"
            open={open}
            onOpenChange={camIcon}
          >
            <img src="/assets/icons/camIcon.svg" />
          </Popover>
        </div>
        <div className="">
        <Popover
            content={<a onClick={unShow}>Close</a>}
            title="Title"
            trigger="click"
            open={open}
            onOpenChange={notification}
          >
            <img src="/assets/icons/bellIcon.svg" />
          </Popover>
        </div>
        <div className="">
        <Popover
            content={<a onClick={closeUserIconMenu}>Close</a>}
            title="Title"
            trigger="click"
            open={open}
            onOpenChange={userIconMeun}
          >
            <img src="/assets/icons/userIcon.svg" />
          </Popover>
        </div>
      </div>
    </div>
  );
}
