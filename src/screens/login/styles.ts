import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1E1E1E',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },

  inputContainer: {
    gap: 12,
    marginBottom: 20,
  },

  buttonSignIn: {
    backgroundColor: '#4CD964',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },

  forgotPasswordText: {
    textAlign: 'right',
    marginBottom: 30,
    color: '#4CD964',
  },

  signUpSection: {
    alignItems: 'center',
    marginBottom: 20,
  },

  signUpButton: {
    backgroundColor: '#F3F6FD',
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },

  signUpText: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  orText: {
    textAlign: 'center',
    marginBottom: 16,
    color: '#aaa',
  },

  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },

  socialButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  googleButton: {
    backgroundColor: '#FF6C6C',
  },

  appleButton: {
    backgroundColor: '#1E1E2D',
  },

  socialText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  
  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },

  loggedInContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  
  loggedInText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 24,
    color: '#333',
  },
  
  buttonSignOut: {
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: 300,
  },

  buttonCampaign: {
    backgroundColor: '#00CB00',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 10,
    width: 300,
  },
  
});
