import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet,Image, Dimensions, ToastAndroid, View, ScrollView, SafeAreaView } from 'react-native'
import { Container, Header, DeckSwiper, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Item } from 'native-base';
import { Overlay } from 'react-native-elements';
import Video from 'react-native-video';

const cards = [
  {
    text: 'Fire Extinguisher',
    name: 'One',
    image: require('../assets/1.jpg'),
  },
  {
    text: 'Fire Extinguisher',
    name: 'One',
    image: require('../assets/2.png'),
  },
  {
    text: 'Fire Extinguisher',
    name: 'One',
    image: require('../assets/3.jpeg'),
  },
  {
    text: 'Fire Extinguisher',
    name: 'One',
    image: require('../assets/4.jpg'),
  },


];
const height = Dimensions.get('window').height;
export default class FloatingLabelExample extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      vissible : false ,
    }
  }

  render() {
    return (

      <ScrollView style={{
        flex: 1
      }}>
        <SafeAreaView>
          <Container style={{
            paddingLeft: 15, paddingRight: 15

          }}>

            <DeckSwiper
              dataSource={cards}
              renderItem={item =>
                <Card style={{ elevation: 3 }}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={require('../assets/fire.png')} />
                      <Body>
                        <Text style ={{fontWeight:'bold'}} >{item.text}</Text>
                        <Text note>F A S S I</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image style={{ height: height * 0.6, flex: 1 }} source={item.image} />
                  </CardItem>

                </Card>
              }
            />
          </Container>
          <Container style={{
            paddingLeft: 15, paddingRight: 15, marginTop: - height * 0.2, marginBottom: - height * 0.5

          }}>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../assets/fire.png')} />
                  <Body>
                    <Text style={{ fontWeight: 'bold' }} >Introduction</Text>
                    <Text note>F A S S I </Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>

                <Body>

                  <Text>A fire extinguisher is an active fire protection device used to extinguish or control small fires,{"\n"}</Text>
                  <Text> often in emergency situations. ...{"\n"}</Text>
                  <Text> Cartridge-operated extinguishers contain the expellant gas in a separate cartridge that is punctured prior to discharge,{"\n"}</Text>
                  <Text>exposing the propellant to the extinguishing agent.</Text>
                </Body>

              </CardItem>
            </Card>
          </Container>

          <Container style={{
            paddingLeft: 15, paddingRight: 15

          }}>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../assets/fire.png')} />
                  <Body>
                    <Text style={{ fontWeight: 'bold' }} >Steps to Use Fire Extinguisher</Text>
                    <Text note>F A S S I </Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
            
                <Body>
                  <Text><Text style={{ fontWeight: 'bold' }}> 1 )</Text>  Fire extinguishers should not be used by people who have not been trained.
                  {"\n\n"} Before tackling a fire with a fire extinguisher make sure you or{"\n\n"}
                    someone else has sounded the fire alarm and that you have a safe evacuation route.</Text>
                  <Text>{"\n"}<Text style={{ fontWeight: 'bold' }}> 2 )</Text>  Using the correct type of extinguisher for the fire, use the four-step PASS technique.</Text>
                  <Text> {"\n"}<Text style={{ fontWeight: 'bold' }}> 3 )</Text>  Pull: Pull the pin, this will break the tamper seal.</Text>
                    <Text>{"\n"}<Text style={{ fontWeight: 'bold' }}> 4 )</Text> Aim: Aim low, pointing the nozzle or hose at the base of the fire. {"\n\n"}Do not touch the horn on a CO2 extinguisher,{"\n"} it gets very cold and can damage the skin.</Text>
                    <Text>{"\n"}<Text style={{ fontWeight: 'bold' }}> 5 )</Text>  Squeeze: Squeeze the handle to release the extinguishing agent.</Text>
                    <Text>{"\n"}<Text style={{ fontWeight: 'bold' }}> 6 )</Text>  Sweep: Sweep from side to side at the base of the fire, the fuel source, until the fire is out.</Text>
              </Body>

            </CardItem>
          </Card>
          <Container style={{justifyContent : 'center',alignContent : 'center',alignItems : 'center'}}>
            <Content>
           
            <Button onPress={()=>this.setState({vissible : true})}  iconLeft transparent>
            <Icon name='play' />
            <Text>Play Video</Text>
          </Button>
          <Overlay
isVisible={this.state.vissible}
onBackdropPress={() => this.setState({ vissible: false })}
// width="auto"
// height="auto"
>
<Video source={require('../video/fireEx.mp4')}   
       ref={(ref) => {
         this.player = ref
       }}               
       fullscreenOrientation='landscape'
       fullscreenAutorotate={true}
       fullscreen={true}
       resizeMode='stretch'             
       style={styles.backgroundVideo} />
</Overlay> 
            </Content>
          </Container>
        </Container>
        </SafeAreaView>
        </ScrollView>


        );
      }
    
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});