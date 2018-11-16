# Fantasy Baseball Power Index Generator

This is essentially (totally) a fantasy baseball league I'm trying to generate a 'power ranking' index of sorts for. Full data set will be 12 teams w/ 14 categories each. This is for the sole purpose of offering up the fantasy argument of "well, I may be in last place, but my avg. category ranking (power ranking) would actually have me in 6th... I'm just un-lucky this year..."

User-stories: 12 teams each provide 14 categories of data. Take data sets, rank each team by category, return avg. ranking per team per all categories, print 'power ranking' listing each team's avg. cateogry ranking from least (best) to most (worst).

Update 10/26 ** Fully funcational via Python, working on converting to Java now. Java code will sort/print linkedHashMap of each category with index value, but haven't figured out how to grab said index value per sort/per key (so that I can add them all together pre key and divide by total number of categories).

Eventually want to convert to JavaScript. Also want to figure out how to automate/import data-set (ideally dynamically/via crawler) on backend.
