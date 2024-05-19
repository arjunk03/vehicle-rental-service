from sqlalchemy import create_engine

engine = create_engine('postgresql+psycopg2://admin:admin123@127.0.0.1/vehicle_rental')