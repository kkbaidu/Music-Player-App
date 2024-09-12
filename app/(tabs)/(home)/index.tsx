import { Image, View, Text, Pressable, ScrollView } from "react-native";
import { MusicCard, FavoriteMusicCard } from "@/components/MusicCard";
import { recentlyPlayedSongs, mightLikeSongs } from "@/utils/data";

export default function HomeScreen() {
  return (
    <ScrollView className="flex flex-col">
      <View className="relative h-[60vh]">
        <Image
          className="w-screen h-[100%]"
          source={require("@/assets/images/podcastImg.png")}
        />
        <View className="absolute flex flex-row bottom-10 left-5 w-full space-x-4">
          <Image
            className="w-[150px] h-[150px]"
            source={require("@/assets/images/podcastImg.png")}
          />
          <View>
            <Text className="text-white text-[30px] font-extrabold">
              Podcast Name
            </Text>
            <Text className="text-white text-[15px]">By Artiste name</Text>
            <View className="bg-white rounded-full mt-2 w-[100px] h-[40px] flex justify-center items-center">
              <Pressable>
                <Text>Featured</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View className="mt-5 mx-2">
        <Text className="text-white text-[22px]">Recently played</Text>
        <ScrollView horizontal={true} className="mt-4">
          {recentlyPlayedSongs.map((item, index) => (
            <MusicCard
              key={index}
              title={item.title}
              image={item.image}
              favorite={item.favorite}
            />
          ))}
        </ScrollView>
      </View>
      <View className="mt-10 mx-2">
        <Text className="text-white text-[22px]">You might like</Text>
        <ScrollView horizontal={true} className="mt-4 mb-10">
          {mightLikeSongs.map((item, index) => (
            <MusicCard
              key={index}
              title={item.title}
              image={item.image}
              favorite={item.favorite}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
