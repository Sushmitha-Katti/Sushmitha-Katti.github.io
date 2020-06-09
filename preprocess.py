a = ['WhatWhereKeywordCloud|whatwhere', 

'WhatWhereCountryMap|whatwhere' , 

'OnWhichMediaIsTheDiscussion|whatwhere',

'WhatWhereGenderDistribution|whatwhere' ,

'WhatWhereSentimentDistribution|whatwhere' ,

'WhatWhereLanguageDistribution|whatwhere',

'PositiveSentimentCloud|sentiment',

'NegativeSentimentCloud|sentiment' ,

'NeutralSentimentCloud|sentiment',

'SentimentBreakup|sentiment' ,

'MediaWiseSentimentBreakup|sentiment' ,

'TotalVolume|volume' ,

'TwitterProfileTable|twitter' ,

'TwitterDailyEngagement|twitter' ,

'TwitterEngagementScore|twitter' ,

'TwitterShareOfEngagement|twitter' ,

'TwitterEngagementComparision|twitter' ,

'BrandTweetsHourRange|twitter' ,

'BrandTweetsEngagementHour|twitter' ,

'BrandTweetsEngagementDay|twitter' ,

'BrandTweetsEngagementBasedOnDayHour|twitter' ,

'AverageTweetsPerDay|twitter' ,

'TwitterActivityComparision|twitter' ,

'TwitterResponseRate|twitter' ,

'MostEngagingPosts|twitter' ,

'LeastEngagingPosts|twitter' ,

'TwitterMostEngagingPostCards|twitter' ,

'TwitterLeastEngaingPostCards|twitter' ,

'InfluencersMostEngagedBySentiment|twitter_influencers' ,

'InfluencersMostEngaged|twitter_influencers' ,

'InfluencersMostEngagedKewordCloud|twitter_influencers' ,

'MostEngagedUserDetails|twitter_influencers' ,

'InfluencersMostValuable|twitter_influencers' ,

'MostValuableTweetCount|twitter_influencers' ,

'MostValuableUserDetails|twitter_influencers' ,

'TwitterTotalImpressions|impressions' ,

'OwnedTwitterImpression|impressions' ,

'EarnedTwitterImpressions|impressions' ,

'TwitterTotalReach|impressions' ,

'OwnedTwitterDailyImpression|impressions' ,

'OwnedTwitterReach|impressions' ,

'EarnedTwitterReach|impressions' ,

'TwitterBrandHashtags|twitter_hashtag' ,

'TwitterEarnedDailyImpressions|impressions' ,

'TwitterDailyImpressions|impressions' ,

'TwitterVolume|volume' ,

'TwitterOthersHashtags|twitter_hashtag' ,

'TwitterBrandHashtagsReach|twitter_hashtag' ,

'TwitterOthersHashtagsReach|twitter_hashtag' ,

'TwitterOwnedChatterCloud|twittercloud' ,

'TwitterEarnedChatterCloud|twittercloud' ,

'FollowersCountDailyTrend|fansreport' ,

'TwitterFollowersIncrement|fansreport']


'''
for each chart 
{id , value, class, height}
lets keep both id and value same.
class = checkinput

for each report

Report1: [chart1, chart2, chart3....]

Finally

reports = [
    {Report1  : [chart1, chart2, chart3....]}
    {Report2 : [chart1, chart2, chart3....]}
    ....
]

'''

reports = [

]
names = []
final = []


for i in a:
     chartdict = {}
     report = i.split('|')[1]
     chart = i.split('|')[0]
     chartdict = {'id' : chart, 'value' : chart, 'class': 'checkinput', 'height': '130'}
    
     if report in names:
        # print(report)
        index = names.index(report)
        # print(final[index])
        final[index][report].append(chartdict)

        

     else:
      final.append({report: [chartdict]})
    #   print(report)
      names.append(report)

for  i in final:
    print(i)
   


 