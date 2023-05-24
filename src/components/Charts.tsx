import React, { useEffect, useState } from 'react';

import {
  Box, Center, HStack, Skeleton, Text, VStack, useColorModeValue,
} from '@chakra-ui/react';

import {
  CartesianGrid,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { getStats, CountRecord, ActionCount } from '../stats/stats';

export default function Charts() {
  const [counts, setCounts] = useState<CountRecord[]>([]);
  const [actionCounts, setActionCounts] = useState<ActionCount[]>([]);
  const [chartWidth, setChartWidth] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState('');
  const textColour = useColorModeValue('black', 'white');

  useEffect(() => {
    const a = async () => {
      try {
        const s = await getStats();
        setCounts(s.counts);
        setActionCounts(s.action_counts);
      } catch (e: any) {
        if (e.constructor === SyntaxError) {
          setError('Server returned invalid JSON');
        } else {
          setError(e.toString());
        }
      }
      setLoaded(true);
    };
    a();
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 750) {
        setChartWidth(600);
      } else if (window.innerWidth >= 500) {
        setChartWidth(window.innerWidth - 100);
      } else {
        setChartWidth(window.innerWidth);
      }
    }
    handleResize();
    // Idea from https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
    window.addEventListener('resize', handleResize);
  }, []);

  // if (!loaded) {
  //   return <h2>Loading...</h2>;
  // }

  if (error !== '') {
    return (
      <div>
        <h2>Failed to get data</h2>
        <p>{error}</p>
      </div>
    );
  }

  // interval x axis 100

  return (
    <>
      <HStack>
        <Box>
          <Text align="center">Server Count</Text>
          <Skeleton height={250} width={chartWidth} isLoaded={loaded}>
            <LineChart syncId="countchart" className="chart" width={chartWidth} height={250} data={counts}>
              <Line strokeWidth={2} dot={false} name="Server Count" type="monotone" dataKey="g" stroke="#a7a3ff" />
              <CartesianGrid />
              <XAxis dataKey="d" domain={['dataMin', 'auto']} tick={{ fontSize: 12, fill: textColour }} angle={-25} tickMargin={10} />
              <YAxis type="number" domain={['dataMin', 'auto']} tick={{ fill: textColour }} />
              <Tooltip />
            </LineChart>
          </Skeleton>
        </Box>
        <Box>
          <Text align="center">Subscribed Channel Count</Text>
          <Skeleton height={250} width={chartWidth} isLoaded={loaded}>
            <LineChart syncId="countchart" className="chart" width={chartWidth} height={250} data={counts}>
              <Line strokeWidth={2} dot={false} name="Subscribed Channel Count" type="monotone" dataKey="s" stroke="#13f088" />
              <CartesianGrid />
              <XAxis dataKey="d" domain={['dataMin', 'auto']} tick={{ fontSize: 12, fill: textColour }} angle={-25} tickMargin={10} />
              <YAxis type="number" domain={['dataMin', 'auto']} tick={{ fill: textColour }} />
              <Tooltip />
            </LineChart>
          </Skeleton>
        </Box>
      </HStack>
      <Center>
        <VStack>
          <Text>Command Usage</Text>
          <Skeleton height={250} width={chartWidth} isLoaded={loaded}>
            <RadarChart className="chart" outerRadius={100} width={chartWidth} height={250} data={actionCounts}>
              <PolarGrid />
              <PolarAngleAxis dataKey="a" tick={{ fill: textColour }} />
              <PolarRadiusAxis
                angle={30}
                domain={[0, Math.max(...actionCounts.map(({ c }) => c))]}
              />
              <Radar name="Count" dataKey="c" stroke="#EB459E" fill="#ed2b93" fillOpacity={0.35} />
              <Tooltip />
            </RadarChart>
          </Skeleton>
        </VStack>
      </Center>
    </>
  );
}
