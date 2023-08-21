from .player import Player

class Team:
    teamIndex: int
    players: list[Player]
    
    def __init__(self, num: int, players: list[tuple[int, str]]):
        self.teamIndex = num
        self.players = [Player(x) for x in players]