import type { AdornmentSide, AdornmentType } from './enums';

export type AdornmentConfig = {
    side: AdornmentSide;
    type: AdornmentType;
};
export type AdornmentStyleAdjustmentForNativeInput = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    adornmentStyleAdjustmentForNativeInput: Array<{ paddingRight: number; paddingLeft: number } | {}>;
};
