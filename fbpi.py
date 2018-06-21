from collections import Counter

hits = {'Brenton':20, 'Cameron':19, 'Justin':18}
runs = {'Brenton':19, 'Cameron':20, 'Justin':18}
era = {'Brenton':1.18, 'Cameron':1.11, 'Justin':3.12}

hits_rank = sorted(hits, key = lambda x : hits[x], reverse = True)
print('Hits Rank: %s' % hits_rank)

runs_rank = sorted(runs, key = lambda x : runs[x], reverse = True)
print('Runs Rank: %s' % runs_rank)

era_rank = sorted(era, key = lambda x : era[x])
print('ERA Rank: %s' % era_rank)

# Going to take an approach using nested dictionary
