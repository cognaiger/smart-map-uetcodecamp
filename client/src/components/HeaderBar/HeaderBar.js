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
  Box,
  Heading,
  TagLabel,
  Tag,
} from "@chakra-ui/react";

import { AiOutlineHome } from "react-icons/ai";
import MenuIcon from "./MenuIcon";
import { BsBell } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const HeaderBar = () => {
const { isOpen, onOpen, onClose } = useDisclosure();
const [events, setEvents] = useState([]);
  useEffect(() => {
    async function fetchData() {
        try {
            const tmp = await axios.get("http://localhost:8000/getAllEvent", {});
            setEvents(tmp.data);
        } catch (error) {
            console.log(error);
        }
    }

    fetchData();
  },[]);

  const convertDate = (start, end, sday, eday) => {
    let st = start + ":00, ";
    let en = end + ":00, ";
    
    st = st + sday + " - ";
    en = en + eday;
    return st + en;
}
  


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
        <MenuIcon />

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
            <ModalHeader>Sự Kiện</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                {events.map(event => (
                    <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} 
                    marginBottom = {'10px'} borderRadius={'5px'} background={'floralwhite'} >
                      <div>
                          <Heading size={'xs'} textTransform={'uppercase'}>
                              {event.eventName}
                          </Heading>
                          <Text pt='1' fontSize='sm'>
                              {"Địa điểm: " + `${event.building}`}
                          </Text>
                          <Text pt='1' fontSize='sm'>
                              {"Tổ chức bởi: " + `${event.organizer}`}
                          </Text>
                      </div>

                      <Tag size={'sm'} variant={'subtle'} colorScheme='cyan' >
                          <TagLabel>{convertDate(event.beginTime, event.endTime, event.beginDate, event.endDate)}</TagLabel>
                      </Tag>
                  </Box>
                ))}
            </ModalBody>
          </ModalContent>
        </Modal>

        <SignOut />
      </Flex>
    </Flex>
  );
};

export default HeaderBar;
