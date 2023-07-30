import React from "react";
import { Button, IconButton } from "@chakra-ui/react";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();

  const hanleLogOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <Button
      colorScheme="teal"
      variant="ghost"
      leftIcon={
        <IconButton
            icon={<AiOutlineLogout />}
            aria-label="Logout"
            colorScheme="white"
            variant="ghost"
            fontSize="20px"
            onClick={hanleLogOut}
          />
      }
    >
      Sign Out
    </Button>
  );
};

export default SignOut;
