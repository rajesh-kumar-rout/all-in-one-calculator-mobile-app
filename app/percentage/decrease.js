import { Link, Stack } from 'expo-router';
import { Button, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default function PercentageDecrease() {
    return (
        <ScrollView className="p-5">
            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Original Number</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" />
            </View>

            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Decreased By</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" />
            </View>

            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Final Number</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" />
            </View>
        </ScrollView>
    )
}
