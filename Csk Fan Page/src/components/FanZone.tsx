import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Heart, MessageCircle, Share2, ThumbsUp, Users, Gift } from 'lucide-react';

const FanZone = () => {
  const [selectedPoll, setSelectedPoll] = useState<number | null>(null);
  const [votedPolls, setVotedPolls] = useState<Set<number>>(new Set());

  const polls = [
    {
      id: 1,
      question: "Who should be CSK's next captain after MS Dhoni?",
      options: [
        { text: "Ruturaj Gaikwad", votes: 45, percentage: 45 },
        { text: "Ravindra Jadeja", votes: 35, percentage: 35 },
        { text: "Devon Conway", votes: 20, percentage: 20 }
      ],
      totalVotes: 12847,
      timeLeft: "2 days left"
    },
    {
      id: 2,
      question: "Best CSK match of IPL 2023?",
      options: [
        { text: "Final vs GT", votes: 60, percentage: 60 },
        { text: "vs MI at Chepauk", votes: 25, percentage: 25 },
        { text: "vs RCB thriller", votes: 15, percentage: 15 }
      ],
      totalVotes: 8234,
      timeLeft: "5 days left"
    }
  ];

  const fanActivities = [
    {
      id: 1,
      user: "Dhoni_Fan_2011",
      activity: "shared a photo",
      content: "CSK training session glimpse! 💪 #WhistlePodu",
      time: "2 hours ago",
      likes: 234,
      comments: 45,
      image: "📸"
    },
    {
      id: 2,
      user: "YellowArmy_Chennai",
      activity: "posted",
      content: "Can't wait for tomorrow's match! Chepauk will be on fire! 🔥🦁",
      time: "4 hours ago",
      likes: 156,
      comments: 28,
      image: "🔥"
    },
    {
      id: 3,
      user: "CSK_Since_Day1",
      activity: "shared a memory",
      content: "This day in 2018 - CSK lifted the trophy! 🏆 #Champions",
      time: "6 hours ago",
      likes: 892,
      comments: 123,
      image: "🏆"
    }
  ];

  const contests = [
    {
      id: 1,
      title: "Predict the Score Contest",
      description: "Win CSK merchandise by predicting the exact score of next match",
      prize: "Signed Jersey",
      participants: 2847,
      endDate: "Match Day",
      status: "active"
    },
    {
      id: 2,
      title: "Photo Contest: Best CSK Moment",
      description: "Share your best CSK moment photo and win exclusive meet & greet",
      prize: "Meet & Greet with Players",
      participants: 1523,
      endDate: "Mar 30, 2024",
      status: "active"
    },
    {
      id: 3,
      title: "Trivia Challenge",
      description: "Test your CSK knowledge in our weekly trivia championship",
      prize: "Match Tickets",
      participants: 5672,
      endDate: "Every Sunday",
      status: "weekly"
    }
  ];

  const handleVote = (pollId: number, optionIndex: number) => {
    if (!votedPolls.has(pollId)) {
      setSelectedPoll(pollId);
      setVotedPolls(prev => new Set(prev).add(pollId));
    }
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Fan <span className="text-primary">Zone</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow CSK fans, participate in polls, contests, and share your passion for the yellow army!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Fan Polls */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-heading font-semibold mb-6 flex items-center">
              <ThumbsUp className="mr-2 h-5 w-5 text-primary" />
              Fan Polls
            </h3>
            <div className="space-y-6">
              {polls.map((poll) => (
                <Card key={poll.id} className="card-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{poll.question}</CardTitle>
                      <Badge variant="outline">{poll.timeLeft}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {poll.totalVotes.toLocaleString()} votes
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {poll.options.map((option, index) => (
                        <div key={index}>
                          <button
                            onClick={() => handleVote(poll.id, index)}
                            className={`w-full text-left p-3 rounded-lg border transition-all ${
                              votedPolls.has(poll.id)
                                ? 'cursor-default'
                                : 'hover:border-primary hover:shadow-sm cursor-pointer'
                            }`}
                            disabled={votedPolls.has(poll.id)}
                          >
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium">{option.text}</span>
                              {votedPolls.has(poll.id) && (
                                <span className="text-sm font-semibold text-primary">
                                  {option.percentage}%
                                </span>
                              )}
                            </div>
                            {votedPolls.has(poll.id) && (
                              <Progress value={option.percentage} className="h-2" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                    {!votedPolls.has(poll.id) && (
                      <p className="text-xs text-muted-foreground mt-4 text-center">
                        Click on an option to vote
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Fan Feed */}
            <h3 className="text-2xl font-heading font-semibold mb-6 mt-12 flex items-center">
              <MessageCircle className="mr-2 h-5 w-5 text-primary" />
              Fan Feed
            </h3>
            <div className="space-y-4">
              {fanActivities.map((activity) => (
                <Card key={activity.id} className="card-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-csk flex items-center justify-center">
                        <span className="text-lg">{activity.image}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-sm">{activity.user}</span>
                          <span className="text-muted-foreground text-sm">{activity.activity}</span>
                          <span className="text-muted-foreground text-xs">• {activity.time}</span>
                        </div>
                        <p className="text-sm mb-3">{activity.content}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <button className="flex items-center gap-1 hover:text-primary transition-colors">
                            <Heart className="h-3 w-3" />
                            {activity.likes}
                          </button>
                          <button className="flex items-center gap-1 hover:text-primary transition-colors">
                            <MessageCircle className="h-3 w-3" />
                            {activity.comments}
                          </button>
                          <button className="flex items-center gap-1 hover:text-primary transition-colors">
                            <Share2 className="h-3 w-3" />
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button variant="outline" className="w-full">
                Load More Posts
              </Button>
            </div>
          </div>

          {/* Contests & Sidebar */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-6 flex items-center">
              <Gift className="mr-2 h-5 w-5 text-primary" />
              Contests
            </h3>
            <div className="space-y-4">
              {contests.map((contest) => (
                <Card key={contest.id} className="card-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">{contest.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{contest.description}</p>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Prize:</span>
                        <span className="font-semibold text-primary">{contest.prize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Participants:</span>
                        <span className="font-semibold">{contest.participants.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Ends:</span>
                        <span className="font-semibold">{contest.endDate}</span>
                      </div>
                    </div>
                    
                    <Button size="sm" className="w-full mt-3 bg-gradient-csk">
                      Participate Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Fan Stats */}
            <Card className="mt-6 card-shadow bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  Community Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Fans:</span>
                    <span className="font-semibold text-primary">2.4M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Posts Today:</span>
                    <span className="font-semibold">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Polls:</span>
                    <span className="font-semibold">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Live Contests:</span>
                    <span className="font-semibold">5</span>
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

export default FanZone;