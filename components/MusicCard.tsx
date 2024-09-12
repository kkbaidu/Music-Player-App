import { View, Image, Text } from "react-native";
import { MusicCardProps } from "@/utils/types";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { ImageSourcePropType } from "react-native";

const MusicCard: React.FC<MusicCardProps> = ({ title, image }) => {
  return (
    <View className="mx-2">
      <Link href="/song-preview">
        <View className="flex flex-1 flex-col">
          <Image className="w-[140px] h-[140px] rounded-md" source={image} />
          <Text className="text-white text-[18px] mt-2 ml-1">{title}</Text>
        </View>
      </Link>
    </View>
  );
};

const FavoriteMusicCard: React.FC<MusicCardProps> = ({ title, image }) => {
  return (
    <View className="mx-2">
      <Link href={{ pathname: "/song-preview" }}>
        <View className="flex flex-1 flex-col">
          <View className="relative">
            <Image className="w-[140px] h-[140px] rounded-md" source={image} />
            <View className="absolute top-1 right-1">
              <Ionicons name="heart" size={24} color="#07BFBC" />
            </View>
          </View>
          <Text className="text-white text-[18px] mt-2 ml-1">{title}</Text>
        </View>
      </Link>
    </View>
  );
};

const EpisodeCard: React.FC<MusicCardProps> = (song) => {
  return (
    <View>
      <Link href={{ pathname: "/song-preview" }}>
        <View className="flex flex-row">
          <View className="relative">
            <Image
              className="w-[140px] h-[140px] rounded-md"
              source={song.image}
            />
            <View className="bg-[#07BFBC] rounded-full p-1">
              <Ionicons size={28} name="play" color={"white"} />
            </View>
          </View>
          <Text className="text-white text-[18px] mt-2 ml-1">{song.title}</Text>
        </View>
      </Link>
    </View>
  );
};

export { MusicCard, FavoriteMusicCard, EpisodeCard };
