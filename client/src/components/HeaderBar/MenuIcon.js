import React, { useState,useEffect } from "react";
import { Flex, IconButton, Box, Checkbox, Text } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

const MenuIcon = ({ onCheckboxChange }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const [parkingChecked, setParkingChecked] = useState(false);
  const [buildingChecked, setBuildingChecked] = useState(false);
  const [dormChecked, setDormChecked] = useState(false);
  const [stadiumChecked, setStadiumChecked] = useState(false);
  const [eatChecked, setEatChecked] = useState(false);

  const tickParking = () => {
    setParkingChecked((prev) => !prev);
    localStorage.setItem('parking', parkingChecked);
    window.dispatchEvent(new Event('parking'));
  }

  const tickBuilding = () => {
    setBuildingChecked((prev) => !prev);
    localStorage.setItem('building', buildingChecked);
    window.dispatchEvent(new Event('building'));
  }

  const tickDorm = () => {
    setDormChecked((prev) => !prev);
    localStorage.setItem('dormitory', dormChecked);
    window.dispatchEvent(new Event('dormitory'));
  }

  const tickStadium = () => {
    setStadiumChecked((prev) => !prev);
    localStorage.setItem('stadium', stadiumChecked);
    window.dispatchEvent(new Event('stadium'));
  }

  const tickEat = () => {
    setEatChecked((prev) => !prev);
    localStorage.setItem('eatary', eatChecked);
    window.dispatchEvent(new Event('eatary'));
  }
  
  return (
    <Flex align="center" position="relative">
      <IconButton
        icon={<FiMenu />}
        aria-label="Menu"
        colorScheme="blue" // Color of the menu icon (blue)
        variant="ghost"
        fontSize="24px"
        onClick={handleMenuClick}
      />
      <Box
        position="fixed"
        top="44px" // Distance to the top (44px)
        left={isMenuOpen ? "0" : "-33.3333%"} // Show the layer if isMenuOpen is true
        width="25%" // One-third of the width of the screen
        bg="white" // Color of the layer (white)
        transition="left 0.5s ease" // Animation to smoothly show/hide the layer
        zIndex="9999" // To ensure the layer appears above other content
        p={4} // Add padding to the content inside the layer
      >
        {/* Content of the layer */}

        <Flex align={"center"} mb={2}>
          <Checkbox 
          colorScheme="blue"
          checked={parkingChecked}
          onChange={tickParking} 
          />
          <Text ml={2} color={"teal.500"}>
            Parking
          </Text>
        </Flex>

        <Flex align={"center"} mb={2}>
          <Checkbox 
          colorScheme="blue"
          checked={buildingChecked}
          onChange={tickBuilding} 
          />
          <Text ml={2} color={"teal.500"}>
            School building
          </Text>
        </Flex>

        <Flex align={"center"} mb={2}>
          <Checkbox 
          colorScheme="blue"
          checked={dormChecked}
          onChange={tickDorm} 
          />
          <Text ml={2} color={"teal.500"}>
            Dormitory
          </Text>
        </Flex>

        <Flex align={"center"} mb={2}>
          <Checkbox 
          colorScheme="blue"
          checked={stadiumChecked}
          onChange={tickStadium} 
          />
          <Text ml={2} color={"teal.500"}>
            Stadium
          </Text>
        </Flex>

        <Flex align={"center"} mb={2}>
          <Checkbox 
          colorScheme="blue"
          checked={eatChecked}
          onChange={tickEat} 
          />
          <Text ml={2} color={"teal.500"}>
          Eatary
          </Text>
        </Flex>
        
      </Box>
    </Flex>
  );
};

export default MenuIcon;
