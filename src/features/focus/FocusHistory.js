import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, SafeAreaView } from "react-native";
import { TextInput } from "react-native-paper";

import { RoundedButton } from "../../components/RoundedButton";
import { fontSizes, spacing } from "../../utils/sizes";

const HistoryItem = ({ item, index }) => {
  return (
    <Text style={styles(item.status).historyItem}>
      {/* {JSON.stringify(item)}*/}
      {item.subject}
    </Text>
  );
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };
  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: "center" }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles().title}>Things we focused on</Text>
            <FlatList
              style={{ width: "100%", height: "100%" }}
              contentContainerStyle={{ flex: 1, alignItems: "center" }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <View style={styles().clearContainer}>
              <RoundedButton
                size={75}
                title="clear"
                onPress={() => {
                  onClear();
                }}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = (status) =>
  StyleSheet.create({
    historyItem: {
      color: status < 1 ? "red" : "green",
      fontSize: fontSizes.md,
    },
    title: {
      color: "white",
      fontSize: fontSizes.lg,
    },
    clearContainer: {
      alignItems: "center",
      padding: spacing.md,
    },
  });
