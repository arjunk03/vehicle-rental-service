from flask import Flask
from flask import request
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS, cross_origin

from model import add_veh_category


app = Flask(__name__)
api = Api(app)


cors = CORS(app, resources={"/vrs/*": {"origins": "*", "allow_headers": "*", "expose_headers": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

parser = reqparse.RequestParser()


class VehicleCategory(Resource):
    def get(self):
        return {'hello': 'velicle catefgory'}

    def post(self):
        data = request.json

        add_veh_category(data)




class Vehicle(Resource):
    def get(self):
        return {'hello': 'velicle'}

api.add_resource(VehicleCategory, '/vrs/category')
api.add_resource(Vehicle, '/vrs/vehicle')

if __name__ == '__main__':
    app.run(debug=True)