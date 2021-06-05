import ftplib
import os

class tracker:
    
    sizeWritten = 0

    def handle(self):
        print("still uploading.. .")


class Uploader:
    ftp = ftplib.FTP()

  

    def login(self):
        host  = "ftp.softmoremo.co.za"
        userName   = ""
        password = ""
 
  
        port = 21
        self.ftp.connect(host, port)
        print (self.ftp.getwelcome())
        try:
            print ("now logging in...")
            self.ftp.login(userName, password)
            self.ftp.cwd("bla.softmoremo.co.za/liveStream")
            
        except:
            print("failed")
   
    
    def uploadFile(self,fileName):
     
        #fileName = "stream"+str(fileNumber)+".tf"
        file = open("files/"+fileName,'rb')
        checker = tracker.handle
        
        self.ftp.storbinary('STOR '+fileName,file,1024,checker) 
        file.close()
        print("done")
    
    def closeFtp(self):
        self.ftp.quit()


