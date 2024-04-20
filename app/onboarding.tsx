import { View, Text, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import { slides } from '~/data/onboarding-data';
import OnboardingItem from '~/components/OnboardingItem';

const Onboarding = () => {
  return (
    <SafeAreaView className="bg-primary-200 flex-1">
      <View className="flex-1 items-center justify-center bg-yellow-200">
        <FlatList data={slides} renderItem={({ item }) => <OnboardingItem item={item} />} />
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
