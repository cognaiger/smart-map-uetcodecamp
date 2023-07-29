import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
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
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>{descrip}</p>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}

export default RoomModal;