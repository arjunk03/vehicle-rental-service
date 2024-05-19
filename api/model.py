from connection import engine
from sqlalchemy import Table, Column, Integer, String, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Session = sessionmaker(bind = engine)
session = Session()


# meta = MetaData()

# students = Table(
#    'students', meta, 
#    Column('id', Integer, primary_key = True), 
#    Column('name', String), 
#    Column('lastname', String), 
# )

# meta.create_all(engine)

Base = declarative_base()

class VehicleCategory(Base):
    __tablename__ = 'veh_category'
    # __table_args__ = {'mysql_engine':'InnoDB'}

    table_id = Column(Integer, primary_key=True)
    categ_name = Column(String(255))
    description = Column(String(255))
    created = Column(String(255))
    modified = Column(String(255))
    user = Column(String(255))

    def obj_to_dict(self):  # for build json format
        return {
            "categ_name": self.categ_name,
            "description": self.description,
            "table_id": self.table_id,
            "created": self.created,
            "modified": self.modified,
            "user": self.user
        }
    
    
Base.metadata.create_all(engine)



def add_veh_category(data):    
    

    cat_data = VehicleCategory(
        categ_name = data["category"],
        description = data["catgryDescr"]
    )

    session.add(cat_data)
    session.commit()


def get_veh_category():
    result = session.query(VehicleCategory).all()

    return result
