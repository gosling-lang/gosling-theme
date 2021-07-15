const NOMINAL_COLOR = ['#F66A62','#05B230','#5692FF','#D764D6','#86E9D4','#6E6AD7','#FFFB00'];

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
        background: 'WHITE',
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
        color: 'black',
        opacity: 0.3,
        stroke: 'black',
        strokeWidth: 1
    }
}
