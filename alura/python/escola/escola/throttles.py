from rest_framework.throttling import AnonRateThrottle

class MatriculasAnonRateThrottle(AnonRateThrottle):
    rate = '5/day'