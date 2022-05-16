import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";

import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <StatusBar style="light" />
      <ScrollView
        style={{
          backgroundColor: "black",
          marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
          height: "100%",
        }}
      >
        <View style={styles.header}>
          <Image style={styles.logo} source={require("./assets/logo.png")} />
        </View>
        <View style={styles.container}>
          <Text style={styles.h1}>Interstellar</Text>
          <View style={styles.infos}>
            <Text style={styles.details}>2014 </Text>
            <Text style={styles.details}>PG-13 </Text>
            <Text style={styles.details}>2h 49min </Text>
            <Text style={styles.details}>Adventure, Drame, Sci-Fi </Text>
          </View>
          <View style={styles.synopsis}>
            <Image
              style={styles.poster}
              source={require("./assets/film.jpg")}
            />
            <View>
              <Text style={styles.synopsysText}>
                A team of explorators travel through a wormwhole in space in an
                attempt to ensure humanity's survival.
              </Text>
              <TouchableOpacity style={styles.synopsisBtn}>
                <Text style={styles.textBtn}>+ ADD TO WATCHLIST</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.rates}>
            <View style={styles.ratesItem}>
              <View>
                <AntDesign name="star" size={24} color="gold" />
              </View>
              <View>
                <Text style={styles.notation}>8.6/10</Text>
              </View>
              <View>
                <Text style={styles.views}>1.1M</Text>
              </View>
            </View>
            <View style={styles.ratesItem}>
              <View>
                <AntDesign name="staro" size={24} color="white" />
              </View>
              <View>
                <Text style={styles.rateThis}>RATE THIS</Text>
              </View>
            </View>
            <View style={styles.ratesItem}>
              <View>
                <Text style={styles.metascoreRate}>74</Text>
              </View>
              <View>
                <Text style={styles.metascore}>Metascore</Text>
              </View>
              <View>
                <Text style={styles.critics}>46 critic reviews</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.h2}>Top Billet Cast</Text>
            <TouchableOpacity>
              <Text style={styles.link}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ flexDirection: "row" }}
          >
            <View style={styles.actor}>
              <Image
                style={styles.actorImg}
                source={require("./assets/matthew.jpg")}
              />
              <View style={{ padding: 8 }}>
                <Text style={styles.actorName} numberOfLines={1}>
                  Matthew McConaughey
                </Text>
                <Text style={styles.actorCharacter}>Cooper</Text>
              </View>
            </View>
            <View style={styles.actor}>
              <Image
                style={styles.actorImg}
                source={require("./assets/anne.jpg")}
              />
              <View style={{ padding: 8 }}>
                <Text style={styles.actorName} numberOfLines={1}>
                  Anne Hathaway
                </Text>
                <Text style={styles.actorCharacter}>Brand</Text>
              </View>
            </View>
            <View style={styles.actor}>
              <Image
                style={styles.actorImg}
                source={require("./assets/jessica.jpg")}
              />
              <View style={{ padding: 8 }}>
                <Text style={styles.actorName} numberOfLines={1}>
                  Jessica Chastain
                </Text>
                <Text style={styles.actorCharacter}>Murph</Text>
              </View>
            </View>
            <View style={styles.actor}>
              <Image
                style={styles.actorImg}
                source={require("./assets/mackenzie.jpg")}
              />
              <View style={{ padding: 8 }}>
                <Text style={styles.actorName} numberOfLines={1}>
                  Mackenzie Foy
                </Text>
                <Text style={styles.actorCharacter}>Murph 10yrs.</Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.credits}>
            <Text style={styles.h3}>Director</Text>
            <Text style={styles.creditsName}>Christopher Nolan</Text>
          </View>
          <View style={styles.credits}>
            <Text style={styles.h3}>Writers</Text>
            <Text style={styles.creditsName}>
              Jonathan Nolan (written by) and Christopher Nolan (written by)
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    padding: 12,
    marginTop: 8,
  },

  header: {
    backgroundColor: "#121212",
  },

  logo: {
    height: 49,
    width: 100,
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 12,
  },

  h1: {
    color: "white",
    fontSize: 40,
    marginBottom: 8,
  },

  h2: {
    color: "white",
    fontSize: 24,
  },

  h3: {
    color: "white",
    fontSize: 16,
    lineHeight: 24,
  },

  link: {
    color: "#136CB2",
  },
  infos: {
    flexDirection: "row",
  },

  details: {
    color: "lightgrey",
  },

  synopsis: {
    marginTop: 28,
    flexDirection: "row",
  },

  poster: {
    width: 120,
    height: 200,
    marginRight: 12,
  },

  synopsysText: {
    color: "white",
    width: 220,
    lineHeight: 20,
    marginBottom: 12,
  },

  synopsisBtn: {
    backgroundColor: "#136CB2",
    alignItems: "center",
    padding: 10,
    borderRadius: 4,
  },

  textBtn: {
    color: "white",
    fontWeight: "bold",
  },

  rates: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  ratesItem: {
    alignItems: "center",
  },

  notation: {
    color: "white",
    marginTop: 4,
    marginBottom: 4,
  },

  rateThis: {
    color: "white",
    marginTop: 4,
    marginBottom: 4,
  },

  metascoreRate: {
    color: "white",
    backgroundColor: "green",
    fontSize: 16,
    padding: 4,
  },

  metascore: {
    color: "white",
    marginTop: 4,
    marginBottom: 4,
  },

  views: {
    color: "grey",
    fontSize: 12,
  },

  critics: {
    color: "grey",
    fontSize: 12,
  },

  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 12,
    marginTop: 12,
  },

  actor: {
    backgroundColor: "#1A1A1A",
    borderRadius: 4,
    marginRight: 8,
    width: 140,
  },

  actorImg: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  actorName: {
    color: "white",
  },

  actorCharacter: {
    color: "lightgrey",
  },

  credits: {
    marginTop: 16,
  },

  creditsName: {
    color: "lightgrey",
  },
});
