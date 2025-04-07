import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable, FlatList, ActivityIndicator } from 'react-native';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);

  const limit = 10;

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(['All', ...data]);
      });

    fetchProducts('All', 0);
  }, []);

  const fetchProducts = (category, skipValue) => {
    setLoading(true);
    let url = '';

    if (category === 'All') {
      url = `https://dummyjson.com/products?limit=${limit}&skip=${skipValue}`;
    } else {
      url = `https://dummyjson.com/products/category/${category}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => {
        let items = category === 'All' ? data.products : data.products;
        if (skipValue === 0) {
          setProducts(items);
        } else {
          setProducts(prev => [...prev, ...items]);
        }
        setLoading(false);
      });
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSkip(0);
    fetchProducts(category, 0);
  };

  const loadMore = () => {
    if (selectedCategory === 'All') {
      const newSkip = skip + limit;
      setSkip(newSkip);
      fetchProducts('All', newSkip);
    }
  };

  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <ScrollView horizontal style={{ padding: 10 }}>
        {categories.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => handleCategorySelect(category)}
            style={{
              backgroundColor: selectedCategory === category ? '#ccc' : 'orange',
              padding: 10,
              marginRight: 10,
              borderRadius: 10,
            }}
          >
            <Text>{category}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 10 }}
        renderItem={({ item }) => (
          <View style={{
            backgroundColor: '#f0f0f0',
            padding: 10,
            marginBottom: 10,
            borderRadius: 10
          }}>
            <Text>{item.title}</Text>
            <Text>₹ {item.price}</Text>
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator size="small" /> : null}
      />
    </View>
  );
};

export default App;
