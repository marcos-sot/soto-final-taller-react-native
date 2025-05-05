import { View, StyleSheet } from "react-native";
import { HomeHeader } from "./components/HomeHeader";
import { HomeBanner } from "./components/HomeBanner";
import { ContentCategories } from "./components/ContentCategories";

export function HomeScreen() {
    return (
      <View style={styles.screenContainer}>
          <View style={styles.separator}></View>
          <HomeHeader />
          <HomeBanner />
          <ContentCategories />
      </View>
    );
}


const styles = StyleSheet.create({
    screenContainer: { flex: 1, backgroundColor: "#1A1F2C", padding: 8, gap: 20, },
    separator: { height: 4 },
});