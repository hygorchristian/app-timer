import styled from 'styled-components/native';
import MD from 'react-native-vector-icons/MaterialIcons';
import Colors, { secondary, textGreen, textRed } from '~/utils/colors';
import SliderBase from 'react-native-slider';

export const Container = styled.View`
  width: 100%;
`;

export const Controllers = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  height: ${({ large }) => (large ? 48 : 38)};
  width: ${({ large }) => (large ? 48 : 38)};
  border-radius: ${({ large }) => (large ? 24 : 19)};
  elevation: 4;
  background-color: ${({ large }) => (large ? secondary : '#ffffff')};
  margin-horizontal: 15px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(MD).attrs({
  size: 24,
})`
  color: ${({ large }) => (large ? '#ffffff' : secondary)};
`;

export const Atual = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${textGreen};
  margin-right: 15px;
  flex: 1;
  text-align: center;
`;

export const Restante = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${textRed};
  flex: 1;
  text-align: center;
`;

export const Slider = styled(SliderBase).attrs({
  minimumTrackTintColor: textGreen,
  maximumTrackTintColor: '#cccccc',
  thumbStyle: {
    height: 0,
    width: 0,
  },
})`
  margin-top: -10px;
`;
