import Card from "@/components/Card"
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      
      <div className="space-x-4">
        <Button title="Small Button" styles="text-sm rounded-sm" />
        <Button title="Medium Button" styles="text-base rounded-md" />
        <Button title="Large Button" styles="text-lg rounded-full" />
      </div>
    </div>
  )
}
export default Landing