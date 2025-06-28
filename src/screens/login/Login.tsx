import { useEffect, useState } from "react";
import { Button, Image, Text, TextInput, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import FormInput from "../../components/FormInput";
import { styles } from "./styles";
import { login, logoutUser, signUpUser } from "../../services/user/user.service";


export function Login() {

const [type, setType] = useState('login');
const { register, setValue, handleSubmit, control } = useForm<any>({
    defaultValues: {
        type: 'login',
        name: "Nícolas Deves",
        
    },
    // shouldUseNativeValidation: true,
    // resolver: zodResolver(lineageSchema),
    });
    
const onSubmit = async (data: any) => {
    if (type == 'login') {
        console.log('apertou')
        await login(data.email, data.password)
    } else {
        console.log(data)
        await signUpUser(data.email, data.password, data.name)
    }

    };

const changeFormType = () => {
    if (type == 'login') {
        setType('register')
    } else {
        setType('login')
    }
}

const makeLogout = async () => {
    await logoutUser()
}

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo ao Doa Fácil</Text>

        <View style={styles.logoContainer}>
            <Image
                source={require('../../assets/doa-facil-w-bg.png')}
                style={styles.logo}
            />
        </View>


        <View style={styles.inputContainer}>
            {
                type == 'register' && (
                    <FormInput control={control} name="name" placeholder="Write here" label="Nome" />
                )
            }

            <FormInput control={control} name="email" placeholder="Write here" label="E-mail" />
            <FormInput control={control} name="password" placeholder="Write here" label="Senha" />

            {
                type == 'register' && (
                    <FormInput control={control} name="password-confirm" placeholder="Write here" label="Confirmar senha" />
                )
            }

        </View>

        <View style={styles.buttonSignIn}>
            <Text style={styles.buttonText} onPress={handleSubmit(onSubmit)}>{ type == 'login' ? 'Login' : 'Registrar'}</Text>
        </View>

        {/* <Text style={styles.forgotPasswordText}>Esqueceu sua senha? <Text style={{ color: '#4CD964' }}>Click here</Text></Text> */}

        <View style={styles.signUpSection}>
            <View style={styles.signUpButton}>
            <Text style={styles.signUpText} onPress={changeFormType}>{ type == 'login' ? 'Registrar' : 'Voltar ao login'}</Text>
            </View>
        </View>

        <Text style={styles.orText}>Entre com</Text>

        <View style={styles.socialButtonsContainer}>
            <View style={[styles.socialButton, styles.googleButton]}>
                <Text style={styles.socialText} onPress={makeLogout}>G</Text>
            </View>
        </View>
    </View>

  );
}



export default Login;
