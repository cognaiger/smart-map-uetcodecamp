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
  } from '@chakra-ui/react';
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
                                <p>This is courses</p>
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