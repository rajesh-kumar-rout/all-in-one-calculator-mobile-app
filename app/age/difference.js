import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import DatePicker from 'react-native-date-picker'
import { useState } from 'react';

export default function AgeDifference() {
    return (
        <ScrollView className="p-5">
            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">DOB of 1st person</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" />
            </View>

            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">DOB of 2nd person</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" />
            </View>

            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Difference</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" value="3 Years 33 Months 33 Days"/>
            </View>
        </ScrollView>
    )
}
