import { COLORS, SIZES } from "@/constants";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import styles from "./popularjobs.style";
import PopularJobCard from "@/components/common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";
import { useRouter } from "expo-router";

const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_page: 1,
  });
  console.log(data);

  const renderItem = ({ item }) => <PopularJobCard item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Text style={styles.headerTitle}>Popular Jobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show all</Text>
      </TouchableOpacity>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data} // Pass the correct job data from the useFetch hook
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()} // Use job ID as key
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
