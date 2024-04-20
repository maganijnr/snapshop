import { View, Text, ImageBackgroundProps } from 'react-native';
import React, { FC } from 'react';

interface ItemProps {
  id: number;
  title: string;
  description: string;
  imageUrl: ImageBackgroundProps;
}

const OnboardingItem: FC<{ item: ItemProps }> = () => {
  return (
    <View>
      <Text>OnboardingItem</Text>
    </View>
  );
};

export default OnboardingItem;
