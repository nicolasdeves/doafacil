
# Doa Fácil

Aplicativo android desenvolvido a partir de um trabalho acadêmico, que tem como objetivo conectar pessoas e instituições que necessitam de doações com pessoas dispostar a doar!

## Passos

### Iniciar projeto

Cria a pasta frontend `npx @react-native-community/cli init meu-projeto`

Valida se está tudo correto `npx react-native doctor` 

Inicia o emulador com Android Studio `npx react-native run-android`


### Configuração Firebase

Configuração no console do Firebase e criação do projeto `https://console.firebase.google.com`

** AplicationId -> android/app/build.grade -> applicationId

- Colar google-services.json gerado dentro de android/app

- Configurar build.gradle do projeto e do app dentro da pasta android


### Instalações (raiz do projeto)

- `npm install @react-native-firebase/app`

- `npm install @react-native-firebase/analytics`

- `npm install @react-native-firebase/app @react-native-firebase/firestore`

- `adb shell setprop debug.firebase.analytics.app com.doafacil` -> ativa o modo debug do Firebase Analytics e envia os arquivos instataneamente

- `npm install @babel/runtime`


### Build (quando a pasta android é modificada - rodar dentro da pasta android)

- `./gradlew clean` -> limpa build antiga do Android 

- `npx react-native run-android` -> realiza o build

- `npx react-native start --reset-cache` -> limpa cache (teve que ser usado muitas vezes em que foi instalada uma nova dependência)