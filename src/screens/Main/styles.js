import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components';

const LOGO_HEIGHT = Dimensions.get('window').height * 0.11;
const LOGO_WIDTH = LOGO_HEIGHT * (1950 / 662);

export const Container = styled.View`
  flex: 1;
  margin-top: -16px;
`;
