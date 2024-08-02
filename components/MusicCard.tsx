import { View, Image, Text } from "react-native";
import { MusicCardProps } from "@/utils/types";
import { Ionicons } from "@expo/vector-icons";

const MusicCard: React.FC<MusicCardProps> = ({ title, image }) => {
  return (
    <View className="mx-2">
      <Image className="w-[140px] h-[140px] rounded-md" source={image} />
      <Text className="text-white text-[18px] mt-2 ml-1">{title}</Text>
    </View>
  );
};

const FavoriteMusicCard: React.FC<MusicCardProps> = ({ title, image }) => {
  return (
    <View className="mx-2">
      <View className="relative">
        <Image className="w-[140px] h-[140px] rounded-md" source={image} />
        <View className="absolute top-1 right-1">
          <Ionicons name="heart" size={24} color="#07BFBC" />
        </View>
      </View>
      <Text className="text-white text-[18px] mt-2 ml-1">{title}</Text>
    </View>
  );
};

export { MusicCard, FavoriteMusicCard };
