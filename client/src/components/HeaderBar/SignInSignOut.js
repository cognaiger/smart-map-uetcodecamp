import React from "react";
import { Button, IconButton } from "@chakra-ui/react";
import { FaSignInAlt } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";

import { Link } from "react-router-dom";
const SignInSignOut = () => {
  
  const hanleLogOut = () => {
    localStorage.setItem("loggedIn", false);
    localStorage.clear();
    window.location.reload();
  };
  return (
    <Button
      colorScheme="teal"
      variant="ghost"
      leftIcon={
        localStorage.getItem("loggedIn") === "true" ? (
          <IconButton
            icon={<AiOutlineLogout />}
            aria-label="Logout"
            colorScheme="white"
            variant="ghost"
            fontSize="20px"
            onClick={hanleLogOut}
          />
        ) : (
          <Link to="/login">
            <IconButton
              icon={<FaSignInAlt />}
              aria-label="Logout"
              colorScheme="white"
              variant="ghost"
              fontSize="20px"
            />
          </Link>
        )
      }
    >
      {localStorage.getItem("loggedIn") === "true" ? "Sign Out" : "Sign In"}
    </Button>
  );
};

export default SignInSignOut;
