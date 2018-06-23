from collections import Counter

runs = {'Aaron':469, 'Michael':478, 'AustinS':511, 'MattV':464, 'Cameron':477, 'Brenton':436, 'AustinM':441, 'Luke':450, 'MattM':455, 'Evan':443, 'Cory':470, 'Justin':458}
doubles = {'Aaron':197, 'Michael':190, 'AustinS':178, 'MattV':174, 'Cameron':179, 'Brenton':152, 'AustinM':152, 'Luke':195, 'MattM':187, 'Evan':139, 'Cory':236, 'Justin':183}
triples = {'Aaron':20, 'Michael':12, 'AustinS':15, 'MattV':18, 'Cameron':21, 'Brenton':21, 'AustinM':13, 'Luke':19, 'MattM':13, 'Evan':8, 'Cory':9, 'Justin':20}
hr = {'Aaron':129, 'Michael':118, 'AustinS':132, 'MattV':120, 'Cameron':131, 'Brenton':142, 'AustinM':149, 'Luke':148, 'MattM':140, 'Evan':128, 'Cory':125, 'Justin':114}
rbi = {'Aaron':425, 'Michael':438, 'AustinS':512, 'MattV':436, 'Cameron':431, 'Brenton':404, 'AustinM':498, 'Luke':453, 'MattM':417, 'Evan':409, 'Cory':471, 'Justin':429}
sb = {'Aaron':42, 'Michael':62, 'AustinS':59, 'MattV':67, 'Cameron':77, 'Brenton':60, 'AustinM':46, 'Luke':33, 'MattM':82, 'Evan':32, 'Cory':35, 'Justin':47}
avg = {'Aaron':.2624, 'Michael':.2540, 'AustinS':.2650, 'MattV':.2584, 'Cameron':.2625, 'Brenton':.2395, 'AustinM':.2493, 'Luke':.2592, 'MattM':.2589, 'Evan':.2527, 'Cory':.2653, 'Justin':.2589}

k = {'Aaron':747, 'Michael':761, 'AustinS':699, 'MattV':661, 'Cameron':737, 'Brenton':806, 'AustinM':710, 'Luke':669, 'MattM':833, 'Evan':767, 'Cory':759, 'Justin':626}
qs = {'Aaron':65, 'Michael':56, 'AustinS':40, 'MattV':51, 'Cameron':69, 'Brenton':58, 'AustinM':44, 'Luke':48, 'MattM':59, 'Evan':64, 'Cory':48, 'Justin':60}
w = {'Aaron':51, 'Michael':54, 'AustinS':35, 'MattV':40, 'Cameron':50, 'Brenton':45, 'AustinM':43, 'Luke':43, 'MattM':49, 'Evan':34, 'Cory':40, 'Justin':47}
sv = {'Aaron':0, 'Michael':45, 'AustinS':48, 'MattV':61, 'Cameron':0, 'Brenton':63, 'AustinM':28, 'Luke':33, 'MattM':50, 'Evan':45, 'Cory':43, 'Justin':17}
era = {'Aaron':3.866, 'Michael':3.916, 'AustinS':4.358, 'MattV':3.384, 'Cameron':3.971, 'Brenton':3.981, 'AustinM':3.401, 'Luke':4.173, 'MattM':3.375, 'Evan':3.439, 'Cory':3.202, 'Justin':3.899}
whip = {'Aaron':1.197, 'Michael':1.212, 'AustinS':1.281, 'MattV':1.144, 'Cameron':1.244, 'Brenton':1.243, 'AustinM':1.166, 'Luke':1.278, 'MattM':1.211, 'Evan':1.164, 'Cory':1.180, 'Justin':1.226}
knine = {'Aaron':9.66, 'Michael':8.77, 'AustinS':9.46, 'MattV':9.64, 'Cameron':8.06, 'Brenton':8.94, 'AustinM':9.82, 'Luke':8.70, 'MattM':9.76, 'Evan':8.68, 'Cory':9.46, 'Justin':7.92}

# sort runs from most to least
runs_rank = sorted(runs, key=runs.get, reverse=True)

# enumerate sorted runs to number them
runs_rank = {key: rank for rank, key in enumerate(sorted(runs, key=runs.get, reverse=True), 1)}
print('Runs Rank:', runs_rank)

doubles_rank = sorted(doubles, key=doubles.get, reverse=True)
doubles_rank = {key: rank for rank, key in enumerate(sorted(doubles, key=doubles.get, reverse=True), 1)}
print('Doubles Rank:', doubles_rank)

tripless_rank = sorted(triples, key=triples.get, reverse=True)
triples_rank = {key: rank for rank, key in enumerate(sorted(triples, key=triples.get, reverse=True), 1)}
print('3B Rank:', triples_rank)

hr_rank = sorted(hr, key=hr.get, reverse=True)
hr_rank = {key: rank for rank, key in enumerate(sorted(hr, key=hr.get, reverse=True), 1)}
print('HR Rank:', hr_rank)

rbi_rank = sorted(rbi, key=rbi.get, reverse=True)
rbi_rank = {key: rank for rank, key in enumerate(sorted(rbi, key=rbi.get, reverse=True), 1)}
print('RBI Rank:', rbi_rank)

sb_rank = sorted(sb, key=sb.get, reverse=True)
sb_rank = {key: rank for rank, key in enumerate(sorted(sb, key=sb.get, reverse=True), 1)}
print('SB Rank:', sb_rank)

avg_rank = sorted(avg, key=avg.get, reverse=True)
avg_rank = {key: rank for rank, key in enumerate(sorted(avg, key=avg.get, reverse=True), 1)}
print('AVG Rank:', avg_rank)

k_rank = sorted(k, key=k.get, reverse=True)
k_rank = {key: rank for rank, key in enumerate(sorted(k, key=k.get, reverse=True), 1)}
print('K Rank:', k_rank)

qs_rank = sorted(qs, key=qs.get, reverse=True)
qs_rank = {key: rank for rank, key in enumerate(sorted(qs, key=qs.get, reverse=True), 1)}
print('QS Rank:', qs_rank)

w_rank = sorted(w, key=w.get, reverse=True)
w_rank = {key: rank for rank, key in enumerate(sorted(w, key=w.get, reverse=True), 1)}
print('Wins Rank:', w_rank)

sv_rank = sorted(sv, key=sv.get, reverse=True)
sv_rank = {key: rank for rank, key in enumerate(sorted(sv, key=sv.get, reverse=True), 1)}
print('Saves Rank:', sv_rank)

era_rank = sorted(era, key=era.get)
era_rank = {key: rank for rank, key in enumerate(sorted(era, key=era.get), 1)}
print('ERA Rank:', era_rank)

whip_rank = sorted(whip, key=whip.get)
whip_rank = {key: rank for rank, key in enumerate(sorted(whip, key=whip.get), 1)}
print('WHIP Rank:', whip_rank)

knine_rank = sorted(knine, key=knine.get, reverse=True)
knine_rank = {key: rank for rank, key in enumerate(sorted(knine, key=knine.get, reverse=True), 1)}
print('K:9 Rank:', knine_rank)

# combine each ranking number to receive a total ranking numeric value
total_rank = dict(Counter(hits_rank) + Counter(runs_rank) + Counter(era_rank))

# divide each total ranking value by number of categories (to receive an average ranking value)
for key, value in total_rank.items():
    total_rank[key] = value / 14

# sort avg. ranking value from least to most
new_rank = sorted(total_rank, key=lambda x : total_rank[x])

print('Power Rankings:')

# enumerate sorted avg. value to place numeric rank value next to each user, print/return values
for count, elem in enumerate(new_rank, 1):
     print(count, elem)

''' Last statement returns:
Power Rankings:
1 MattM
2 Aaron
3 Michael
etc.
'''
