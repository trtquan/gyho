const mockData = [
    {
      days: [
        { exercise: 'Workout + Cardio' },
        { exercise: 'Weight Lifing' }
      ]
    },
    {
      days: [
        { exercise: 'Weight Lifing' },
        { exercise: 'Cardio + Crossfit' }
      ]
    },
    {
      days: [
        { exercise: 'Cardio + Weight Lifing' },
        { exercise: 'Cardio + Crossfit' }
      ]
    }
  ];

export function fetchWorkoutPlan(isSuccess = true) {
    return new Promise((resolve, reject) => {
        if (isSuccess) {
          resolve(mockData);
        } else {
          reject('Error');
        }
    });
}