import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';

interface Props {
  checked : boolean,
  onChecked : () => void
  onUnchecked : () => void
}

interface State {
  value : string | undefined
}

class CompleteToggle extends Component < Props,
State > {

  toggle = () => {
    if (this.props.checked) {
      this
        .props
        .onUnchecked();
    } else {
      this
        .props
        .onChecked();
    }
  }
  getStyle() {
    if (this.props.checked) {
      return styles.active;
    } else {
      return styles.inactive;
    }
  }
  render() {
    return (<TouchableOpacity
      style={[
      styles.button, this.getStyle()
    ]}
      onPress={this.toggle}/>);
  }
}

const styles = StyleSheet.create({
  button: {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  active: {
    backgroundColor: '#81c04d'
  },
  inactive: {
    backgroundColor: 'gray'
  }
});

export default CompleteToggle;
