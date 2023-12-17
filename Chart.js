import React from 'react';
import { View, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    data: [85, 92, 76, 88, 93, 98],
  }],
};

const BarChartComponent = () => {
  return (
    <View style={{marginLeft:40,}}>
      <Text>athlete performance by Month</Text>
      <BarChart
        data={data}
        width={400}
        height={220}
        yAxisLabel={'athlete'}
        xAxisLabel={'Month'}
        chartConfig={{
          backgroundColor: '#e2e2e2',
          backgroundOpacity: 1,
          strokeWidth: 2,
          color: (opacity = 1) => `rgba(200, 100, 100, ${opacity})`,
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default BarChartComponent;
