from pathlib import Path
from match import Match

path = Path(__file__).resolve().parents[1]
file = open(path / "Logs/Combat/CombatEvents_8-17-2023_21-49-11.log")

endgame: bool = False
count = 0

def trim(x:str) -> str:
    return x.strip()

def toPlayer(player: str) -> tuple[int, str]:
    """Converts player string tuple from log into a python tuple to store as an object

    Args:
        player (str): player tuple in string format

    Returns:
        tuple[int, str]: return player tuple as object
    """
    player = player.strip('()')
    playerID, playerName = player.split(',') 
    return (int(playerID), playerName)

while count < 4:
    inline = file.readline()
    timestamp, inline = inline.split(']', 1)
    timestamp = timestamp[1:]
    date, time = timestamp.split(' ')
    tag, inline = map(trim ,inline.split(':', 1))
    print(date, time)
    print(tag)
    print(inline)
    
    if tag == 'Map':
        mapname = inline
        print(mapname)
    elif tag == 'GameMode':
        gamemode = inline
        print(gamemode)
    elif tag == 'Team':
        if inline.startswith('team_list'):
            inline = trim(inline.split('team_list')[1]).split()
            team, inline = inline[0], inline[1:]
            print(team)
            players = [toPlayer(player) for player in inline]
            print(players)
        
        
    count += 1
    
