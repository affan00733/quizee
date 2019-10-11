import React, { Component } from 'react';
import { Image, WebView, ScrollView, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, View } from 'native-base';
import { Overlay } from 'react-native-elements';
const { height, width } = Dimensions.get('window')

export default class CardImageExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vissible: false,
            news: ''
        }
    }
    render() {
        return (

            <Container style={{ padding: 5, paddingLeft: 10, paddingRight: 10 }}>
                {/* <Header /> */}
                <ScrollView style={{ flex: 1, height: height * 0.8, width: width }}>
                    <SafeAreaView>
                        <Content>
                            <TouchableOpacity onPress={() => this.setState({ vissible: true, news: 'https://www.ndtv.com/india-news/surat-coaching-centre-fire-tyres-for-seats-made-fire-spread-fast-official-2043311' })}>

                                <Card >
                                    <CardItem>
                                        <Left>
                                            <Thumbnail source={require('../news/1.jpg')} />
                                            <Body>
                                                <Text>Surat Coaching Centre</Text>
                                                <Text note>Surat Coaching Centre</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Image source={require('../news/1.jpg')} style={{ height: 200, width: null, flex: 1 }} />

                                    </CardItem>
                                    <CardItem>
                                        <Left>
                                            <Text></Text>
                                        </Left>
                                        <Body>

                                        </Body>
                                        <Right>
                                        </Right>
                                    </CardItem>

                                </Card>
                            </TouchableOpacity>

                            {/*  */}

                            <TouchableOpacity onPress={() => this.setState({ vissible: true, news: 'https://www.isrmag.com/fire-safety-regulations-in-india/' })}>

                                <Card >
                                    <CardItem>
                                        <Left>
                                            <Thumbnail source={require('../news/2.jpg')} />
                                            <Body>
                                                <Text>Fire Safety Regulations In India</Text>
                                                <Text note>Fire Safety Regulations In India</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Image source={require('../news/2.jpg')} style={{ height: 200, width: null, flex: 1 }} />

                                    </CardItem>
                                    <CardItem>
                                        <Left>
                                            <Text></Text>
                                        </Left>
                                        <Body>

                                        </Body>
                                        <Right>
                                        </Right>
                                    </CardItem>

                                </Card>
                            </TouchableOpacity>
                            {/*  */}
                            <TouchableOpacity onPress={() => this.setState({ vissible: true, news: 'https://m.timesofindia.com/city/mumbai/mumbai-1-dies-as-building-crashes-in-abdul-rehman-street/amp_articleshow/70606666.cms' })}>

                                <Card >
                                    <CardItem>
                                        <Left>
                                            <Thumbnail source={require('../news/3.jpg')} />
                                            <Body>
                                                <Text>Mumbai: 1 dies as building crashes in Abdul Rehman Street</Text>
                                                <Text note>Mumbai: 1 dies as building crashes in Abdul Rehman Street</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Image source={require('../news/3.jpg')} style={{ height: 200, width: null, flex: 1 }} />

                                    </CardItem>
                                    <CardItem>
                                        <Left>
                                            <Text></Text>
                                        </Left>
                                        <Body>

                                        </Body>
                                        <Right>
                                        </Right>
                                    </CardItem>

                                </Card>
                            </TouchableOpacity>
                            {/*  */}
                            <TouchableOpacity onPress={() => this.setState({ vissible: true, news: 'https://www.synergyfireengineering.co.uk/blog/category/fire-safety' })}>

                                <Card >
                                    <CardItem>
                                        <Left>
                                            <Thumbnail source={require('../news/4.jpg')} />
                                            <Body>
                                                <Text>Synergy Fire Engineering BLOG</Text>
                                                <Text note>Synergy Fire Engineering BLOG</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Image source={require('../news/4.jpg')} style={{ height: 200, width: null, flex: 1 }} />

                                    </CardItem>
                                    <CardItem>
                                        <Left>
                                            <Text></Text>
                                        </Left>
                                        <Body>

                                        </Body>
                                        <Right>
                                        </Right>
                                    </CardItem>

                                </Card>
                            </TouchableOpacity>
                            {/*  */}
                            <TouchableOpacity onPress={() => this.setState({ vissible: true, news: 'https://m.timesofindia.com/city/delhi/2-killed-as-fire-breaks-out-in-karol-baghs-hotel/amp_articleshow/67951774.cms' })}>

                                <Card >
                                    <CardItem>
                                        <Left>
                                            <Thumbnail source={require('../news/5.jpeg')} />
                                            <Body>
                                                <Text>17 killed as massive fire breaks out at hotel in Delhi's Karol Bagh</Text>
                                                <Text note>17 killed as massive fire breaks out at hotel in Delhi's Karol Bagh</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Image source={require('../news/5.jpeg')} style={{ height: 200, width: null, flex: 1 }} />

                                    </CardItem>
                                    <CardItem>
                                        <Left>
                                            <Text></Text>
                                        </Left>
                                        <Body>

                                        </Body>
                                        <Right>
                                        </Right>
                                    </CardItem>

                                </Card>
                            </TouchableOpacity>
                            {/*  */}
                            <Overlay
                                isVisible={this.state.vissible}
                                onBackdropPress={() => this.setState({ vissible: false })}
                                fullScreen={true}
                            >
                                <WebView
                                    source={{ uri: this.state.news }}
                                    style={{}}
                                />
                            </Overlay>

                        </Content>
                    </SafeAreaView>
                </ScrollView>
            </Container>

        );
    }
}