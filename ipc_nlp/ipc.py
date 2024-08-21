import pandas as pd
from datasets import Dataset
import json

# Load JSON data
with open('ipc_data.json', 'r') as file:
    data = json.load(file)

# Convert to DataFrame
df = pd.DataFrame(data)

# Convert to Hugging Face dataset
dataset = Dataset.from_pandas(df)
