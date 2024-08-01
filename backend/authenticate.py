import pyrebase
config  = {
   

  }

firebase=pyrebase.initialize_app(config)
auth=firebase.auth()

email='test@gmail.com'
password='123456789'

#user=auth.create_user_with_email_and_password(email,password)



user=auth.sign_in_with_email_and_password(email,password)
print(user['localId'])