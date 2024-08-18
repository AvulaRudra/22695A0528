import requests

url = "http://20.244.56.144/test/auth"

payload = {
   
    "companyName": "Madanapalle Institute of Technology and Science",
    "clientID": "c6f13a8c-5767-4137-b16f-dce2acec358f",
    "clientSecret": "siZTzZpFBSkrmCxk",
    "ownerName": "Rudra",
    "ownerEmail": "22695A0528@mits.ac.in",
    "rollNo": "22695A0528"
}

response = requests.post(url, json=payload)

# Check for status code 200 or 201
if response.status_code in [200, 201]:
    token_info = response.json()
    print("Authorization Token:", token_info)
else:
    print("Failed to obtain token. Status Code:", response.status_code)
    print("Response Content:", response.text)