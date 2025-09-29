import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Target, Users, Calendar } from 'lucide-react';

const Statistics = () => {
  const achievements = [
    { icon: '🏆', title: 'IPL Titles', value: '5', description: '2010, 2011, 2018, 2021, 2023' },
    { icon: '🥇', title: 'Finals Reached', value: '10', description: 'Most consistent team' },
    { icon: '🎯', title: 'Win Percentage', value: '61.2%', description: 'Highest in IPL history' },
    { icon: '👑', title: 'Home Wins', value: '75+', description: 'Fortress Chepauk' }
  ];

  const seasonStats = [
    { season: '2023', position: '1st', wins: 12, losses: 4, points: 24, nrr: '+0.652' },
    { season: '2022', position: '9th', wins: 4, losses: 10, points: 8, nrr: '-0.203' },
    { season: '2021', position: '1st', wins: 9, losses: 5, points: 18, nrr: '+0.455' },
    { season: '2020', position: '7th', wins: 6, losses: 8, points: 12, nrr: '-0.109' },
    { season: '2019', position: '2nd', wins: 9, losses: 5, points: 18, nrr: '+0.131' }
  ];

  const topPerformers = [
    { category: 'Most Runs', player: 'MS Dhoni', value: '5,082', icon: '🏏' },
    { category: 'Most Wickets', player: 'Dwayne Bravo', value: '183', icon: '🎯' },
    { category: 'Highest Score', player: 'Murali Vijay', value: '127*', icon: '⚡' },
    { category: 'Best Bowling', player: 'Mohit Sharma', value: '5/18', icon: '🔥' }
  ];

  const getPositionColor = (position: string) => {
    const pos = parseInt(position);
    if (pos <= 2) return 'bg-green-500';
    if (pos <= 4) return 'bg-yellow-500';
    if (pos <= 6) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Team <span className="text-primary">Statistics</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Numbers that tell the story of CSK's dominance in the IPL. From championships to records, we lead by example.
          </p>
        </div>

        {/* Key Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card-shadow hover:shadow-csk transition-all duration-300 text-center group">
              <CardContent className="p-6">
                <div className="text-4xl mb-4 group-hover:animate-stadium-pulse">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{achievement.value}</div>
                <h4 className="font-semibold mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Season Performance */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-6 flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-primary" />
              Season Performance
            </h3>
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-lg">IPL Performance (2019-2023)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {seasonStats.map((season) => (
                    <div key={season.season} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-4">
                        <Badge className={`${getPositionColor(season.position)} text-white w-8 h-8 rounded-full flex items-center justify-center`}>
                          {season.position}
                        </Badge>
                        <div>
                          <div className="font-semibold">IPL {season.season}</div>
                          <div className="text-sm text-muted-foreground">
                            {season.wins}W - {season.losses}L
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{season.points} pts</div>
                        <div className="text-sm text-muted-foreground">NRR: {season.nrr}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Performers */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-6 flex items-center">
              <Trophy className="mr-2 h-5 w-5 text-primary" />
              All-Time Records
            </h3>
            <div className="space-y-4">
              {topPerformers.map((performer, index) => (
                <Card key={index} className="card-shadow hover:shadow-csk transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{performer.icon}</div>
                        <div>
                          <div className="font-semibold">{performer.category}</div>
                          <div className="text-sm text-muted-foreground">{performer.player}</div>
                        </div>
                      </div>
                      <div className="text-xl font-bold text-primary">{performer.value}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Overall Stats */}
            <Card className="mt-6 card-shadow bg-gradient-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 flex items-center">
                  <Target className="mr-2 h-4 w-4" />
                  Overall IPL Stats
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Matches:</span>
                      <span className="font-semibold">240+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Wins:</span>
                      <span className="font-semibold text-green-600">147+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Home Record:</span>
                      <span className="font-semibold text-primary">75-35</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Losses:</span>
                      <span className="font-semibold text-red-600">93</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Win %:</span>
                      <span className="font-semibold text-primary">61.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Playoff Apps:</span>
                      <span className="font-semibold text-primary">12/15</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;