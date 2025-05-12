import React from 'react';
import { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Profile from './Profile';

type HeaderComponentProps = {
  children?: ReactNode | ReactNode[];
};

const HeaderComponent: React.FC<HeaderComponentProps> = (props: HeaderComponentProps) => {
  const { children } = props;
  const childrenArray = React.Children.toArray(children);
  return (
    <View style={styles.container}>
      <View>
        <Profile />
      </View>
      <View style={styles.childrenContainer}>
        {childrenArray.length > 0 &&
          childrenArray.map((child, index) => (
            <View key={index}>{typeof child === 'string' ? <Text>{child}</Text> : child}</View>
          ))}
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 16,
    marginVertical: 24,
    marginHorizontal: 24,
  },
  childrenContainer: {
    flexDirection: 'row',
    gap: 1,
  },
});
