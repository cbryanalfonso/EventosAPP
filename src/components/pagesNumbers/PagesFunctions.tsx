import React, { useState } from 'react'
import { Animated, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const PagesFunctions = () => {
    const [active, setActive] = useState(0)
    const [xTabOne, setxTabOne] = useState(0)
    const [xTabTwo, setxTabTwo] = useState(0)
    const [translateX, settranslateX] = useState(new Animated.Value(0))
    const [translateXTabOne, settranslateXTabOne] = useState(new Animated.Value(0))
    const [translateXTabTwo, settranslateXTabTwo] = useState(new Animated.Value(0))
    const [translateY, settranslateY] = useState(-1000)
    const width = wp(100);

    const  handleSlide = (type : number ) => {
        Animated.spring(translateX, {
            toValue: type,
            delay: 100,
            useNativeDriver: false
        }).start(); 
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    delay: 100,
                    useNativeDriver: false
                }),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    delay: 100,
                    useNativeDriver: false,
                })
            ]).start();
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    delay: 100,
                    useNativeDriver: false,
                }),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    delay: 100,
                    useNativeDriver: false,
                })
            ]).start();
        }
    }
  return (
    <View style={{ flex: 1 }}>
    <View
        style={{
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto"
        }}
    >
        <View
            style={{
                flexDirection: "row",
                marginTop: 40,
                marginBottom: 20,
                height: 36,
                position: "relative"
            }}
        >
            <Animated.View
                style={{
                    position: "absolute",
                    width: "50%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    backgroundColor: "#007aff",
                    borderRadius: 4,
                    transform: [
                        {
                            translateX
                        }
                    ]
                }}
            />
            <TouchableOpacity
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "#007aff",
                    borderRadius: 4,
                    borderRightWidth: 0,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0
                }}
                onLayout={event =>
                    setxTabOne(event.nativeEvent.layout.x)
                    
                }
                onPress={() =>
                    {
                        setActive(0)
                        handleSlide(xTabOne)
                    }
                   
                }
            >
                <Text
                    style={{
                        color: active === 0 ? "#fff" : "#007aff"
                    }}
                >
                    1
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "#007aff",
                    borderRadius: 4,
                    borderLeftWidth: 0,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0
                }}
                onLayout={event =>
                    setxTabTwo(event.nativeEvent.layout.x)
                   
                }
                onPress={() =>
                    {
                        setActive(1)
                        handleSlide(xTabTwo)
                    }
                   
                }
            >
                <Text
                    style={{
                        color: active === 1 ? "#fff" : "#007aff"
                    }}
                >
                    2
                </Text>
            </TouchableOpacity>
        </View>

        <ScrollView>
            <Animated.View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    transform: [
                        {
                            translateX: translateXTabOne
                        }
                    ]
                }}
                onLayout={event =>
                    settranslateY(event.nativeEvent.layout.height)
                   
                }
            >
                <Text>Hi, I am a cute cat</Text>
                <View style={{ marginTop: 20 }}>
                   <Text>kdfgjksd</Text>
                </View>
            </Animated.View>

            <Animated.View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    transform: [
                        {
                            translateX: translateXTabTwo
                        },
                        {
                            translateY: -translateY
                        }
                    ]
                }}
            >
                <Text>Hi, I am a cute dog</Text>
                <View style={{ marginTop: 20 }}>
                   
                   <Text>jfsadkj dfjksdf sdflkjsd</Text>
                </View>
            </Animated.View>
        </ScrollView>
    </View>
</View>
);
  }

export default PagesFunctions;
