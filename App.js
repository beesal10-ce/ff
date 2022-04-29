import { View, Text, Image, ScrollView } from "react-native";
import { useState,useEffect } from "react";
import { fetchMovies } from "./Api/index";
import { TextInput } from "react-native-paper";
import MovieCard from "./MovieCard";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("AAA");
  useEffect(() => {
    const getMovies = async () => setMovies(await fetchMovies(searchMovie));
    getMovies();
  }, []);
  const Search = async () => {
    setMovies(await fetchMovies(searchMovie));
    setSearchMovie("");
  };
  return (
    <>
    <View>
    <Text style={{fontSize: 22, marginTop:40, alignItems:'center', textAlign:'center', }}> ICS 342 React Native Movie Finder </Text>

    </View>
    {Object.keys(movies).length > 0 && (
    <View>
      <TextInput
      placeholder="Search movies here"
      value ={searchMovie}
      onChangeText = {(text) => setSearchMovie(text)}
      style ={{
        marginTop: 15,
      }}
      left={<TextInput.Icon name="magnify" onPress={Search} />}
      onSubmitEditing={Search}
      />
       <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
            }}
            
          >
            {movies.Search.map((movie, i) => (
              <MovieCard movie={movie} key={i} />
            ))}
          
          </ScrollView>
          
    </View>
    )}
    </>
  );
}
