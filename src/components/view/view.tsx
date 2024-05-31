// import isEqual from 'lodash.isequal';
import React from 'react';
import { View as RNView, ViewProps as RNViewProps, ViewStyle } from 'react-native';
import { spacing } from 'utils/responsive-utils';

type ViewProps = RNViewProps & {
    m?: number;
    mb?: number;
    mt?: number;
    mr?: number;
    ml?: number;
    mh?: number;
    mv?: number;
    p?: number;
    pb?: number;
    pt?: number;
    pr?: number;
    pl?: number;
    ph?: number;
    pv?: number;
    flex?: ViewStyle['flex'];
    flexDirection?: ViewStyle['flexDirection'];
    justifyContent?: ViewStyle['justifyContent'];
    alignItems?: ViewStyle['alignItems'];
    children?: React.ReactNode;
};

export const View: React.FC<ViewProps> = ({
    children,
    style,
    m,
    mb,
    mt,
    mr,
    ml,
    mh,
    mv,
    p,
    pb,
    pt,
    pr,
    pl,
    ph,
    pv,
    flex,
    flexDirection,
    justifyContent,
    alignItems,
    ...props
}) => {
    return (
        <RNView
            style={[
                {
                    margin: m !== undefined ? spacing(m) : undefined,
                    marginHorizontal: mh !== undefined ? spacing(mh) : undefined,
                    marginVertical: mv !== undefined ? spacing(mv) : undefined,
                    marginBottom: mb !== undefined ? spacing(mb) : undefined,
                    marginTop: mt !== undefined ? spacing(mt) : undefined,
                    marginRight: mr !== undefined ? spacing(mr) : undefined,
                    marginLeft: ml !== undefined ? spacing(ml) : undefined,
                    padding: p !== undefined ? spacing(p) : undefined,
                    paddingHorizontal: ph !== undefined ? spacing(ph) : undefined,
                    paddingVertical: pv !== undefined ? spacing(pv) : undefined,
                    paddingBottom: pb !== undefined ? spacing(pb) : undefined,
                    paddingTop: pt !== undefined ? spacing(pt) : undefined,
                    paddingRight: pr !== undefined ? spacing(pr) : undefined,
                    paddingLeft: pl !== undefined ? spacing(pl) : undefined,
                    flex,
                    flexDirection,
                    justifyContent,
                    alignItems,
                },
                style,
            ]}
            {...props}
        >
            {children}
        </RNView>
    );
};

// export const View = React.memo(ViewComponent, (prev, next) => isEqual(prev, next));
