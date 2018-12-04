import subprocess 
from random import randint
import os

videoID = 'tWzqdgNa-bTbAZM2I-sx4Q-J0qo-Gih7-zdQS8GwiYZHZ'
numSegments = 2 # this includes the 0th segment, so, if they're numbered 0 to 5, there are 6 segments

randomNumber = randint(1, 10000)

fileNameTS = 'video_{}.ts'.format(randomNumber)

f = open(fileNameTS, 'a')

print('File {} created'.format(fileNameTS))

cookie = 'PHPSESSID=dv3kequp8hl84689nrgk7d58e6; _identity=019be9c327703e86468bc7d8c1d8eef6d04e5091e0269f798c2b0dfabf837965a%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_identity%22%3Bi%3A1%3Bs%3A146%3A%22%5B36552%2C%22QJH6W6JYOSpsZ2ZHoiDY3bgUtePhqFr8L1cTyFeCJZOYQnjeAWjSGSekXq9rOh2FhPWdvDsDB-BfaG8FVxOTfUk_01-W70rzl99F54DBfMiYySIHE63rfTV3bC5Q3YNC%22%2C2592000%5D%22%3B%7D; _csrf=1a6e6e2b1bb7468e333aff6dcf25bc68585aa2dd54ad7403fe4f770fd8ea0ce3a%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22jcJjhwCeUxMJ26_1v70BqlmkHlpX-GjZ%22%3B%7D'
referer = 'https://hutt.co/cherubesque'

i = 0
while i < numSegments:
    segmentID = '{0:0{width}}'.format(i, width=5)
    
    callToMake = "curl --location 'https://hutt.co/video/{}/segment_{}.ts' -H 'DNT: 1' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Mobile Safari/537.36' -H 'Accept: */*' -H 'Referer: {}' -H 'Cookie: {}' -H 'Connection: keep-alive' --compressed".format(videoID, segmentID, referer, cookie)

    subprocess.call(callToMake, shell=True, stdout=f) 

    i += 1

f.close()

print("All done downloading! Now converting...")
convertedVideoFileName = 'video_{}.mp4'.format(randomNumber)

callToMake = 'ffmpeg -i {} -acodec copy -vcodec copy {}'.format(fileNameTS, convertedVideoFileName)

subprocess.call(callToMake, shell=True) 

print("Converted to {}!".format(convertedVideoFileName))

os.remove(fileNameTS)
