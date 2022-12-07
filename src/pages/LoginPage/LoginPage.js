import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Spinner
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { BASE_URL } from '../../constants/url';
import { useNavigate } from 'react-router-dom';
import { goToHomePage } from '../../routes/coordinator';
import { goToSignupPage } from '../../routes/coordinator';


const LoginPage = () => {

    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    // const onChangeEmail = (e) => {
    //     setEmail(e.target.value)
    // }
    // const onChangePassword = (e) => {
    //     setPassword(e.target.value)
    // }

    const onChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const login = async () => {
        try {
            setIsLoading(true)

            const body = {
                email: form.email,
                password: form.password
            }
            const response = await axios.post(
                `${BASE_URL}/user/login`, body
            )
            window.localStorage.setItem("cookenu-token", response.data.token)



            setIsLoading(false)
            goToHomePage(navigate)


        } catch (error) {
            console.log(error)

        }
    }


    return (
        <>
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" value={form.email} onChange={onChangeForm} name="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" value={form.password} onChange={onChangeForm} name="password" />
                        </FormControl>
                        <Stack spacing={10}>

                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                onClick={login}

                            >
                                {isLoading ? <Spinner /> : "Entrar"}

                            </Button>
                            <Stack >
                                <Text textAlign={"center"}>
                                    Ainda não tem conta?<Link  color={'blue'} onClick={() => goToSignupPage(navigate)}>Cadastre-se!</Link>
                                </Text>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
        </>
    );
}
export default LoginPage