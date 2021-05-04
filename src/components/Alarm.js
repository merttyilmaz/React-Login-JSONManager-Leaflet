import { Link } from "react-router-dom"
import { useHistory } from "react-router"

import FeatherIcon from "feather-icons-react"
import { Flex, VStack, IconButton, Text } from "@chakra-ui/react"

const Alarm = ({ token }) => {
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
            >
                <Text fontSize="3xl">Alarm</Text>
            </Flex>
        </>
    )
}

export default Alarm