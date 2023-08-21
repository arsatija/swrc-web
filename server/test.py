from objects.match import Match


game = Match('ctf_engine', 'ModMPGame.TAGCTFGame')

republic = [(0, 'Raider_Fan'), (1, 'RaV'), (5, '-=TAG=-Helios�'), (6, 'Twrch')]
trando = [(2,'dog'), (4,'Skate'), (7,'slicer'), (8,'RaiderX')]

game.republic = republic
game.trando = trando

print([str(player) for player in game.players])
