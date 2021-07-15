const NOMINAL_COLOR = ['#6E12AC', '#15C250', '#E70FB1', '#FF8E55', '#A3B8F3', '#DE5E59', '#77AAAA','#F5CCCA' /*'#000000'*/];

const WashUThemeMarkCommonStyle = {
    color: NOMINAL_COLOR[0],
    size: 1,
    stroke: 'black',
    strokeWidth: 0,
    opacity: 1,
    nominalColorRange: NOMINAL_COLOR,
    quantitativeSizeRange: [2, 6]
};

export const washu = {
    base: 'washu',

    root: {
        background: 'white',
        titleColor: 'gray',
        subtitleColor: 'lightgray',
        mousePositionColor: '#000000'
    },

    track: {
        titleColor: 'gray',
        titleBackground: 'white',
        outline: 'gray',
        outlineWidth: 1
    },

    legend: {
        background: 'white',
        backgroundOpacity: 0.7,
        labelColor: 'gray',
        backgroundStroke: '#DBDBDB',
        tickColor: 'gray'
    },

    axis: {
        tickColor: 'lightgray',
        labelColor: 'gray',
        baselineColor: 'gray',
        gridColor: 'transparent',
        gridStrokeWidth: 0
    },

    markCommon: {
        ...WashUThemeMarkCommonStyle
    },
    point: {
        ...WashUThemeMarkCommonStyle,
        size: 3
    },
    rect: {
        ...WashUThemeMarkCommonStyle
    },
    triangle: {
        ...WashUThemeMarkCommonStyle
    },
    area: {
        ...WashUThemeMarkCommonStyle
    },
    line: {
        ...WashUThemeMarkCommonStyle
    },
    bar: {
        ...WashUThemeMarkCommonStyle
    },
    rule: {
        ...WashUThemeMarkCommonStyle,
        strokeWidth: 1
    },
    link: {
        ...WashUThemeMarkCommonStyle,
        strokeWidth: 1
    },
    text: {
        ...WashUThemeMarkCommonStyle,
        textAnchor: 'middle',
        textFontWeight: 'normal'
    },
    brush: {
        ...WashUThemeMarkCommonStyle,
        color: 'gray',
        opacity: 0.3,
        stroke: 'gray',
        strokeWidth: 1
    }
}
