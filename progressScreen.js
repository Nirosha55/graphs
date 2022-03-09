import React from 'react';
import { SafeAreaView,Text } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const data = {
  labels: ['niru', 'vanshu', 'bondu'], // optional
  data: [0.4, 0.6, 0.8],
};

const ProgressScreen = () => {
    return (
      <SafeAreaView>
        <Text>{'Pgrosses chart'}</Text>
        <ProgressChart
          data={data}
          width={screenWidth}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
        />
      </SafeAreaView>
    );
}

export default ProgressScreen;