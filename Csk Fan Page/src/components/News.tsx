import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Eye, Share2, Bookmark } from 'lucide-react';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'CSK Announces Retention List for IPL 2024',
      excerpt: 'Chennai Super Kings retains key players including MS Dhoni, Ruturaj Gaikwad, and Ravindra Jadeja for the upcoming season.',
      category: 'Team News',
      publishedAt: '2024-03-20',
      readTime: '3 min read',
      views: '12.5K',
      featured: true,
      image: '📰'
    },
    {
      id: 2,
      title: 'Dhoni\'s Leadership Masterclass in Recent Victory',
      excerpt: 'Captain Cool showcases tactical brilliance in CSK\'s commanding win against Mumbai Indians at Chepauk.',
      category: 'Match Analysis',
      publishedAt: '2024-03-18',
      readTime: '5 min read',
      views: '8.2K',
      featured: false,
      image: '👑'
    },
    {
      id: 3,
      title: 'New Signing Devon Conway Breaks Records',
      excerpt: 'New Zealand batsman sets new milestone for CSK with his explosive batting performance in recent matches.',
      category: 'Player News',
      publishedAt: '2024-03-15',
      readTime: '4 min read',
      views: '6.8K',
      featured: false,
      image: '🔥'
    },
    {
      id: 4,
      title: 'CSK Training Camp: Behind the Scenes',
      excerpt: 'Exclusive access to CSK\'s pre-season training camp where players prepare for another championship run.',
      category: 'Behind the Scenes',
      publishedAt: '2024-03-12',
      readTime: '6 min read',
      views: '5.5K',
      featured: false,
      image: '🏃‍♂️'
    },
    {
      id: 5,
      title: 'Fan Fest 2024: Celebrating Yellow Army',
      excerpt: 'CSK announces grand fan festival with player interactions, contests, and exclusive merchandise launches.',
      category: 'Fan Events',
      publishedAt: '2024-03-10',
      readTime: '2 min read',
      views: '15.3K',
      featured: false,
      image: '🎉'
    },
    {
      id: 6,
      title: 'Jadeja\'s All-Round Excellence Continues',
      excerpt: 'Sir Ravindra Jadeja showcases why he\'s one of the best all-rounders in world cricket with stellar performances.',
      category: 'Player Analysis',
      publishedAt: '2024-03-08',
      readTime: '4 min read',
      views: '7.1K',
      featured: false,
      image: '⚡'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Team News': return 'bg-blue-500';
      case 'Match Analysis': return 'bg-green-500';
      case 'Player News': return 'bg-purple-500';
      case 'Behind the Scenes': return 'bg-orange-500';
      case 'Fan Events': return 'bg-pink-500';
      case 'Player Analysis': return 'bg-indigo-500';
      default: return 'bg-gray-500';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Latest <span className="text-primary">News</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest happenings from the CSK camp. Get insider news, match analyses, and exclusive content.
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <Card className="mb-12 card-shadow hover:shadow-csk transition-all duration-300 bg-gradient-card">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className={`${getCategoryColor(featuredArticle.category)} text-white`}>
                      {featuredArticle.category}
                    </Badge>
                    <Badge variant="outline" className="border-primary text-primary">
                      Featured
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 text-lg">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {formatDate(featuredArticle.publishedAt)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {featuredArticle.views} views
                      </div>
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="bg-gradient-csk hover:shadow-csk">
                      Read Full Article
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm">
                      <Bookmark className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                  </div>
                </div>
                
                <div className="lg:w-48 flex lg:flex-col items-center justify-center">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-csk flex items-center justify-center text-4xl lg:text-5xl animate-stadium-pulse">
                    {featuredArticle.image}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map((article) => (
            <Card key={article.id} className="card-shadow hover:shadow-csk transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className={`${getCategoryColor(article.category)} text-white text-xs`}>
                    {article.category}
                  </Badge>
                  <div className="text-2xl">{article.image}</div>
                </div>
                
                <h4 className="font-semibold mb-3 group-hover:text-primary transition-colors cursor-pointer line-clamp-2">
                  {article.title}
                </h4>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {formatDate(article.publishedAt)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {article.views}
                  </div>
                  <span>{article.readTime}</span>
                </div>
                
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button className="bg-gradient-csk hover:shadow-csk">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;