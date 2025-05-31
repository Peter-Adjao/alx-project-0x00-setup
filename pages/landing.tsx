import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="space-y-4 p-4">
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />

      <div className="space-y-2">
        <h2 className="font-semibold">Buttons:</h2>

        <div className="space-x-2">
          <Button title="Small Rounded-sm" className="text-sm rounded-sm" />
          <Button title="Medium Rounded-md" className="text-base rounded-md" />
          <Button title="Large Rounded-full" className="text-lg rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
