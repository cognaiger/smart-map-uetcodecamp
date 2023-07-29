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

const RoomModal = ({ isOpen, setIsOpen, title, descrip }) => {

    const onClose = () => {
        setIsOpen(false);
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
                                            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                                <div>
                                                    <Heading size={'xs'} textTransform={'uppercase'}>
                                                        INT2101 2
                                                    </Heading>
                                                    <Text pt='2' fontSize='sm'>
                                                        Ths Vu Ba Duy
                                                    </Text>
                                                </div>

                                                <Tag size={'sm'} variant={'subtle'} colorScheme='cyan'>
                                                    <TagLeftIcon boxSize={8} as={TimeIcon} />
                                                    <TagLabel>13:00 - 15:00 (T3)</TagLabel>
                                                </Tag>
                                            </Box>

                                            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                                <div>
                                                    <Heading size={'xs'} textTransform={'uppercase'}>
                                                        INT2102 2
                                                    </Heading>
                                                    <Text pt='2' fontSize='sm'>
                                                        Ths Vu Ba Duy
                                                    </Text>
                                                </div>

                                                <Tag size={'sm'} variant={'subtle'} colorScheme='cyan'>
                                                    <TagLeftIcon boxSize={8} as={TimeIcon} />
                                                    <TagLabel>13:00 - 15:00 (T2)</TagLabel>
                                                </Tag>
                                            </Box>

                                            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                                <div>
                                                    <Heading size={'xs'} textTransform={'uppercase'}>
                                                        INT2105 2
                                                    </Heading>
                                                    <Text pt='2' fontSize='sm'>
                                                        Ths Vu Ba Duy
                                                    </Text>
                                                </div>

                                                <Tag size={'sm'} variant={'subtle'} colorScheme='cyan'>
                                                    <TagLeftIcon boxSize={8} as={TimeIcon} />
                                                    <TagLabel>13:00 - 15:00 (T6)</TagLabel>
                                                </Tag>
                                            </Box>
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