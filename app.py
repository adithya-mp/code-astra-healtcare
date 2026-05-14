from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    symptoms = data.get('symptoms', '').lower()

    if 'chest pain' in symptoms:
        return jsonify({
            'condition': 'Possible Cardiac Issue',
            'severity': 'Critical',
            'advice': 'Seek immediate medical attention',
            'specialist': 'Cardiologist'
        })

    return jsonify({
        'condition': 'Viral Infection',
        'severity': 'Moderate',
        'advice': 'Hydration and rest',
        'specialist': 'General Physician'
    })

if __name__ == '__main__':
    app.run(debug=True)
