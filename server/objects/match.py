from .team import Team

class Match:
    _republic: Team
    _trando: Team
    
    map: str
    gamemode: str
    
    def __init__(self, map, gamemode):
        self.map = map
        self.gamemode = gamemode
        
    @property
    def republic(self):
        return self._republic
    
    @republic.setter
    def republic(self, teamList: list[tuple[int, str]]):
        self._republic = Team(0, teamList)
        
    @property
    def trando(self):
        return self._trando
    
    @trando.setter
    def trando(self, teamList: list[tuple[int, str]]):
        self._trando = Team(1, teamList)
    
    @property
    def players(self):
        return self.republic.players + self.trando.players 
    