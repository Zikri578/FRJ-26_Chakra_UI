import React from 'react'
import { Center, Heading, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, FormHelperText } from "@chakra-ui/react"
import { useForm } from "react-hook-form"

/**
 * Dashboard component yang berisi informasi 
 * @params {string}
 * @returns 
 */
export default function Dashboard() {

    // membuat assigment react hook form
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // membuat handle login
    const handleLogin = (input) => {
        console.info(input);
    }

    return (
        <Center backgroundColor={"whatsapp.500"} color="white" minH={"100vh"} flexDirection="column" gap={'4'}>

            <Heading>Halaman Dashboard</Heading>

            <form autoComplete='off' onSubmit={handleSubmit(handleLogin)}>

                <FormControl marginBottom={4}>

                    <FormLabel htmlFor='email'>Email</FormLabel>

                    {/* {...register} merupakan spread operator */}
                    <Input id='email'
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Masukkan Email Anda",
                            },
                            // menggunakan regex apabila email tersebut tidak valid
                            pattern: {
                                value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, //merupakan regex email
                                message: "Email Tidak Valid!"
                            }
                        })}
                    />

                    {/* menampilkan pesan ketika tidak mengisi form */}
                    {errors.email && <FormHelperText>{errors.email.message}</FormHelperText>}

                </FormControl>

                <FormControl marginBottom={4}>

                    <FormLabel htmlFor='password'>Password</FormLabel>

                    <InputGroup>
                        {/* {/* {...register} merupakan spread operator */}
                        <Input id='password' type={'password'}
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Masukkan Password Anda",
                                },
                                // menggunakan regex apabila password tidak sesuai
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, //merupakan regex password
                                    message: "Password Wajib diisi : 8 char, huruf besar dan kecil serta angka"
                                }
                            })}
                        />
                        {/* qwertyui7 */}

                        {/*  menampilkan mata, untuk menampilkan emoji menggunakan os windows menggunakan : windows + . (titik) */}
                        < InputRightElement children={<> ❤️ </>} />
                        {/* akhir menampilkan mata */}

                    </InputGroup>

                    {/* menampilkan pesan ketika tidak mengisi form */}
                    {errors.password && <FormHelperText>{errors.password.message}</FormHelperText>}

                </FormControl>

                <FormControl>

                    <Button backgroundColor={'blue.500'} type='submit'>Login</Button>
                    {/* <Button backgroundColor={'red.500'} type='cancel'>Cancel</Button> */}

                </FormControl>
            </form>

        </Center>
    )
}
