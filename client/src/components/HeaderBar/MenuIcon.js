import React, { useState,useEffect } from "react";
import { Flex, IconButton, Box, Checkbox, Text } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import Map from "../Map";

const MenuIcon = ({ onCheckboxChange }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  

  const handleMenuClick = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const [checkboxStates, setCheckboxStates] = useState(() => {
    // Initialize checkbox states from localStorage, or set them to false if not found in localStorage
    const savedCheckboxStates = [
      localStorage.getItem('parking') === 'true',
      localStorage.getItem('building') === 'true',
      localStorage.getItem('dormitory') === 'true',
      localStorage.getItem('stadium') === 'true',
      localStorage.getItem('eatary') === 'true',
    ];

    return savedCheckboxStates.every((state) => state !== null) ? savedCheckboxStates : [false, false, false, false];
  });

  useEffect(() => {
    // Save checkbox states to localStorage whenever they change
    localStorage.setItem('parking', checkboxStates[0]);
    localStorage.setItem('building', checkboxStates[1]);
    localStorage.setItem('dormitory', checkboxStates[2]);
    localStorage.setItem('stadium', checkboxStates[3]);
    localStorage.setItem('eatary', checkboxStates[4]);
  }, [checkboxStates]);

  const checkboxTexts = ['Parking place', 'School building', 'Dormitory', 'Stadium', 'Eatary'];

  const handleCheckboxChange = (index) => (event) => {
    // Update the checkbox state based on the index
    setCheckboxStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = event.target.checked;
      return newStates;
    });
  };
  
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

        {checkboxStates.map((checked, index) => (
          <Flex align="center" key={`checkbox-${index}`} mb={2}>
            <Checkbox
              colorScheme="blue"
              checked={checked}
              onChange={handleCheckboxChange(index)}
            />
            <Text ml={2} color="teal.500">
              {checkboxTexts[index]}
            </Text>
          </Flex>
        ))}

        
        {/* Add more checkboxes or content here */}
      </Box>
      {/* Pass the checkboxesState object to another component */}
    </Flex>
  );
};

export default MenuIcon;
