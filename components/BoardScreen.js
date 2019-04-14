import React, { Component } from "react";
import { Button, View, Text } from "react-native";

class BoardScreen extends Component {
  static navigationOptions = {
    title: "Board List"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Board List</Text>
        <Button
          title="Go to Details"
          onpress={() => this.props.navigation.navigate("BoardDetail")}
        />
        <Button
          title="Go to Add Board"
          onpress={() => this.props.navigation.navigate("AddBoard")}
        />
        <Button
          title="Go to Edit Board"
          onpress={() => this.props.navigation.navigate("EditBoard")}
        />
      </View>
    );
  }
}

export default BoardScreen;
