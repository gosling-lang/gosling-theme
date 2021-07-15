const NOMINAL_COLOR = ['#001EFF','#FF0000','#66FF00','#BF40BF','#FFA500','#FFFF00','#00AEFF'];

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
        titleColor: 'black',
        titleBackground: 'white',
        outline: 'black',
        outlineWidth: 1
    },

    legend: {
        background: 'white',
        backgroundOpacity: 0.7,
        labelColor: 'black',
        backgroundStroke: 'black',
        tickColor: 'black'
    },

    axis: {
        tickColor: 'darkgray',
        labelColor: 'gray',
        baselineColor: 'darkgray',
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
