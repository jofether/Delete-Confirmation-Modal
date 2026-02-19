import React from 'react';
import Card from './Card';

function StatsGrid() {
  const stats = [
    { title: 'Users', value: '2,543', icon: '👥', description: 'Total active users' },
    { title: 'Revenue', value: '$45.2K', icon: '💰', description: 'Monthly revenue' },
    { title: 'Growth', value: '+12.5%', icon: '📈', description: 'Month over month' },
    { title: 'Sessions', value: '12,456', icon: '🔗', description: 'Active sessions' },
    { title: 'Conversion', value: '3.2%', icon: '🎯', description: 'Conversion rate' },
    { title: 'Retention', value: '87%', icon: '📊', description: 'Retention rate' },
  ];

  return (
    <div className="grid grid-cols-none gap-6">
      {stats.map(stat => (
        <Card 
          key={stat.title}
          icon={stat.icon}
          title={stat.title}
          value={stat.value}
          description={stat.description}
        />
      ))}
    </div>
  );
}

export default StatsGrid;
