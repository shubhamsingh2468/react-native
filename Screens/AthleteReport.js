import React, { useState } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';

const AthleteReport = () => {
  const [athleteInfoVisible, setAthleteInfoVisible] = useState(false);
  const [performanceMetricsVisible, setPerformanceMetricsVisible] = useState(false);

  const athleteData = {
    name: 'John Doe', 
    age: 25,
    sport: 'Running',
  };

  const performanceMetricsData = {
    distanceRun: '5 km',
    timeTaken: '30 minutes',
    averagePace: '6 min/km',
  };

  // ... add static data for other sections ...

  const handleAthleteInfoClick = () => {
    setAthleteInfoVisible(!athleteInfoVisible);
  };

  const handlePerformanceMetricsClick = () => {
    setPerformanceMetricsVisible(!performanceMetricsVisible);
  };

  // ... add click handlers for other buttons ...

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: 'red' }}>
        <Text style={{ fontSize: 30, fontStyle: 'italic', marginLeft: 60 }}>
          ATHLETE-1 REPORT CARD
        </Text>
      </View>

      {/* Athlete Information Section */}
      {athleteInfoVisible && (
        <View>
          <Text style={{ marginTop: 20, marginLeft: 60 }}>
            Name: {athleteData.name}
          </Text>
          <Text style={{ marginTop: 10, marginLeft: 60 }}>
            Age: {athleteData.age}
          </Text>
          <Text style={{ marginTop: 10, marginLeft: 60 }}>
            Sport: {athleteData.sport}
          </Text>
          {/* ... display other athlete information ... */}
        </View>
      )}
      <Button
        title="Athlete Information"
        onPress={handleAthleteInfoClick}
        style={{ marginTop: 20, width: 400, height: 20, marginLeft: 60 }}
      />

      {/* Performance Metrics Section */}
      {performanceMetricsVisible && (
        <View>
          <Text style={{ marginTop: 20, marginLeft: 60 }}>
            Distance Run: {performanceMetricsData.distanceRun}
          </Text>
          <Text style={{ marginTop: 10, marginLeft: 60 }}>
            Time Taken: {performanceMetricsData.timeTaken}
          </Text>
          <Text style={{ marginTop: 10, marginLeft: 60 }}>
            Average Pace: {performanceMetricsData.averagePace}
          </Text>
          {/* ... display other performance metrics ... */}
        </View>
      )}
      <Button
        title="Athlete Performance Metrics"
        onPress={handlePerformanceMetricsClick}
        style={{ marginTop: 20, width: 400, height: 20, marginLeft: 60 }}
      />


<View style={{ backgroundColor: 'red' }}>
        <Text style={{ fontSize: 30, fontStyle: 'italic', marginLeft: 60 }}>
          ATHLETE-2 REPORT CARD
        </Text>
      </View>

      {/* Athlete Information Section */}
      {athleteInfoVisible && (
        <View>
          <Text style={{ marginTop: 20, marginLeft: 60 }}>
            Name: {athleteData.name}
          </Text>
          <Text style={{ marginTop: 10, marginLeft: 60 }}>
            Age: {athleteData.age}
          </Text>
          <Text style={{ marginTop: 10, marginLeft: 60 }}>
            Sport: {athleteData.sport}
          </Text>
          {/* ... display other athlete information ... */}
        </View>
      )}
      <Button
        title="Athlete Information"
        onPress={handleAthleteInfoClick}
        style={{ marginTop: 20, width: 400, height: 20, marginLeft: 60 }}
      />

      {/* Performance Metrics Section */}
      {performanceMetricsVisible && (
        <View>
          <Text style={{ marginTop: 20, marginLeft: 60 }}>
            Distance Run: {performanceMetricsData.distanceRun}
          </Text>
          <Text style={{ marginTop: 10, marginLeft: 60 }}>
            Time Taken: {performanceMetricsData.timeTaken}
          </Text>
          <Text style={{ marginTop: 10, marginLeft: 60 }}>
            Average Pace: {performanceMetricsData.averagePace}
          </Text>
          {/* ... display other performance metrics ... */}
        </View>
      )}
      <Button
        title="Athlete Performance Metrics"
        onPress={handlePerformanceMetricsClick}
        style={{ marginTop: 20, width: 400, height: 20, marginLeft: 60 }}
      />

    </SafeAreaView>






  );
};

export default AthleteReport;





