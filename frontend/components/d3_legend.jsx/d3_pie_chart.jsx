import React from 'react';
import D3Chart from './d3_chart';
import DataSeries from './data_series';

class D3PieChart extends React.Component {
  constructor() {
    super();

  }

  render() {
    const colors = ['#FD9827', '#DA3B21', '#3669C9', '#1D9524', '#971497'];
    return (
      <div>
        <h4> { this.props.title } </h4>
        <D3Chart width={this.props.width} height={this.props.height}>
          <DataSeries data={this.props.data} colors={colors} width=
            {this.props.width} height={this.props.height}/>
        </D3Chart>
        <p>INTERESTING NOW.</p>
      </div>
    );
  }
}

D3PieChart.defaultProps = {
  width: 300,
  height: 350,
  title: '',
  Legend: true
};

export default D3PieChart;
