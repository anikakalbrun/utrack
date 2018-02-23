import React from 'react';
import {object} from 'prop-types';
import '../styles/css/Chart.css';

import LegendItem from './LegendItem';
import Legend from './Legend';
import {colorLine1, colorLine2} from '../chartFixtures';

const LineChart = require("react-chartjs").Line;

const chartOptions = {
    bezierCurve: false,
    pointDot: true,
    pointDotRadius: 4,
    pointDotStrokeWidth: 2,
    pointHitDetectionRadius: 10,
    responsive: true,
    maintainAspectRatio: false
};

DiscountCostLineChart.propTypes = {
    data: object
};

export default function DiscountCostLineChart({data}) {
    return (
        <div className='width100 p-50 h-300'>
            <Legend>
                <LegendItem color={colorLine2} label='Monthly'/>
                <LegendItem color={colorLine1} label='Cumulative'/>
            </Legend>
            {data && data.datasets && <LineChart data={data}
                                options={chartOptions}
                                redraw/>
            }
        </div>
    );
}

//TODO: upgrade from react-chartjs to react-chartjs-2
// adding tooltips option to chartOptions is being ignored => I can not modify the tooltip label color
// to fix this issue I could upgrade to react-chartjs-2
// but I can not upgrade because when using react-chartjs-2 I get an compilation error that is still an open issue on github:
// https://github.com/jerairrest/react-chartjs-2/issues/233

//upgrading should also remove the warning:
//[Violation] Added non-passive event listener to a scroll-blocking <some> event. Consider marking event handler as 'passive' to make the page more responsive. See <URL>