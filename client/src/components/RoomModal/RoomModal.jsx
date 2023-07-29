import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Tabs,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    Card,
    CardHeader,
    Heading,
    CardBody,
    Stack,
    StackDivider,
    Box,
    Text,
    Tag,
    TagLeftIcon,
    TagLabel
  } from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from "axios";

const RoomModal = ({ isOpen, setIsOpen, title, descrip, roomId }) => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        let ignore = false;

        async function fetchData() {
            try {
                const res = await axios.get("http://localhost:8000/getSchedule", {
                    params: {
                        roomId: roomId
                    }
                })
                if (!ignore) {
                    setCourses(res.data);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();

        return () => {
            ignore = true;
        };
    }, [roomId]);

    const onClose = () => {
        setIsOpen(false);
    }

    const convertDate = (start, end) => {
        const res = start + ":00 - " + end + ":00";
        return res;
    }

    return (
        <>
        <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    {title}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Tabs variant={'soft-rounded'} colorScheme='green' isFitted>
                        <TabList>
                            <Tab>Description</Tab>
                            <Tab>Courses</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                {descrip}
                            </TabPanel>
                            <TabPanel>
                                <Card variant={'filled'}>
                                    <CardHeader>
                                        <Heading size='md'>Courses schedule</Heading>
                                    </CardHeader>

                                    <CardBody>
                                        <Stack divider={<StackDivider />} spacing={4}>
                                            {courses.map(course => (
                                                <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                                    <div>
                                                        <Heading size={'xs'} textTransform={'uppercase'}>
                                                            {course.courseCode}
                                                        </Heading>
                                                        <Text pt='2' fontSize='sm'>
                                                            {course.name}
                                                        </Text>
                                                        <Text pt='2' fontSize='sm'>
                                                            {course.teacherName}
                                                        </Text>
                                                    </div>

                                                    <Tag size={'sm'} variant={'subtle'} colorScheme='cyan'>
                                                        <TagLeftIcon boxSize={8} as={TimeIcon} />
                                                        <TagLabel>{convertDate(course.beginTime, course.endTime)}</TagLabel>
                                                    </Tag>
                                                </Box>
                                            ))}

                                        </Stack>
                                    </CardBody>
                                </Card>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='red' mr={3} onClick={onClose}>
                    Close
                    </Button>
                    <Button colorScheme='blue' mr={3}>Book room</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}

export default RoomModal;