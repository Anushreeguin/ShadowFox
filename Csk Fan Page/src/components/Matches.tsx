import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users, Trophy } from 'lucide-react';

const Matches = () => {
  const upcomingMatches = [
    {
      id: 1,
      opponent: 'Mumbai Indians',
      opponentShort: 'MI',
      date: '2024-03-25',
      time: '19:30',
      venue: 'M.A. Chidambaram Stadium, Chennai',
      status: 'upcoming',
      tournament: 'IPL 2024'
    },
    {
      id: 2,
      opponent: 'Royal Challengers Bangalore',
      opponentShort: 'RCB',
      date: '2024-03-28',
      time: '15:30',
      venue: 'M. Chinnaswamy Stadium, Bangalore',
      status: 'upcoming',
      tournament: 'IPL 2024'
    },
    {
      id: 3,
      opponent: 'Kolkata Knight Riders',
      opponentShort: 'KKR',
      date: '2024-04-01',
      time: '19:30',
      venue: 'Eden Gardens, Kolkata',
      status: 'upcoming',
      tournament: 'IPL 2024'
    }
  ];

  const recentMatches = [
    {
      id: 1,
      opponent: 'Delhi Capitals',
      opponentShort: 'DC',
      date: '2024-03-20',
      result: 'Won by 6 wickets',
      score: 'CSK 168/4 (19.2 overs)',
      opponentScore: 'DC 165/8 (20 overs)',
      status: 'won'
    },
    {
      id: 2,
      opponent: 'Punjab Kings',
      opponentShort: 'PBKS',
      date: '2024-03-17',
      result: 'Lost by 4 runs',
      score: 'CSK 178/7 (20 overs)',
      opponentScore: 'PBKS 182/6 (20 overs)',
      status: 'lost'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'won':
        return <Badge className="bg-green-500 text-white">Won</Badge>;
      case 'lost':
        return <Badge className="bg-red-500 text-white">Lost</Badge>;
      case 'upcoming':
        return <Badge className="bg-gradient-csk text-primary-foreground">Upcoming</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Match <span className="text-primary">Schedule</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with CSK's upcoming fixtures and recent match results in the IPL 2024 season.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upcoming Matches */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-6 flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-primary" />
              Upcoming Matches
            </h3>
            <div className="space-y-4">
              {upcomingMatches.map((match) => (
                <Card key={match.id} className="card-shadow hover:shadow-csk transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-csk flex items-center justify-center mb-1">
                            <span className="text-xs font-bold text-primary-foreground">CSK</span>
                          </div>
                        </div>
                        <div className="text-lg font-semibold">VS</div>
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-1">
                            <span className="text-xs font-bold">{match.opponentShort}</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold">{match.opponent}</h4>
                          <p className="text-sm text-muted-foreground">{match.tournament}</p>
                        </div>
                      </div>
                      {getStatusBadge(match.status)}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        {new Date(match.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        {match.time} IST
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" />
                        {match.venue}
                      </div>
                    </div>
                    
                    <Button className="w-full mt-4 bg-gradient-csk hover:shadow-csk">
                      <Users className="mr-2 h-4 w-4" />
                      Get Tickets
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Results */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-6 flex items-center">
              <Trophy className="mr-2 h-5 w-5 text-primary" />
              Recent Results
            </h3>
            <div className="space-y-4">
              {recentMatches.map((match) => (
                <Card key={match.id} className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-csk flex items-center justify-center mb-1">
                            <span className="text-xs font-bold text-primary-foreground">CSK</span>
                          </div>
                        </div>
                        <div className="text-lg font-semibold">VS</div>
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-1">
                            <span className="text-xs font-bold">{match.opponentShort}</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold">{match.opponent}</h4>
                          <p className="text-sm text-muted-foreground">{new Date(match.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                      {getStatusBadge(match.status)}
                    </div>
                    
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="font-semibold text-sm mb-2">{match.result}</div>
                      <div className="text-sm space-y-1">
                        <div>{match.score}</div>
                        <div>{match.opponentScore}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Button variant="outline" className="w-full">
                View All Results
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Matches;