import React, { useState } from "react";
import { Image, View, Text, Pressable } from "react-native";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const SongPreview = () => {
  const navigation = useNavigation();
  const [showFullText, setShowFullText] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleReadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <View className="">
      <View className="relative h-[50vh]">
        <View className="h-[40px] absolute top-0 left-0 z-50">
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons size={28} name="arrow-back" color={"white"} />
          </Pressable>
        </View>
        <Image
          className="w-screen h-[100%] opacity-60"
          source={require("@/assets/images/podcastImg.png")}
        />
      </View>
      <View className="flex flex-col justify-center bottom-5 w-full mt-4">
        <View className="">
          <Text className="text-white text-[30px] text-center font-extrabold">
            This must be the place
          </Text>
          <Text className="text-white text-center text-[15px]">
            By Anna Jones
          </Text>
          <View className="flex flex-row items-center justify-center space-x-2 mt-4">
            <View className="bg-[#3E3D3D] rounded-full p-1">
              <Ionicons size={38} name="menu" color={"white"} />
            </View>
            <View className="bg-[#3E3D3D] rounded-full p-1">
              <Pressable onPress={() => setIsFavorite(!isFavorite)}>
                <Ionicons
                  size={38}
                  name={isFavorite ? "heart" : "heart-outline"}
                  color={"white"}
                />
              </Pressable>
            </View>
            <View className="bg-[#07BFBC] rounded-full p-1">
              <Ionicons size={28} name="play" color={"white"} />
            </View>
          </View>
        </View>
      </View>
      <View className="px-4 mt-4">
        <Text
          className="text-white text-[15px]"
          numberOfLines={showFullText ? 0 : 3}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
        <Pressable onPress={handleToggleReadMore}>
          <Text className="text-[#07BFBC] text-start mt-2">
            {showFullText ? "Read less" : "Read more"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SongPreview;
