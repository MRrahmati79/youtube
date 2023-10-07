"use client";

export default function Header() {
  return (
    <div className="flex">
      <div className="w-3/4 flex justify-around items-center">
        <div className="">serch bar</div>
        <div className="">mic</div>
      </div>
      <div className="w-1/4 flex  justify-around items-center">
        <div className="">camera</div>
        <div className="">notification</div>
        <div className="">User icon</div>
      </div>
    </div>
  );
}
