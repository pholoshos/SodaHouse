import time
import send


uploader = send.Uploader
uploader.login(uploader)
fileName = "stream.m3u8"
uploader.uploadFile(uploader,fileName)

uploadTime = 1000
currentFile =  0
delay = 3
while uploadTime > 0:
    time.sleep(delay)
    #upload here
    fileName = "stream"+str(currentFile)+".ts"
    uploader.uploadFile(uploader,fileName)
    uploader.uploadFile(uploader,"stream.m3u8")
    currentFile += 1
    uploadTime -=1
     
uploader.closeFtp

