from collections import Counter
stats = {}
stats ['Brenton'] = {'Hits': 20, 'Runs': 19, 'ERA': 1.99}
stats ['Justin'] = {'Hits': 19, 'Runs': 18, 'ERA': 3.01}
stats ['Cameron'] = {'Hits': 17, 'Runs': 20, 'ERA': 1.09}

hits_rank = sorted(hits, key = lambda x : hits[x], reverse = True)
print('Hits Rank: %s' % hits_rank)

runs_rank = sorted(runs, key = lambda x : runs[x], reverse = True)
print('Runs Rank: %s' % runs_rank)

era_rank = sorted(era, key = lambda x : era[x])
print('ERA Rank: %s' % era_rank)

# Going to take an approach using nested dictionary
