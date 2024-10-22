import React from "react";
import { View, StyleSheet, Platform, StatusBar, Text } from "react-native";
import Constants from "expo-constants"; 
import NetInfo from "@react-native-community/netinfo"; 

export default class Status extends React.Component {
  state = {
    info: null, // Initially set to null
    showMessage: false, // Track if the message should be displayed
  };

  componentDidMount() {
    // Get initial connection info
    NetInfo.fetch().then(state => {
      this.setState({ info: state.isConnected ? 'connected' : 'none' });
      if (state.isConnected) {
        this.showConnectedMessage();
      } else {
        this.showDisconnectedMessage();
      }
    });

    // Subscribe to network state changes
    this.unsubscribe = NetInfo.addEventListener(state => {
      this.setState({ info: state.isConnected ? 'connected' : 'none' });
      if (state.isConnected) {
        this.showConnectedMessage();
      } else {
        this.showDisconnectedMessage();
      }
    });
  }

  componentWillUnmount() {
    // Unsubscribe when component unmounts
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  showConnectedMessage = () => {
    this.setState({ showMessage: true });
    setTimeout(() => {
      this.setState({ showMessage: false });
    }, 4000); // Hides the message after 4 seconds
  };

  showDisconnectedMessage = () => {
    this.setState({ showMessage: true });
    setTimeout(() => {
      this.setState({ showMessage: false });
    }, 4000); // Hides the message after 4 seconds 
  };

  render() {
    const { info, showMessage } = this.state;
    const isConnected = info === 'connected'; // Determine if connected
    const backgroundColor = isConnected ? "white" : "red"; // Set background color based on connection status

    // Create StatusBar component
    const statusBar = (
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={isConnected ? "dark-content" : "light-content"} // Set bar style based on connection status
        animated={false} // Disable animation
      />
    );

    // Create message container with a floating bubble
    const messageContainer = (
      <View style={styles.messageContainer} pointerEvents={"none"}>
        {statusBar}
        {showMessage && (
          <View style={isConnected ? styles.connectedBubble : styles.bubble}>
            <Text style={styles.text}>{isConnected ? "Connected" : "No network connection"}</Text>
          </View>
        )}
      </View>
    );

    if (Platform.OS === "ios") {
      return (
        <View style={[styles.status, { backgroundColor }]}>
          {messageContainer}
        </View>
      );
    }
    return messageContainer; // Return message container for Android or other platforms
  }
}

const statusHeight = Platform.OS === "ios" ? Constants.statusBarHeight : 0;

const styles = StyleSheet.create({
  status: {
    zIndex: 1,
    height: statusHeight, // Set height for the status bar
  },
  messageContainer: {
    zIndex: 1, // Set zIndex
    position: "absolute", // Position the message container
    top: statusHeight + 70, // Increased top offset for better visibility
    left: 0,
    right: 0,
    height: 80, // Height of the message container
    alignItems: "center", // Center items horizontally
  },
  bubble: {
    paddingHorizontal: 20, // Horizontal padding
    paddingVertical: 10, // Vertical padding
    borderRadius: 20, // Rounded corners
    backgroundColor: "red", // Background color for the bubble
  },
  connectedBubble: {
    paddingHorizontal: 20, // Horizontal padding
    paddingVertical: 10, // Vertical padding
    borderRadius: 20, // Rounded corners
    backgroundColor: "green", // Background color for the connected bubble
  },
  text: {
    color: "white", // Text color inside the bubble
    fontWeight: "bold", // Bold text
  },
});
