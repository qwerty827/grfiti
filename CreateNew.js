
class CreateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View style={{backgroundColor:'white'}}>
        <Text>text</Text>
        <TextInput 
          style={[styles.input, {height: 500}]} 
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
          multiline = {true} 
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80,
    fontSize: 16,
  },
  container: {
    flex: 1,
  }
});

module.exports = CreateScreen;