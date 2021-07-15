const NOMINAL_COLOR = ['#ED7D31', '#4472C4', '#FFC207', '#76AE4F', '#9E480E', '#A5A5A5', '#4472C4', '#264378', '#76AE4F','#5B9CD5' /*'#000000'*/];

const ExcelThemeMarkCommonStyle = {
    color: NOMINAL_COLOR[0],
    size: 1,
    stroke: '#5A5A5A',
    strokeWidth: 0,
    opacity: 1,
    nominalColorRange: NOMINAL_COLOR,
    quantitativeSizeRange: [2, 6]
};

export const excel = {
    base: 'excel',

    root: {
        background: 'white',
        titleColor: '#5A5A5A',
        subtitleColor: '#5A5A5A',
        mousePositionColor: '#000000'
    },

    track: {
        titleColor: '#5A5A5A',
        titleBackground: 'white',
        outline: '#5A5A5A',
        outlineWidth: 1
    },

    legend: {
        background: 'white',
        backgroundOpacity: 0.7,
        labelColor: '#5A5A5A',
        backgroundStroke: '#5A5A5A',
        tickColor: '#5A5A5A'
    },

    axis: {
        tickColor: '#5A5A5A',
        labelColor: '#5A5A5A',
        baselineColor: '#5A5A5A',
        gridColor: '#5A5A5A',
        gridStrokeWidth: 1
    },

    markCommon: {
        ...ExcelThemeMarkCommonStyle
    },
    point: {
        ...ExcelThemeMarkCommonStyle,
        size: 3
    },
    rect: {
        ...ExcelThemeMarkCommonStyle
    },
    triangle: {
        ...ExcelThemeMarkCommonStyle
    },
    area: {
        ...ExcelThemeMarkCommonStyle
    },
    line: {
        ...ExcelThemeMarkCommonStyle
    },
    bar: {
        ...ExcelThemeMarkCommonStyle
    },
    rule: {
        ...ExcelThemeMarkCommonStyle,
        strokeWidth: 1
    },
    link: {
        ...ExcelThemeMarkCommonStyle,
        strokeWidth: 1
    },
    text: {
        ...ExcelThemeMarkCommonStyle,
        textAnchor: 'middle',
        textFontWeight: 'normal'
    },
    brush: {
        ...ExcelThemeMarkCommonStyle,
        color: '#5A5A5A',
        opacity: 0.3,
        stroke: '#5A5A5A',
        strokeWidth: 1
    }
}
