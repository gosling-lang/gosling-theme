const NOMINAL_COLOR = ['#888888','#CCCCCC','#666666','#AAAAAA','#222222','#444444','#000000'];

const GgplotThemeMarkCommonStyle = {
    color: NOMINAL_COLOR[0],
    size: 1,
    stroke: 'black',
    strokeWidth: 0,
    opacity: 1,
    nominalColorRange: NOMINAL_COLOR,
    quantitativeSizeRange: [2, 6]
};

export const ggplot = {
    base: 'ggplot',

    root: {
        background: '#EEEEEE',
        titleColor: 'black',
        subtitleColor: 'darkgray',
        mousePositionColor: 'black'
    },

    track: {
        titleColor: 'black',
        titleBackground: 'white',
        outline: 'black',
        outlineWidth: 1
    },

    legend: {
        background: 'white',
        backgroundOpacity: 0.7,
        labelColor: 'black',
        backgroundStroke: 'white',
        tickColor: 'black'
    },

    axis: {
        tickColor: 'black',
        labelColor: 'gray',
        baselineColor: 'black',
        gridColor: 'white',
        gridStrokeWidth: 1
    },

    markCommon: {
        ...GgplotThemeMarkCommonStyle
    },
    point: {
        ...GgplotThemeMarkCommonStyle,
        size: 3
    },
    rect: {
        ...GgplotThemeMarkCommonStyle
    },
    triangle: {
        ...GgplotThemeMarkCommonStyle
    },
    area: {
        ...GgplotThemeMarkCommonStyle
    },
    line: {
        ...GgplotThemeMarkCommonStyle
    },
    bar: {
        ...GgplotThemeMarkCommonStyle
    },
    rule: {
        ...GgplotThemeMarkCommonStyle,
        strokeWidth: 1
    },
    link: {
        ...GgplotThemeMarkCommonStyle,
        strokeWidth: 1
    },
    text: {
        ...GgplotThemeMarkCommonStyle,
        textAnchor: 'middle',
        textFontWeight: 'bold'
    },
    brush: {
        ...GgplotThemeMarkCommonStyle,
        color: '#EEEEEE',
        opacity: 0.3,
        stroke: 'black',
        strokeWidth: 1
    }
}
