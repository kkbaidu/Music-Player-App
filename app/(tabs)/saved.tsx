import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  View,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FavoriteMusicCard } from "@/components/MusicCard";
import { recentlyPlayedSongs } from "@/utils/data";

export default function TabTwoScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(recentlyPlayedSongs);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const filtered = recentlyPlayedSongs.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(recentlyPlayedSongs);
    }
  };
  return (
    <View className="flex-1 p-4">
      <View className="relative my-4">
        <TextInput
          className="bg-gray-200 p-3 rounded-3xl text-black"
          placeholder="Search..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <TouchableOpacity
          className="absolute right-3 top-3"
          onPress={() => handleSearch(searchQuery)}
        >
          <Ionicons name="search" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <FavoriteMusicCard
            title={item.title}
            image={item.image}
            favorite={item.favorite}
          />
        )}
        keyExtractor={(item) => item.title}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    justifyContent: "space-between",
  },
  gridItem: {
    flex: 1,
    margin: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
