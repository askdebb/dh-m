import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button,  TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Onboarding = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [commodities] = useState(['Corn', 'Wheat', 'Soybeans', 'Rice', 'Cotton']);
  const [selectedCommodity, setSelectedCommodity] = useState('');
  const [userRole, setUserRole] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const navigation = useNavigation();

  // Fetch countries from Rest Countries API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const sortedCountries = response.data
          .map(country => ({
            name: country.name.common,
          }))
          .sort((a, b) => a.name.localeCompare(b.name)); // Sorts it  alphabetically
        setCountries(sortedCountries);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  // This handles Next Step 
  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };
   // This handles Previous Step 
  const handlePreviousStep = () => {
    setCurrentStep(prev => prev - 1);
  };
 

  return (
    <View style={styles.container}>   
      {currentStep === 0 && (
        <>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={32} color="#000" />
      </TouchableOpacity>
        
          <Text style={styles.label}>Select User Role</Text>
          <View style={styles.pickerContainer}>
          <Picker
            selectedValue={userRole}
            onValueChange={(itemValue) => setUserRole(itemValue)}>
            <Picker.Item label="Farmer" value="farmer" />
            <Picker.Item label="Agripreneur" value="agripreneur" />
            
          </Picker>
          </View>
          <Text style={styles.label}>Select Key Commodity</Text>
          <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCommodity}
            onValueChange={(itemValue) => setSelectedCommodity(itemValue)}>
            {commodities.map((commodity, index) => (
              <Picker.Item key={index} label={commodity} value={commodity} />
            ))}
          </Picker>
          </View>
           <TouchableOpacity style={styles.submitButton} onPress={handleNextStep}>
        <Text style={styles.submitButtonText}>Next</Text>
      </TouchableOpacity>
        </>
      )}

     

      {currentStep === 1 && (
        <>
        <TouchableOpacity style={styles.backButton} onPress={handlePreviousStep}>
        <Icon name="arrow-back" size={32} color="#000" />
      </TouchableOpacity>
          <Text style={styles.label}>Select Location</Text>
          <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCountry}
            onValueChange={(itemValue) => setSelectedCountry(itemValue)}>
            {countries.map((country, index) => (
              <Picker.Item key={index} label={country.name} value={country.name} />
            ))}
          </Picker>
          </View>
          <TouchableOpacity style={styles.submitButton} onPress={() => alert('Onboarding complete!')}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
        </>
      )}
    </View>
  );
};



export default Onboarding;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
    },
    label: {
      fontSize: 18,
      marginBottom: 14,
      fontWeight: 'bold',
    },
    pickerContainer: {
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
        overflow: 'hidden', 
        marginBottom: 16, 
      },
    backButton: {
        position: 'absolute',
        top: 80,
        left: 20,
        zIndex: 1,  
      },
      submitButtonText: {
        color: '#FFF',
        fontSize: 18,
      },
    submitButton: {
        backgroundColor: '#28A745',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
      },
  });
