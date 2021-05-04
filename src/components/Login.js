import React, { useState } from "react"
import { useHistory } from "react-router"

import {
    Flex, Square, Center, Image, Input, Text,
    VStack, Button, Stack, useColorMode,
    Alert, AlertIcon, AlertTitle
} from "@chakra-ui/react"

import { useFormik } from "formik"
import * as yup from "yup"

const validation = yup.object({
    userName: yup.string().required("Kullanıcı adını giriniz"),
    password: yup.string().required("Şifreyi giriniz")
})


const Login = ({ setToken }) => {
    const { toggleColorMode } = useColorMode()
    const [alert, setAlert] = useState(false)

    let history = useHistory()

    const formik = useFormik({
        initialValues: {
            userName: "",
            password: ""
        },
        onSubmit: values => {
            if (values.userName === "admin" && values.password === "admin") {
                setAlert(false)
                setToken(true)
                history.push("/equipments")
            }
            else {
                setAlert(true)
                setToken(false)
            }
        },
        validationSchema: validation,
    })

    return (
        <Flex>
            <Center align="center" padding="2rem" paddingRight="3rem" >
                <VStack spacing={2} >
                    <Text fontFamily="body" fontSize="md">AKILLI ULAŞIM SİSTEMLERİ</Text>
                    <form onSubmit={formik.handleSubmit}>
                        <Input
                            name="userName"
                            placeholder="Kullanıcı adı"
                            size="md"
                            value={formik.values.userName}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.userName && formik.errors.userName ? <div>{formik.errors.userName}</div> : ""}
                        <Input
                            name="password"
                            placeholder="Şifre"
                            size="md"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : ""}
                        <Stack spacing={295} direction="row">
                            <Button size="sm" onClick={toggleColorMode} >Ayarlar</Button>
                            <Button size="sm" type="submit" disabled={!formik.dirty} >Giriş</Button>
                        </Stack>
                    </form>
                    {alert ? <Alert status="error">
                        <AlertIcon />
                        <AlertTitle mr={2}>Kullanıcı adı veya şifre hatalı.</AlertTitle>
                    </Alert> : ""}
                    <Text position="absolute" bottom="1" fontSize="3xl" color="yellow.400">Mert Yılmaz</Text>
                </VStack>
            </Center>
            <Square flex="5" >
                <Image src='images/intersection.png' alt="Highway Intersection" />
            </Square>
        </Flex >
    )
}

export default Login