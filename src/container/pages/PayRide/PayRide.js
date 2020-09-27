import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonLanding from '../../../component/atoms/ButtonLanding'

class PayRide extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.contain}>
                    <Text 
                    style={{
                        fontSize: 18
                    }}>
                        {this.props.route.params.asal} - {this.props.route.params.tujuan}
                    </Text>
                    <Text
                    style={{
                        fontSize: 18
                    }}>
                        Biaya: Rp 35.000
                    </Text>
                    <Text
                    style={{
                        fontSize: 18
                    }}>
                        Estimasi: 30 menit
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 25,
                            marginBottom: 30
                        }}>
                        <ButtonLanding style={styles.button}
                        buttonName="Batal"
                        action={() => this.props.navigation.navigate("Ride")}
                        />
                        <ButtonLanding style={styles.button}
                        buttonName="Proses"
                        action={() => this.props.navigation.navigate("Result")}
                        />
                    </View>
                </View>
                
            </View>
        )
    }
}

export default PayRide;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#31b057'
    },
    contain: {
        paddingTop: 60,
        marginTop: 300,
        backgroundColor: 'white',
        borderRadius: 25,
        alignItems: 'center'
    },
    button: {
        marginLeft: 10,
        marginRight: 10
    }
  });
  