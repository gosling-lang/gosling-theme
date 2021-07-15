const NOMINAL_COLOR = ['#3A5FCD', '#FFA54E', '#8FBC8F', '#B6709B', '#EE6A50', '#CCB79E', '#DADA8F','#00CDCC','#EED5D2','#CD8EDD','#9ACD31','#D1BEA8','#FFB6C0' /*'#000000'*/];

const UCSCThemeMarkCommonStyle = {
    color: NOMINAL_COLOR[0],
    size: 1,
    stroke: 'black',
    strokeWidth: 0,
    opacity: 1,
    nominalColorRange: NOMINAL_COLOR,
    quantitativeSizeRange: [2, 6]
};

export const ucsc = {
    base: 'ucsc',

    root: {
        background: 'white',
        titleColor: 'black',
        subtitleColor: 'gray',
        mousePositionColor: '#FE0000'
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
        backgroundStroke: '#DBDBDB',
        tickColor: 'black'
    },

    axis: {
        tickColor: 'black',
        labelColor: '#3A5FCD',
        baselineColor: 'black',
        gridColor: '#E3E3E3',
        gridStrokeWidth: 1
    },

    markCommon: {
        ...UCSCThemeMarkCommonStyle
    },
    point: {
        ...UCSCThemeMarkCommonStyle,
        size: 3
    },
    rect: {
        ...UCSCThemeMarkCommonStyle
    },
    triangle: {
        ...UCSCThemeMarkCommonStyle
    },
    area: {
        ...UCSCThemeMarkCommonStyle
    },
    line: {
        ...UCSCThemeMarkCommonStyle
    },
    bar: {
        ...UCSCThemeMarkCommonStyle
    },
    rule: {
        ...UCSCThemeMarkCommonStyle,
        strokeWidth: 1
    },
    link: {
        ...UCSCThemeMarkCommonStyle,
        strokeWidth: 1
    },
    text: {
        ...UCSCThemeMarkCommonStyle,
        textAnchor: 'middle',
        textFontWeight: 'normal'
    },
    brush: {
        ...UCSCThemeMarkCommonStyle,
        color: 'gray',
        opacity: 0.3,
        stroke: 'black',
        strokeWidth: 1
    }
}
