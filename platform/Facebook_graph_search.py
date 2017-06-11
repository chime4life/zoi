import facebook
access_token = 'xxxxxxxxxxxxxxxxxxxxxxxxxx'
graph = facebook.GraphAPI(access_token=access_token, version='2.9')
users = graph.search(type='id',q='100017987470688')

print len(users['data'])
# Each given id maps to an object.
for user in users['data']:
	print user
	if 'location' in user:
		print 'loc = ',user['location']
		print user['name'].encode('utf-8')
	#print('%s %s' % (user['id'],user['name'].encode('utf-8')))

places = graph.search(type='place', center='-23.563337,-46.654195', fields='name,location')

# Each given id maps to an object the contains the requested fields.
for place in places['data']:
    print place.keys()
    print place['name'].encode('utf-8')
    print(u' '.join([place['name'].encode(),place['location'].get('zip')]).encode('utf-8'))

friends = graph.get_connections(id='me', connection_name='friends')
print friends

import requests

url = 'http://www.khanacademy.org/api/v1/topic/'
topic='cc-5th-add-sub-decimals'
def get(topic):
	print "\n\n"+topic+"************************"
	url = 'http://www.khanacademy.org/api/v1/topic/'
	resp = requests.get(url+topic).json()
	for r in resp['children']:
		if r['kind']=='Video':
			re = requests.get(+topic).json()
			print r['url']
		if r['kind']=='Topic':
			get(r['id'])

import requests
from bs4 import BeautifulSoup
url = 'http://www.randomfunfacts.com/'
r = requests.get(url)
soup = BeautifulSoup(r.text)

lst = soup.find_all('i')
print(len(lst))
