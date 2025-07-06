import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F9F9F9',
    flex: 1,
  },

  imagePicker: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },

  imagePickerText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  imagePreview: {
    width: 150,
    height: 150,
    marginTop: 15,
    borderRadius: 10,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },

  submitButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 25,
    alignItems: 'center',
    marginBottom: 70
  },

  submitButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
