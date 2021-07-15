const NOMINAL_COLOR = ['#AEAFEA','#EBAEAE','#8743E0','#5233F0','#37E649','#ED2D44','#CE7B3D'];

const IGVThemeMarkCommonStyle = {
    color: NOMINAL_COLOR[0],
    size: 1,
    stroke: 'black',
    strokeWidth: 0,
    opacity: 1,
    nominalColorRange: NOMINAL_COLOR,
    quantitativeSizeRange: [2, 6]
};

export const igv = {
    base: 'igv',

    root: {
        background: 'white',
        titleColor: 'black',
        subtitleColor: 'black',
        mousePositionColor: 'black'
    },

    track: {
        titleColor: 'white',
        titleBackground: '#5F5F5F',
        outline: '#5F5F5F',
        outlineWidth: 1
    },

    legend: {
        background: '#FEFEFE',
        backgroundOpacity: 0.7,
        labelColor: 'black',
        backgroundStroke: 'black',
        tickColor: 'black'
    },

    axis: {
        tickColor: 'black',
        labelColor: 'black',
        baselineColor: '#E6E6E6',
        gridColor: 'transparent',
        gridStrokeWidth: 0
    },

    markCommon: {
        ...IGVThemeMarkCommonStyle
    },
    point: {
        ...IGVThemeMarkCommonStyle,
        size: 3
    },
    rect: {
        ...IGVThemeMarkCommonStyle
    },
    triangle: {
        ...IGVThemeMarkCommonStyle
    },
    area: {
        ...IGVThemeMarkCommonStyle
    },
    line: {
        ...IGVThemeMarkCommonStyle
    },
    bar: {
        ...IGVThemeMarkCommonStyle
    },
    rule: {
        ...IGVThemeMarkCommonStyle,
        strokeWidth: 1
    },
    link: {
        ...IGVThemeMarkCommonStyle,
        strokeWidth: 1
    },
    text: {
        ...IGVThemeMarkCommonStyle,
        textAnchor: 'middle',
        textFontWeight: 'bold'
    },
    brush: {
        ...IGVThemeMarkCommonStyle,
        color: 'white',
        opacity: 0.3,
        stroke: 'black',
        strokeWidth: 1
    }
}
