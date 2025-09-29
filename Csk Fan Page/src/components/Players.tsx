import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Award, TrendingUp, User, BarChart3 } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

// Import player images
import dhoniImage from '@/assets/players/ms dhoni.jpg';
import ruturajImage from '@/assets/players/ruturaj-gaikwad.jpg';
import jadejaImage from '@/assets/players/ravindra-jadeja.jpg';
import chaharImage from '@/assets/players/deepak-chahar.jpg';
import moeenImage from '@/assets/players/moeen-ali.jpg';
import conwayImage from '@/assets/players/devon-conway.jpg';

const Players = () => {
  const { toast } = useToast();
  const [selectedPlayer, setSelectedPlayer] = useState<number | null>(null);

  const players = [
    {
      id: 1,
      name: 'MS Dhoni',
      role: 'Wicket-keeper Batsman',
      captain: true,
      matches: 264,
      runs: 5082,
      average: 39.1,
      strikeRate: 135.9,
      image: dhoniImage,
      bio: 'The legendary Captain Cool who led CSK to 5 IPL titles'
    },
    {
      id: 2,
      name: 'Ruturaj Gaikwad',
      role: 'Batsman',
      captain: false,
      matches: 54,
      runs: 2380,
      average: 36.3,
      strikeRate: 136.3,
      image: ruturajImage,
      bio: 'Young opening batsman with exceptional talent and consistency'
    },
    {
      id: 3,
      name: 'Ravindra Jadeja',
      role: 'All-rounder',
      captain: false,
      matches: 185,
      runs: 2756,
      average: 28.2,
      strikeRate: 127.3,
      wickets: 156,
      economy: 7.8,
      image: jadejaImage,
      bio: 'Star all-rounder known for his explosive batting and sharp fielding'
    },
    {
      id: 4,
      name: 'Deepak Chahar',
      role: 'Bowler',
      captain: false,
      matches: 76,
      wickets: 59,
      average: 27.8,
      economy: 7.2,
      image: chaharImage,
      bio: 'Pace bowler with excellent swing and powerplay wicket-taking ability'
    },
    {
      id: 5,
      name: 'Moeen Ali',
      role: 'All-rounder',
      captain: false,
      matches: 34,
      runs: 675,
      average: 25.0,
      strikeRate: 157.9,
      wickets: 25,
      economy: 6.8,
      image: moeenImage,
      bio: 'English all-rounder who brings balance with bat and ball'
    },
    {
      id: 6,
      name: 'Devon Conway',
      role: 'Batsman',
      captain: false,
      matches: 31,
      runs: 1312,
      average: 47.3,
      strikeRate: 139.4,
      image: conwayImage,
      bio: 'New Zealand opener with excellent technique and shot selection'
    }
  ];

  const handleViewProfile = (playerId: number, playerName: string) => {
    setSelectedPlayer(playerId);
    toast({
      title: `${playerName} Profile`,
      description: "Player profile feature coming soon!",
    });
  };

  const handleViewAchievements = (playerName: string) => {
    toast({
      title: `${playerName} Achievements`,
      description: "Achievements section coming soon!",
    });
  };

  const handleViewStats = (playerName: string) => {
    toast({
      title: `${playerName} Statistics`,
      description: "Detailed statistics coming soon!",
    });
  };

  const getPositionIcon = (index: number) => {
    switch (index) {
      case 0: return '🥇';
      case 1: return '🥈';
      case 2: return '🥉';
      default: return '🏆';
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Our <span className="text-primary">Squad</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the champions who bring glory to the yellow jersey. Our squad combines experience with youth to create cricket magic.
          </p>
        </div>

        {/* Featured Player - MS Dhoni */}
        <div className="mb-12">
          <Card className={`card-shadow hover:shadow-csk transition-all duration-300 bg-gradient-premium ${selectedPlayer === 1 ? 'ring-2 ring-primary' : ''}`}>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-gold p-1 mb-4 animate-trophy-shine">
                    <img 
                      src={dhoniImage} 
                      alt="MS Dhoni" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <Badge className="bg-gradient-gold text-primary-foreground font-semibold">Captain Cool</Badge>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-heading font-bold mb-2 text-white">MS Dhoni</h3>
                  <p className="text-white/80 mb-2">Wicket-keeper Batsman • Captain</p>
                  <p className="text-white/60 text-sm mb-4 italic">{players[0].bio}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-xl font-bold text-primary">264</div>
                      <div className="text-xs text-white/60">Matches</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-primary">5,082</div>
                      <div className="text-xs text-white/60">Runs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-primary">39.1</div>
                      <div className="text-xs text-white/60">Average</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-primary">135.9</div>
                      <div className="text-xs text-white/60">Strike Rate</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button 
                    variant="premium"
                    onClick={() => handleViewProfile(1, 'MS Dhoni')}
                  >
                    <User className="mr-2 h-4 w-4" />
                    View Profile
                  </Button>
                  <Button 
                    variant="gold"
                    onClick={() => handleViewAchievements('MS Dhoni')}
                  >
                    <Award className="mr-2 h-4 w-4" />
                    Achievements
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Players Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.slice(1).map((player, index) => (
            <Card 
              key={player.id} 
              className={`card-shadow hover:shadow-csk transition-all duration-300 group cursor-pointer ${selectedPlayer === player.id ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setSelectedPlayer(selectedPlayer === player.id ? null : player.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-gradient-glow p-1">
                      <img 
                        src={player.image} 
                        alt={player.name} 
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">{player.name}</h4>
                      <p className="text-sm text-muted-foreground">{player.role}</p>
                      <p className="text-xs text-muted-foreground/80 mt-1 line-clamp-2">{player.bio}</p>
                    </div>
                  </div>
                  <span className="text-lg">{getPositionIcon(index)}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Matches:</span>
                      <span className="font-semibold">{player.matches}</span>
                    </div>
                    {player.runs && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Runs:</span>
                        <span className="font-semibold text-primary">{player.runs.toLocaleString()}</span>
                      </div>
                    )}
                    {player.wickets && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Wickets:</span>
                        <span className="font-semibold text-primary">{player.wickets}</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    {player.average && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Average:</span>
                        <span className="font-semibold">{player.average}</span>
                      </div>
                    )}
                    {player.strikeRate && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">S/R:</span>
                        <span className="font-semibold">{player.strikeRate}</span>
                      </div>
                    )}
                    {player.economy && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Economy:</span>
                        <span className="font-semibold">{player.economy}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewProfile(player.id, player.name);
                    }}
                  >
                    <User className="mr-1 h-3 w-3" />
                    Profile
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewStats(player.name);
                    }}
                  >
                    <BarChart3 className="mr-1 h-3 w-3" />
                    Stats
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            size="lg"
            onClick={() => {
              toast({
                title: "Full Squad",
                description: "Complete squad section coming soon with detailed player profiles!",
              });
            }}
          >
            <Star className="mr-2 h-5 w-5" />
            View Full Squad
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Players;
