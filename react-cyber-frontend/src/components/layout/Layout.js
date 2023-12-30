import { Box, Center, Image, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Center bg="#4299E1" w="100%" h={90} color="white">
        <img className="pizzaimg" src={require("../../assets/images/pizza.png")} />
        <div className="brandname">Domino's</div>
      </Center>
      <Outlet />
    </>
  );
};

export default Layout;
