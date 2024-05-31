import { SPACING } from '../theme';
import { Dimensions, PixelRatio, Platform } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export const spacing = (value: number): number => {
    return moderateScale(value * SPACING);
};

const { width: screenWidth } = Dimensions.get('window');
const isIOS = Platform.OS === 'ios';

export const ft = (fontSize) => {
    const scale = screenWidth / 414;
    const newSize = fontSize * scale;
    if (isIOS) {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};
