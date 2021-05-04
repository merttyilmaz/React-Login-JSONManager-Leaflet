import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { useHistory } from "react-router"

import FeatherIcon from "feather-icons-react"
import { Flex, IconButton, Text, VStack, Input, Button } from "@chakra-ui/react"

import allData from "../data/data.json"

const Equipments = ({ token }) => {
    let history = useHistory()

    if (token === false) {
        history.push("/login")
    }

    const [searchTerm, setSearchTerm] = useState('')
    const [chooseDevice, SetChooseDevice] = useState('')

    return (
        <>
            <Flex
                position="fixed"
                height="100%"
                padding="2rem"
            >
                <VStack paddingTop="20">
                    <Link to="/equipments">
                        <IconButton
                            variant="outline"
                            colorScheme="orange"
                            fontSize="20px"
                            icon={<FeatherIcon icon="hard-drive" />}
                        />
                    </Link>
                    <Link to="/map">
                        <IconButton
                            variant="outline"
                            colorScheme="orange"
                            fontSize="20px"
                            icon={<FeatherIcon icon="map" />}
                        />
                    </Link>
                    <Link to="/alarm" >
                        <IconButton
                            variant="outline"
                            colorScheme="orange"
                            fontSize="20px"
                            icon={<FeatherIcon icon="bell" />}
                        />
                    </Link>
                </VStack>
                <Link to="/login" >
                    <IconButton
                        position="relative"
                        variant="outline"
                        colorScheme="orange"
                        marginTop="40rem"
                        marginRight="rem"
                        fontSize="20px"
                        icon={<FeatherIcon icon="power" />}
                    />
                    {token === false}
                </Link>
            </Flex>
            <Flex
                as="nav"
                align="center"
                wrap="wrap"
                padding="2rem"
                marginLeft="8rem"
                w={[300, 400, 560]}
            >
                <Text fontSize="3xl">Cihazlar</Text>
            </Flex>
            <Flex
                position="fixed"
                padding="1rem"
                marginLeft="9rem"
                bg="gray"
                height="100%"
            >
                <VStack align="left" >
                    <Input variant="outline" placeholder="Cihazlarda ara..." onChange={(event) => { setSearchTerm(event.target.value) }} />
                    {allData.filter((data) => {
                        if (searchTerm === "") {
                            return data
                        } else if (data.name.toLowerCase().replace("device", "cihaz").includes(searchTerm.toLowerCase()) || data.ip.includes(searchTerm)) {
                            return data
                        }
                    }).map((data, key) => (
                        <Link to={"/equipments/" + data.name} >
                            <Button textAlign="left" variant="ghost" key={key} onClick={() => { SetChooseDevice(data) }}>
                                {data.name.replace("Device", "Cihaz")} - {data.ip}
                            </Button>
                        </Link>
                    ))}
                </VStack>

            </Flex>
            <Flex
                position="fixed"
                paddingTop="5rem"
                justifyContent="center"
                marginLeft="24rem"
                height="100%"
                alig
            >
                <VStack marginLeft="1rem" >
                    {chooseDevice === '' ? '' :
                        <div>
                            <Text >Cihaz adı: {chooseDevice.name.replace("Device", "Cihaz")}</Text>
                            <Text >Cihaz IP:  {chooseDevice.ip}</Text>
                            <Text>Cihaz Enlem: {chooseDevice.coordinates.latitude}</Text>
                            <Text>Cihaz Boylam: {chooseDevice.coordinates.longitude}</Text>
                        </div>
                    }
                </VStack>
            </Flex>
        </>
    )
}

export default Equipments