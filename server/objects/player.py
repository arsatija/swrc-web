class Player:
    """
    A class to represent a player.
    
    ...
    
    Attributes
    ----------
    playerID : int
        id of the player in the match
        
    name : str
        name of the player in the match
    """
    playerID: int
    name: str
    
    def __init__(self, playerTuple: tuple[int, str]):
        self.playerID, self.name = playerTuple
        
    def __str__(self) -> str:
        return self.name