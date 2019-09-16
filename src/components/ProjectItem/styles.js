import styled from 'styled-components/native';
import SliderBase from 'react-native-slider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors, {
  primary,
  textblue,
  textGreen,
  textOrange,
  textRed,
} from '~/utils/colors';

export const ProjetoContainer = styled.View`
  height: 80px;
  width: 100%;
  background-color: white;
  elevation: 4;
  margin-bottom: 12px;
  border-radius: 5px;
  overflow: hidden;
`;

export const ProjectInfo = styled.View`
  flex: 1;
  overflow: hidden;
  flex-direction: row;
`;

export const ProjectControl = styled.TouchableOpacity`
  height: 80px;
  width: 80px;
  justify-content: center;
  align-items: center;
`;

export const ProjectAction = styled(Icon).attrs({
  size: 24,
  color: primary,
  name: ({ isPlaying }) => (isPlaying ? 'pause' : 'play-arrow'),
})``;

export const Slider = styled(SliderBase).attrs({
  minimumTrackTintColor: '#00ac56',
  maximumTrackTintColor: '#cccccc',
  animateTransitions: true,
  thumbStyle: {
    height: 0,
    width: 0,
  },
  trackStyle: {
    height: 4,
    borderRadius: 0,
    overflow: 'hidden',
  },
})`
  height: 4px;
  overflow: hidden;
`;

export const Info = styled.View`
  flex: 1;
  padding: 12px;
  justify-content: space-between;
`;

export const ProjetoNome = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Tempo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Restante = styled.Text`
  font-size: 16px;
  color: ${textOrange};
  margin-left: 10px;
`;

export const Atual = styled.Text`
  font-size: 16px;
  color: ${textblue};
`;

export const Money = styled.Text`
  flex: 1;
  text-align: right;
  font-size: 18px;
  color: ${textGreen};
`;
