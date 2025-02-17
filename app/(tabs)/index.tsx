import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from 'react-native';

export default function MealPlansScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const goals = [
    { icon: '🏋️‍♂️', title: 'Weight Gain', description: 'High-protein Nigerian meals' },
    { icon: '🥗', title: 'Weight Loss', description: 'Low-carb local options' },
    { icon: '🍛', title: 'Balanced Diet', description: 'Nutritious everyday meals' },
    { icon: '💰', title: 'Budget-Friendly', description: 'Affordable meal plans' },
  ];

  return (
    <ScrollView 
      style={[
        styles.container,
        { backgroundColor: isDark ? '#000000' : '#F5F5F5' }
      ]}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: isDark ? '#FFFFFF' : '#000000' }]}>
          Naija Meal Planner
        </Text>
        <Text style={[styles.subtitle, { color: isDark ? '#CCCCCC' : '#666666' }]}>
          Healthy eating with local ingredients
        </Text>
      </View>

      <View style={styles.goalsContainer}>
        {goals.map((goal, index) => (
          <TouchableOpacity key={index} style={styles.goalCard}>
            <LinearGradient
              colors={['#4CAF50', '#388E3C']}
              style={styles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.goalIcon}>{goal.icon}</Text>
              <Text style={styles.goalTitle}>{goal.title}</Text>
              <Text style={styles.goalDescription}>{goal.description}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.quickStart}>
        <Text style={[styles.sectionTitle, { color: isDark ? '#FFFFFF' : '#000000' }]}>
          Quick Start
        </Text>
        <TouchableOpacity 
          style={[
            styles.quickStartButton,
            { backgroundColor: isDark ? '#333333' : '#FFFFFF' }
          ]}
        >
          <Ionicons 
            name="flash" 
            size={24} 
            color="#4CAF50"
          />
          <Text style={[
            styles.quickStartText,
            { color: isDark ? '#FFFFFF' : '#000000' }
          ]}>
            Generate Today's Meal Plan
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 5,
  },
  goalsContainer: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  goalCard: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 12,
    overflow: 'hidden',
  },
  gradient: {
    padding: 15,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goalIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  goalTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  goalDescription: {
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
    opacity: 0.9,
  },
  quickStart: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  quickStartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  quickStartText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});