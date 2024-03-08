import { Link, Stack } from 'expo-router';
import { Button, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default function PercentageFraction() {
    return (
        <ScrollView>
            <View style={styles.body}>
                <Stack.Screen
                    options={{
                        title: "Fraction To Percentage"
                    }}
                />

                <View style={styles.container}>
                    <View style={styles.formGroup}>
                        <Text style={styles.formLabel}>Numerator</Text>
                        <TextInput style={styles.formControl} />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.formLabel}>Denominator</Text>
                        <TextInput style={styles.formControl} />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.formLabel}>Percentage</Text>
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
