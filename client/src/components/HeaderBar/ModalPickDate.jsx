import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    IconButton,
    Box,
    Text,
    Tag,TagLabel,Heading

    
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons"
import './ModalPickDate.css'
import { useState } from "react";
import axios from "axios";

const ModalPickDate = ({ isOpen, setIsOpen }) => {

    const onClose = () => {
        setIsOpen(false);
    }
    const [day,setDay] = useState(2);
    const [beginTime,setBeginTime] = useState(7);
    const [endTime,setEndTime] = useState(9);
    const [data,setData] = useState([]);
    return (
        <div >
            <Modal isOpen={isOpen} onClose={onClose} style={{minHeight:"300px"}} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Empty Room</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div className="box-pickdate">

                            <div >
                                <label>Day:</label>
                                <select onChange={(e)=>{
                                    switch (e.target.value) {
                                        case "Monday":
                                            setDay(2)
                                            break;
                                        case "Tuesday":
                                            setDay(3)
                                            break;
                                        case "Wendnesday":
                                            setDay(4)
                                            break;
                                        case "Thursday":
                                            setDay(5)
                                            break;
                                        case "Friday":
                                            setDay(6)
                                            break;
                                        case "Saturday":
                                            setDay(7)
                                            break;
                                        case "Sunday":
                                            setDay(8)
                                            break;
                                    }
                                    
                                }}>
                                    {["Monday", "Tuesday", "Wendnesday", "Thursday", "Friday", "Saturday", "Sunday"].map(item => {
                                        return (
                                            <option >{item}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div >
                                <label>Begin:</label>
                                <select onChange={(e)=>setBeginTime(e.target.value)}>


                                    {[7, 9, 11, 13, 15, 17].map(item => {
                                        return (
                                            <option >{item}h</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div >
                                <label>End: </label>
                                <select onChange={(e)=>setEndTime(e.target.value)}>
                                    {[9, 11, 13, 15, 17, 19].map(item => {
                                        return (
                                            <option >{item}h</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div >
                        <IconButton style={{float:"right",backgroundColor:"#ccc",margin:"8px"}} onClick={ async()=>{
                            console.log(day,beginTime,endTime)
                            
                            
                            const res =  await axios.get(`http://localhost:8000/getEmptyRoom?day=${day}&beginTime=${beginTime}&endTime=${endTime}`)
                            console.log(res.data)
                            setData(res.data)
                        }}>
                            <SearchIcon/>
                        </IconButton>
                        </div>
                        {data.map(item=>
                            (
                                <Box padding={"5px"} display={'flex'} width={"100%"} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} 
                                marginBottom = {'10px'} borderRadius={'5px'} background={'floralwhite'} >
                                 
                                 <div>
                                      <a href="#" onClick={()=>{
                                        

                                      }}>
                                      <Heading size={'xs'} textTransform={'uppercase'}>
                                          {item.itemName}
                                      </Heading>
                                      <Text pt='1' fontSize='sm'>
                                          {"Địa điểm: " + `${item.building}`}
                                      </Text>
                                      <Text pt='1' fontSize='sm'>
                                          {"Phòng: " + `${item.name}`}
                                      </Text>
                                      </a>
                                  </div>

                                 
            
                                  
                              </Box>)
                            )}
                        
                        
                       

                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ModalPickDate;