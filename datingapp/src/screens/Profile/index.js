import React, { Component } from 'react';
import { 
  StyleSheet, 
  View,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;
import API from '../../api';
import { ImagePicker } from 'expo';

export default class Profile extends Component {
    
    state ={
        name: "",
        fbId: "",
        fbToken: "",
        picture: "",
        age: "",
        gender: "",
        interestedIn: "",
        image: null,
    }

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            interestedIn: "male"
          };
    }

    async componentWillMount () {
        const {params} = this.props.navigation.state;
        try {
            const {name, fbId,  fbToken, picture, gender} = params;
            this.setState({
                name, 
                fbId,
                fbToken,
                picture,
                gender
            });
            const jwt = await API.getJwt();

            // if(jwt) {
            //     console.log("USER LOGGED IN");
            //     const user = await API.getMyInfo();
            //     this.setState({
            //         name: user.name,
            //         gender: user.gender,
            //         interestedIn: user.interestedIn
            //     })
            // }
        } catch(e) {
            console.log(e);
        }
        
    }

    _checkFields() {
        const {
            name,
            fbId,
            fbToken,
            picture,
            gender,
            interestedIn
        } = this.state;
        if(!name || !gender || !interestedIn) {
            return false;
        }
        return true;
    }

    async onSubmit() {
        var filledFields = this._checkFields();
        // if(!filledFields) {
        //     alert("Missing fields.");
        //     return;
        // }
        var data = {
            name: this.state.name,
            fbId: this.state.fbId,
            fbToken: this.state.fbToken,
            picture: this.state.picture,
            gender: this.state.gender.toLowerCase(),
            interestedIn: this.state.interestedIn.toLowerCase()
        }

        try { 
            // alert(JSON.stringify(data));
            const res = await API.createUser(data);
            // Set jwt
            const jwt = res.data.token;
            await API.storeJwt(jwt);
            console.log(await API.getJwt());
            this.props.navigation.navigate("Description");

        } catch(e) {
            alert("ERROR " + e);
        }
    }

     async onValueChange1(value: string){
        this.setState({
          gender: value
        });
      }

      async onValueChange2(value: string) {
        this.setState({
          interestedIn: value
        });
      }

      _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
    
        console.log(result);        
        if (!result.cancelled) {
          this.setState({ picture: result.uri });
        }
        
        const res = await API.uploadFile(result);
      };
    
    render() {
        // alert(picture);
        let { picture } = this.state;
        return(
            
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Container>
                <Content>
                    <Text style={{flex: 2, fontSize:30, textDecorationLine: 'underline'}}> Your Name </Text>
                    <TextInput style={{flex: 1, fontSize:20}}
                        placeholder="Please enter your name"
                        value={this.state.name}
                        onChangeText={(text) => this.setState({"name": text})}
                        name="name"/>

                    {/*}Camera Roll{*/}
                    <Text style={{flex: 2, fontSize:30, textDecorationLine: 'underline'}}> Profile Picture </Text>
                    <Button 
                        iconCenter
                        onPress={this._pickImage}
                        accessibilityLabel="Upload Different Photo">
                        <Icon name='camera' />
                        <Text>Upload Photo</Text>
                        </Button>
                        {picture &&
                            <Image source={{ uri: picture }} style={{ width: 200, height: 200 }} />}

                    <Text style={{flex: 2, fontSize:30, textDecorationLine: 'underline'}}> Your Age </Text>
                    <TextInput style={{flex: 1, fontSize:20}}
                        placeholder="Please enter your age"
                        value={this.state.age}
                        onChangeText={(text) => this.setState({"age": text})}
                        name="age"/>

                    <Text style={{flex: 2, fontSize:30, textDecorationLine: 'underline'}}> Your Gender </Text>
                    <Form>
                        <Picker
                        iosHeader="Select one"
                        mode="dropdown"
                        selectedValue={this.state.gender}
                        onValueChange={this.onValueChange1.bind(this)}
                        >
                        <Item label="Male" value="male" />
                        <Item label="Female" value="female" />
                        </Picker>
                    </Form>
                    
                
                <Text style={{flex: 2, fontSize:30, textDecorationLine: 'underline'}}> Match's Gender</Text>
                    <Form>
                        <Picker
                        iosHeader="Select one"
                        mode="dropdown"
                        selectedValue={this.state.interestedIn}
                        onValueChange={this.onValueChange2.bind(this)}
                        >
                        <Item label="Male" value="male" />
                        <Item label="Female" value="female" />
                        </Picker>
                    </Form>
                    
                
                    <Button 
                        block
                        onPress={this.onSubmit}
                        accessibilityLabel="Update Profile">
                        <Text>Update Profile</Text>
                    </Button>
                    </Content>
                </Container>
            </ScrollView>
            
        )
    }
}

Profile.navigationOptions = {
    title: "Profile",
    headerLeft: null
}

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 10, backgroundColor: '#228aff'
    },
    contentContainer: {
        paddingVertical: 25,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
      }
})