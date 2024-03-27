# from django.http import HttpResponse
from django.shortcuts import render
import pandas as pd
from joblib import load

def Dashboard(request):
    return render(request,'Dashboard.html')

def inventory(request):
    return render(request,'inventory.html')

def sales(request):
    return render(request,'sales.html')

rf_dollars_model = load('./savedModels/rf_dollarsm_model.joblib')
rf_quantity_model = load('./savedModels/rf_quantitym_model.joblib')

# Define a view function for handling predictions
# def predict_sales(request):
#     store=request.GET['store']
#     brand=request.GET['brand']
#     month=request.GET['month']
#     year=request.GET['year']
#     df = pd.read_csv('./Datasets/monthly_sales.csv')
#     df.head()
#      # Automatically adjust values for 'Volume' and 'MonthlyVolume'
#     first_volume = df[df['Store'] == store & (df['Brand'] == brand)]['Volume'].iloc[0]
#     first_monthly_volume = df[df['Store'] == store & (df['Brand'] == brand)]['MonthlyVolume'].iloc[0]
#     # Prepare input data for prediction
#     input_data = pd.DataFrame({
#         'Store': [store],
#         'Brand':[brand],
#         'Month': [month],
#         'Year': [year],
#         'MonthlyVolume': [first_monthly_volume],
#         'Volume': [first_volume]
#     })

#     # Make predictions using the loaded models
#     predicted_dollars = rf_dollars_model.predict(input_data)
#     predicted_quantity = rf_quantity_model.predict(input_data)

#     # Pass the predicted values to the template
#     context = {
#         'predicted_dollars': predicted_dollars[0],
#         'predicted_quantity': predicted_quantity[0]
#     }
#     return render(request, 'results.html', context)

def predict_sales(request):
    store = int(request.GET['store'])  # Convert to integer
    brand = int(request.GET['brand'])  # Convert to integer
    month = int(request.GET['month'])  # Convert to integer
    year = int(request.GET['year'])    # Convert to integer
    
    df = pd.read_csv('./Datasets/monthly_sales.csv')
    
    # Automatically adjust values for 'Volume' and 'MonthlyVolume'
    condition = (df['Store'] == store) & (df['Brand'] == brand)
    first_volume = df[condition]['Volume'].iloc[0]
    first_monthly_volume = df[condition]['MonthlyVolume'].iloc[0]
    
    # Prepare input data for prediction
    input_data = pd.DataFrame({
        'Store': [store],
        'Brand': [brand],
        'Month': [month],
        'Year': [year],
        'MonthlyVolume': [first_monthly_volume],
        'Volume': [first_volume]
    })

    # Make predictions using the loaded models
    predicted_dollars = rf_dollars_model.predict(input_data)
    predicted_quantity = rf_quantity_model.predict(input_data)

    # Pass the predicted values to the template
    context = {
        'predicted_dollars': predicted_dollars[0],
        'predicted_quantity': predicted_quantity[0]
    }
    return render(request, 'sales.html', context)

# Create your views here.
