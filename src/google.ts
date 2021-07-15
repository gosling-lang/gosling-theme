const NOMINAL_COLOR = ['#4185f4', '#DB4437', '#F4B400', '#0D9D58', '#AA30C3', '#FF6E02', '#CBC74C' /*'#000000'*/];

const GoogleThemeMarkCommonStyle = {
    color: NOMINAL_COLOR[0],
    size: 1,
    stroke: 'black',
    strokeWidth: 0,
    opacity: 1,
    nominalColorRange: NOMINAL_COLOR,
    quantitativeSizeRange: [2, 6]
};

export const google = {
    base: 'google',

    root: {
        background: 'white',
        titleColor: '#999999',
        subtitleColor: 'black',
        mousePositionColor: '#000000'
    },

    track: {
        titleColor: '#999999',
        titleBackground: 'white',
        outline: 'black',
        outlineWidth: 1
    },

    legend: {
        background: 'white',
        backgroundOpacity: 0.7,
        labelColor: 'black',
        backgroundStroke: '#black',
        tickColor: 'black'
    },

    axis: {
        tickColor: 'black',
        labelColor: 'black',
        baselineColor: 'black',
        gridColor: '#black',
        gridStrokeWidth: 1
    },

    markCommon: {
        ...GoogleThemeMarkCommonStyle
    },
    point: {
        ...GoogleThemeMarkCommonStyle,
        size: 3
    },
    rect: {
        ...GoogleThemeMarkCommonStyle
    },
    triangle: {
        ...GoogleThemeMarkCommonStyle
    },
    area: {
        ...GoogleThemeMarkCommonStyle
    },
    line: {
        ...GoogleThemeMarkCommonStyle
    },
    bar: {
        ...GoogleThemeMarkCommonStyle
    },
    rule: {
        ...GoogleThemeMarkCommonStyle,
        strokeWidth: 1
    },
    link: {
        ...GoogleThemeMarkCommonStyle,
        strokeWidth: 1
    },
    text: {
        ...GoogleThemeMarkCommonStyle,
        textAnchor: 'middle',
        textFontWeight: 'normal'
    },
    brush: {
        ...GoogleThemeMarkCommonStyle,
        color: '#999999',
        opacity: 0.3,
        stroke: 'black',
        strokeWidth: 1
    }
}
