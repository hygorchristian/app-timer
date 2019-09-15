import React from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

function Tab({ tab, page, isTabActive, onPressHandler, onTabLayout, styles }) {
  const { label, icon } = tab;
  const style = {
    marginHorizontal: 20,
    paddingVertical: 10,
  };
  const containerStyle = {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: styles.backgroundColor,
    opacity: styles.opacity,
    // transform: [{ scale: styles.opacity }],
  };
  const textStyle = {
    color: styles.textColor,
    fontWeight: '600',
  };

  return (
    <TouchableOpacity
      style={style}
      onPress={onPressHandler}
      onLayout={onTabLayout}
      key={page}
    >
      <Animated.View style={containerStyle}>
        <Animated.Text style={textStyle}>{label}</Animated.Text>
        <AnimatedIcon
          style={{
            color: styles.textColor,
            marginLeft: 10,
          }}
          size={16}
          name={icon}
        />
      </Animated.View>
    </TouchableOpacity>
  );
}

export default Tab;
