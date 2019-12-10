 

export const cutYAxis = (barChart) => {
    if(barChart.scales['y-axis-0'].start) {
        console.warn('Do not cut y-axis. Read more here https://www.data-to-viz.com/caveat/cut_y_axis.html' )
    }
}

