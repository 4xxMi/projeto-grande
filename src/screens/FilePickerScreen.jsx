import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function FilePickerScreen() {
  const [document, setDocument] = useState(null);

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success') {
      setDocument(result);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick a Document" onPress={pickDocument} />
      {document && (
        <Text style={styles.documentInfo}>
          Document: {document.name} ({document.size} bytes)
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  documentInfo: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});
