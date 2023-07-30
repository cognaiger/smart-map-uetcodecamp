import React from "react";
import Hello from "./Hello";
import SignOut from "./SignOut";
import {
  Flex,
  Text,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,

} from "@chakra-ui/react";

import { AiOutlineHome } from "react-icons/ai";

import { BsBell } from "react-icons/bs";

import { Link } from "react-router-dom";
const HeaderBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      bg="teal.500"
      color="white"
      p={0.5}
    >
      {/* Left side */}
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold" mr={4}>
          VNU
        </Text>

        <Link to={"/"}>
          <IconButton
            icon={<AiOutlineHome />}
            aria-label="Home"
            colorScheme="white"
            variant="ghost"
            fontSize="20px"
          />
        </Link>

        <Hello />
      </Flex>

      {/* Right side */}
      <Flex align="center">
        <IconButton
          icon={<BsBell />}
          aria-label="Ring"
          colorScheme="white"
          variant="ghost"
          fontSize="20px"
          mr={2}
          onClick={onOpen}
        />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Notification</ModalHeader>
            <ModalCloseButton />
            <ModalBody>You have a new notification!</ModalBody>
          </ModalContent>
        </Modal>

        <SignOut />
      </Flex>
    </Flex>
  );
};

export default HeaderBar;
