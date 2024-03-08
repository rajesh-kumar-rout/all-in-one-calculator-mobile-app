import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import DatePicker from 'react-native-date-picker'
import { useState } from 'react';
export default function AgeDifference() {

    return (
        <ScrollView>
            <StatusBar backgroundColor='#a21caf' style="light"/>
            <View style={styles.body}>
                <Stack.Screen
                    options={{
                        title: "Age Difference",
                        headerStyle: {
                            backgroundColor: "#c026d3"
                          }
                    }}
                />

                <View style={styles.container}>
                    <View style={styles.formGroup}>
                        <Text style={styles.formLabel}>DOB of 1st person</Text>
                        <TextInput style={styles.formControl} />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.formLabel}>DOB of 2nd person</Text>
                        <TextInput style={styles.formControl} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    body: {
        padding: 20,
        flexDirection: "column",
        gap: 20
    },
    container: {
        flexDirection: "column",
        gap: 24,
    },
    formGroup: {
        flexDirection: "column",
        gap: 4,
    },
    formControl: {
        borderWidth: 1,
        borderStyle: "solid",
        flex: 1,
        borderColor: "#ccc",
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 12,
        fontFamily: "Poppins-Regular",
        fontSize: 16
    },
    formLabel: {
        fontFamily: "Poppins-Regular",
        fontSize: 16
    }
})
