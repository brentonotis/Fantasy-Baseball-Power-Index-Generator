from collections import Counter

hits = {'Brenton':20, 'Cameron':19, 'Justin':18}
runs = {'Brenton':19, 'Cameron':20, 'Justin':18}
era = {'Brenton':1.18, 'Cameron':1.11, 'Justin':3.12}

# sort hits from most to least
hits_rank = sorted(hits, key=hits.get, reverse=True)

# enumerate sorted hits to number them
hits_rank = {key: rank for rank, key in enumerate(sorted(hits, key=hits.get, reverse=True), 1)}

print('Hits Rank:', hits_rank)

runs_rank = sorted(runs, key=runs.get, reverse=True)
runs_rank = {key: rank for rank, key in enumerate(sorted(runs, key=runs.get, reverse=True), 1)}
print('Runs Rank:', runs_rank)

era_rank = sorted(era, key=era.get)
era_rank = {key: rank for rank, key in enumerate(sorted(era, key=era.get), 1)}
print('ERA Rank:', era_rank)

# combine each ranking number to receive a total ranking numeric value
total_rank = dict(Counter(hits_rank) + Counter(runs_rank) + Counter(era_rank))

# divide each total ranking value by number of categories (to receive an average ranking value)
for key, value in total_rank.items():
    total_rank[key] = value / 3

# sort avg. ranking value from least to most
new_rank = sorted(total_rank, key=lambda x : total_rank[x])

print('Power Rankings:')

# enumerate sorted avg. value to place numeric rank value next to each user, print/return values
for count, elem in enumerate(new_rank, 1):
     print(count, elem)
