hits = {'Brenton':20,
        'Cameron':14,
        'Justin':11}

runs = {'Brenton':15,
        'Cameron':16,
        'Justin':10}

era = {'Brenton':3.99,
       'Cameron':2.22,
       'Justin':1.03}

hits_rank = sorted(hits, key = lambda x : hits[x], reverse = True)
print('Hits Rank: %s' % hits_rank)

runs_rank = sorted(runs, key = lambda x : runs[x], reverse = True)
print('Runs Rank: %s' % runs_rank)

era_rank = sorted(era, key = lambda x : era[x])
print('ERA Rank: %s' % era_rank)

''' Output sorts as intended, now to evaluate compared with each dict.
Thinking I should be iterating through new lists and assigning value based on position in list (i.e.: first = 1, second 2, etc.)
Then averaging aggregate of all value ranks for each category to obtain true 'power rank'
Will need to assign value based on position in new dicts/ key/value pairs?
'''
