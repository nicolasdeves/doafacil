import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { useForm } from "react-hook-form";
import FormInput from "../../components/FormInput";
import { styles } from "./styles";
import { getCurrentUser, login, logoutUser, signUpUser } from "../../services/user/user.service";
import NavBar from "../../components/NavBar/NavBar";
import { makeNavigation } from "../../components/NavBar/make-navigation";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";


export function Login() {

const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
const [type, setType] = useState('login');
const { register, setValue, handleSubmit, control, reset } = useForm<any>({
    defaultValues: {
        type: 'login',
        name: "",
        
    },
    // shouldUseNativeValidation: true,
    // resolver: zodResolver(lineageSchema),
    });
const navigation = makeNavigation();
    
const onSubmit = async (data: any) => {
    if (type == 'login') {
        await login(data.email, data.password)
        navigation.navigate("Home")

    } else {
        await signUpUser(data.email, data.password, data.name)
        setType("Login")
        reset()
        navigation.navigate("Login")

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
    setUser(null)
}

const goToCreateCampaign = async () => {
    navigation.navigate("CreateCampaign")
}

useEffect(() => {
    setUser(getCurrentUser())
}, [])

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo ao Doa Fácil</Text>

        <View style={styles.logoContainer}>
            <Image
                source={require('../../assets/doa-facil-w-bg.png')}
                style={styles.logo}
            />
        </View>

        {
            !user && (
            <View>
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
            )
        }

        {
        user && (
        <View style={styles.loggedInContainer}>
            <Text style={styles.loggedInText}>{user.displayName ?? user.email}</Text>

            <View style={styles.buttonCampaign}>
            <Text style={styles.buttonText} onPress={goToCreateCampaign}>Criar campanha</Text>
            </View>

            <View style={styles.buttonCampaign}>
            <Text style={styles.buttonText} onPress={makeLogout}>Minhas campanhas</Text>
            </View>

            <View style={styles.buttonCampaign}>
            <Text style={styles.buttonText} onPress={makeLogout}>Minhas contribuições</Text>
            </View>

            <View style={styles.buttonSignOut}>
            <Text style={styles.buttonText} onPress={makeLogout}>Sair</Text>
            </View>

        </View>
        )
        }

        <NavBar />

    </View>

  );
}
export default Login;
