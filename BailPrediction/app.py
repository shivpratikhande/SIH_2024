from flask import Flask, request, jsonify, send_from_directory
import json

app = Flask(__name__)

# Load the JSON data
with open('Laws.json') as laws_file:
    laws_data = json.load(laws_file)

with open('Offences.json') as offenses_file:
    offenses_data = json.load(offenses_file)

@app.route('/get_info', methods=['GET'])
def get_info():
    offenses_list = request.args.get('offenses')
    
    if not offenses_list:
        return jsonify({"error": "No offenses provided"}), 400
    
    # Split offenses by commas, "and", or spaces
    offenses_names = []
    temp_list = offenses_list.split(',')
    for part in temp_list:
        offenses_names.extend(part.replace(' and ', ' ').split())

    offenses_names = [name.strip() for name in offenses_names if name.strip()]
    
    results = []
    
    for offense_name in offenses_names:
        # Find the offense details
        offense = next((item for item in offenses_data if item['Offense_Name'].lower() == offense_name.lower()), None)
        
        if not offense:
            results.append({"error": f"Offense '{offense_name}' not found"})
            continue
        
        # Find the related laws
        related_laws = [law for law in laws_data if law['Law_ID'] == offense['Law_ID']]
        
        result = {
            "Offense": offense_name,
            "Laws": [
                {
                    "Law_Name": law['Law_Name'],
                    "Abbreviation": law['Abbreviation'],
                    "Description": law['Description']
                }
                for law in related_laws
            ],
            "Penalty/Imprisonment Duration": offense.get('Penalty/Imprisonment Duration'),
            "Bail_Eligibility_Status": offense.get('Bail Eligibility Status')
        }
        
        results.append(result)
    
    return jsonify(results)

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
