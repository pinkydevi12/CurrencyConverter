import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { Appbar, Button, Card, Text, TextInput } from "react-native-paper";
import React, { useState } from "react";

import axios from "axios";

const API_KEY = "3fb0b8aec031bcb01226984b";
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

const DetailsScreen = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleConvert = async () => {
    try {
      const response = await axios.get(`${API_URL}${fromCurrency}`);
      const rate = response.data.conversion_rates[toCurrency];
      const result = (parseFloat(amount) * rate).toFixed(2);
      setConvertedAmount(result);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch conversion rate");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Currency Converter" />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.content}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.title}>Convert Currency</Text>
            <TextInput
              label="Amount"
              value={amount}
              onChangeText={(text) => setAmount(text)}
              keyboardType="numeric"
              style={styles.input}
              mode="outlined"
            />
            <TextInput
              label="From Currency (e.g., USD)"
              value={fromCurrency}
              onChangeText={(text) => setFromCurrency(text)}
              style={styles.input}
              mode="outlined"
            />
            <TextInput
              label="To Currency (e.g., EUR)"
              value={toCurrency}
              onChangeText={(text) => setToCurrency(text)}
              style={styles.input}
              mode="outlined"
            />
            <Button
              mode="contained"
              onPress={handleConvert}
              style={styles.button}
            >
              Convert
            </Button>
            {convertedAmount && (
              <Text style={styles.resultText}>
                Converted Amount: {convertedAmount}
              </Text>
            )}
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
  resultText: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
