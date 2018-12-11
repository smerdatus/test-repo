# generate array with bash
# files=(*.mp4)
# for item in $files
#do
#printf "'%s'," $item
#done

array = ['10.mp4','11.mp4','12.mp4','13.mp4','14.mp4','15.mp4','16.mp4','17.mp4','18.mp4','19.mp4','2.mp4','20.mp4','21.mp4','22.mp4','3.mp4','4.mp4','5.mp4','6.mp4','7.mp4','8.mp4','9.mp4','sm4.mp4','sm5.mp4','sophiemudd_22_6_2018_1_29_15_896.mp4','sophiemudd_22_6_2018_1_29_7_814.mp4']

i = 0

while i < len(array):
    video = "./assets/sm/videos/{}".format(array[i]) # UPDATE THIS
    img = "{}.png".format(video) 
    print("import video_{} from '{}';".format(i, video))
    print("import img_{} from '{}';".format(i, img))
    i += 1

i = 0

while i < len(array):
    video = "video_{}".format(i)
    img = "img_{}".format(i) 
    print("          <div style={{{{padding: '1vh' }}}} onClick={{() => this.setState({{video: {}}})}}>\n            <img src={{{}}} style={{{{height: '20vh'}}}} />\n          </div>".format(video, img))
    i += 1