import Card from "@/components/Card"
import Button from "@/components/Button";
import React from "react";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight ml-4">Landing Page</h1>
      
      <Card />

    <h2 className="text-2xl font-bold ml-4 mt-4 item-center">Custom Buttons</h2>
      <div className="space-x-4 mt-10">
        <Button title="Small Button" styles="text-sm rounded-sm ml-4" />
        <Button title="Medium Button" styles="text-base rounded-md" />
        <Button title="Medium Rounded Button" styles="text-base rounded-lg" />
        <Button title="Large Fully Rounded Button" styles="text-base rounded-full" />


        

      </div>
    </div>
  );
};
export default Landing