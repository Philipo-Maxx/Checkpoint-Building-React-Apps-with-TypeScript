import React from "react";

//the first thing to do is change the .jsx extension to .tsx
//then create an interface for the props of the component and pass it as an argument to the component
interface GreetingProps {
  name: string;
}

//the component is a functional component so we will use the arrow function syntax
const Greeting = ({ name }: GreetingProps) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
