import requests

# url = 'http://localhost:9696/predict'
url ='https://ml-deployment-fastapi-production.up.railway.app/predict'

customer = {
    'gender': 'female',
    'seniorcitizen': 1,
    'partner': 'yes',
    'dependents': 'yes',
    'phoneservice': 'no',
    'multiplelines': 'no_phone_service',
    'internetservice': 'dsl',
    'onlinesecurity': 'no',
    'onlinebackup': 'yes',
    'deviceprotection': 'no',
    'techsupport': 'no',
    'streamingtv': 'no',
    'streamingmovies': 'no',
    'contract': 'month-to-month',
    'paperlessbilling': 'yes',
    'paymentmethod': 'electronic_check',
    'tenure': 15,
    'monthlycharges': 29.85,
    'totalcharges': 550
}

response = requests.post(url, json=customer)
predictions = response.json()

print(predictions)
if predictions['churn']:
    print('customer is likely to churn, send promo')
else:
    print('customer is not likely to churn')