import {consistentColors} from './consistent-colors'
import { orderedBarChart } from './ordered';
import { cutYAxis } from '../common/cut-y-axis';

export const checkBarChart = (x) => {
    consistentColors(x)
    orderedBarChart(x)
    cutYAxis(x)
}
