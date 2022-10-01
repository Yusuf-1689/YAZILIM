from .base import *

env_name = config("ENV_NAME")

if env_name == "prod":  # dev yazılarak deneme yapılır
    
 from .prod import *
 
elif env_name == "dev":
    
 from .dev import *