const NOMINAL_COLOR = ['#CD9B1D', '#8A668B', '#40E0D0', '#FF6969', '#666666', '#FAC902','#FE0000','#CC96CD', '#D9D9D9' /*'#000000'*/];

const EnsemblThemeMarkCommonStyle = {
    color: NOMINAL_COLOR[0],
    size: 1,
    stroke: 'black',
    strokeWidth: 0,
    opacity: 1,
    nominalColorRange: NOMINAL_COLOR,
    quantitativeSizeRange: [2, 6]
};

export const ensembl = {
    base: 'ensembl',

    root: {
        background: 'white',
        titleColor: 'white',
        titleFontSize:22,
        //titleFontFamily:'',
        titleAlign:'middle',
        titleFontWeight:'bold',
        titleBackgroundColor:'#7B8BAF',
        subtitleColor: '#494949',
        subtitleFontSize:18,
        //subtitleFontFamily:'',
        subtitleAlign:'left',
        subtitleFontWeight:'normal',
        subtitleBackgroundColor:'white',
        mousePositionColor: '#000000'
    },

    track: {
        background:'white',
        alternatingBackground:'#dcf5f7',
        titleColor: 'white',
        titleBackground: '#7B8BAF',
        titleFontSize:'normal',
        //titleAlign:'',
        outline: '#7B8BAF',
        outlineWidth: 1
    },

    legend: {
        position:'top',
        tickColor: '#4f4f4f',
        labelColor: 'black',
        //labelFontSize: ,
        labelFontWeight: 'normal',
        //labelFontFamily: '',
        background: 'white',
        backgroundOpacity: 1,
        backgroundStroke: 'white'
        
    },

    axis: {
        tickColor: '#4f4f4f',
        labelColor: 'black',
        //labelFontSize: ,
        //labelFontWeight: '',
        //labelFontFamily: '',
        baselineColor: 'black',
        gridColor: '#7B8BAF',
        gridStrokeWidth: 1,
        //gridStrokeType: '',
        //gridStrokeDash: 
    },

    markCommon: {
        ...EnsemblThemeMarkCommonStyle
    },
    point: {
        ...EnsemblThemeMarkCommonStyle,
        size: 3
    },
    rect: {
        ...EnsemblThemeMarkCommonStyle
    },
    triangle: {
        ...EnsemblThemeMarkCommonStyle
    },
    area: {
        ...EnsemblThemeMarkCommonStyle
    },
    line: {
        ...EnsemblThemeMarkCommonStyle
    },
    bar: {
        ...EnsemblThemeMarkCommonStyle
    },
    rule: {
        ...EnsemblThemeMarkCommonStyle,
        strokeWidth: 1
    },
    link: {
        ...EnsemblThemeMarkCommonStyle,
        strokeWidth: 1
    },
    text: {
        ...EnsemblThemeMarkCommonStyle,
        textAnchor: 'middle',
        textFontWeight: 'normal'
    },
    brush: {
        ...EnsemblThemeMarkCommonStyle,
        color: 'gray',
        opacity: 0.3,
        stroke: 'black',
        strokeWidth: 1
    }
}
