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
