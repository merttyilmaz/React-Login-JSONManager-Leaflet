import '../App.css'

import { Link } from "react-router-dom"
import { useHistory } from "react-router"

import FeatherIcon from "feather-icons-react"
import { Flex, IconButton, Text, VStack } from "@chakra-ui/react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Icon } from "leaflet"

import allData from "../data/data.json"
import marker from "../Icons/marker.png"

const Map = ({ token }) => {
    let history = useHistory()

    if (token === false) {
        history.push("/login")
    }

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
                <Text fontSize="3xl">Harita</Text>
            </Flex>
            <Flex
                wrap="wrap"
                align="center"
                marginLeft="9rem"
            >
                <MapContainer
                    center={[41.015137, 28.979530]}
                    zoom={10}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {allData.map(data => (
                        <Marker
                            key={data.name}
                            position={[data.coordinates.latitude, data.coordinates.longitude]}
                            icon={new Icon({ iconUrl: marker, iconSize: [32, 41], iconAnchor: [32, 41] })}
                            eventHandlers={{ click: () => { history.push(`/equipments/${data.name}`) } }}
                        />

                    ))}
                </MapContainer>
            </Flex>
        </>
    )
}

export default Map