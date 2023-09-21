import React, { useState, useEffect } from "react";
import { View, TextInput, Text, FlatList, StyleSheet } from "react-native";
import BookItem from "./components/BookItem";
import * as Font from "expo-font";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=30")
      .then((response) => response.json())
      .then((data) => {
        setAllBooks(data.slice(0, 30));
        setFilteredBooks(urduBookTitles);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  async function loadCustomFont() {
    await Font.loadAsync({
      customFont: require("./utils/UrduFont.ttf"),
    });
  }

  useEffect(() => {
    loadCustomFont();
  }, []);

  const urduBookTitles = [
    "کتاب 1",
    "کتاب 2",
    "کتاب 3",
    "کتاب 4",
    "کتاب 5",
    "کتاب 6",
    "کتاب 7",
    "کتاب 8",
    "کتاب 9",
    "کتاب 10",
    "کتاب 11",
    "کتاب 12",
    "کتاب 13",
    "کتاب 14",
    "کتاب 15",
    "کتاب 16",
    "کتاب 17",
    "کتاب 18",
    "کتاب 19",
    "کتاب 20",
    "کتاب 21",
    "کتاب 22",
    "کتاب 23",
    "کتاب 24",
    "کتاب 25",
    "کتاب 26",
    "کتاب 27",
    "کتاب 28",
    "کتاب 29",
    "کتاب 30",
  ];

  useEffect(() => {
    const filtered = allBooks.filter((urduBookTitles) =>
      urduBookTitles.title.toUpperCase().includes(searchText.toUpperCase())
    );
    setFilteredBooks(filtered);
  }, [searchText, allBooks]);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Books</Text>
      </View>

      <View style={styles.wrapper}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Books"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={filteredBooks}
            numColumns={3}
            renderItem={({ item, index }) => (
              <BookItem title={urduBookTitles[index]} imageUri={item.url} />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#cccccc31",
  },
  inputContainer: {
    marginTop: 15,
    marginBottom: 10,
  },
  searchInput: {
    width: 350,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 10,
  },
  listContainer: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 100,
  },
});

export default App;
