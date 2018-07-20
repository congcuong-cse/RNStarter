import {StyleSheet, TextInput, View} from 'react-native';
import React, {PureComponent} from 'react';

interface Props {
  addTodo : (task : string) => void
}

interface State {
  focused : boolean,
  value : string | undefined
}

class AddTodoRow extends PureComponent < Props,
State > {

  state : State = {
    focused: false,
    value: undefined
  };

  onSubmit = () => {
    if (this.state.value) {
      this
        .props
        .addTodo(this.state.value);
    }
  }
  onText = (text : string) => {
    this.state.value = text;
    this.setState(this.state);
  }
  onFocused = () => {
    console.log('focused');
    this.state.focused = true;
    this.setState(this.state);
  }
  onBlurred = () => {
    this.state.focused = false;
    this.setState(this.state);
  }
  render() {
    var {addTodo} = this.props;

    return (
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          onChangeText={this.onText}
          onSubmitEditing={this.onSubmit}
          onFocus={this.onFocused}
          onBlur={this.onBlurred}
          placeholder="Add a new todo..."></TextInput>
        {this.renderBorder()}
      </View>
    );
  }
  renderBorder() {
    if (this.state.focused) {
      return (
        <View style={styles.border}></View>
      );
    }
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'column',
    paddingLeft: 40,
    paddingRight: 10
  },
  input: {
    height: 40,
    flex: 1
  },
  border: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray'
  }
});

export default AddTodoRow;
