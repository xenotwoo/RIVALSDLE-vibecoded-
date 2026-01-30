import React, { useState, useEffect } from 'react';
import { RotateCcw, Search } from 'lucide-react';

const MarvelRivalsWordle = () => {
  const characters = [
    // Vanguards
    { name: 'Doctor Strange', gender: 'Male', role: 'Vanguard', team: 'Defenders', origins: ['Earth'] },
    { name: 'Hulk', gender: 'Male', role: 'Vanguard', team: 'Avengers', origins: ['Earth'] },
    { name: 'Groot', gender: 'Male', role: 'Vanguard', team: 'Guardians', origins: ['Space'] },
    { name: 'Peni Parker', gender: 'Female', role: 'Vanguard', team: 'Spider-Verse', origins: ['Earth'] },
    { name: 'Magneto', gender: 'Male', role: 'Vanguard', team: 'Mutants', origins: ['Earth'] },
    { name: 'Venom', gender: 'Male', role: 'Vanguard', team: 'Anti-Heroes', origins: ['Earth'] },
    { name: 'Thor', gender: 'Male', role: 'Vanguard', team: 'Avengers', origins: ['Asgard', 'Earth'] },
    { name: 'Captain America', gender: 'Male', role: 'Vanguard', team: 'Avengers', origins: ['Earth'] },
    { name: 'The Thing', gender: 'Male', role: 'Vanguard', team: 'Fantastic Four', origins: ['Earth'] },
    { name: 'Emma Frost', gender: 'Female', role: 'Vanguard', team: 'Mutants', origins: ['Earth'] },
    { name: 'Angela', gender: 'Female', role: 'Vanguard', team: 'Asgardians', origins: ['Asgard'] },
    { name: 'Rogue', gender: 'Female', role: 'Vanguard', team: 'Mutants', origins: ['Earth'] },
    { name: 'Deadpool', gender: 'Male', roles: ['Duelist', 'Strategist', 'Vanguard'], team: 'Anti-Heroes', origins: ['Earth'] },
    
    // Duelists
    { name: 'Iron Man', gender: 'Male', role: 'Duelist', team: 'Avengers', origins: ['Earth'] },
    { name: 'Spider-Man', gender: 'Male', role: 'Duelist', team: 'Spider-Verse', origins: ['Earth'] },
    { name: 'Namor', gender: 'Male', role: 'Duelist', team: 'Atlantis', origins: ['Atlantis', 'Earth'] },
    { name: 'Black Panther', gender: 'Male', role: 'Duelist', team: 'Avengers', origins: ['Wakanda', 'Earth'] },
    { name: 'Magik', gender: 'Female', role: 'Duelist', team: 'Mutants', origins: ['Limbo', 'Earth'] },
    { name: 'Storm', gender: 'Female', role: 'Duelist', team: 'Mutants', origins: ['Africa', 'Earth'] },
    { name: 'Star-Lord', gender: 'Male', role: 'Duelist', team: 'Guardians', origins: ['Space', 'Earth'] },
    { name: 'The Punisher', gender: 'Male', role: 'Duelist', team: 'Anti-Heroes', origins: ['Earth'] },
    { name: 'Scarlet Witch', gender: 'Female', role: 'Duelist', team: 'Avengers', origins: ['Sokovia', 'Earth'] },
    { name: 'Hela', gender: 'Female', role: 'Duelist', team: 'Asgardians', origins: ['Asgard'] },
    { name: 'Winter Soldier', gender: 'Male', role: 'Duelist', team: 'Avengers', origins: ['Earth'] },
    { name: 'Psylocke', gender: 'Female', role: 'Duelist', team: 'Mutants', origins: ['Earth'] },
    { name: 'Moon Knight', gender: 'Male', role: 'Duelist', team: 'Anti-Heroes', origins: ['Earth'] },
    { name: 'Hawkeye', gender: 'Male', role: 'Duelist', team: 'Avengers', origins: ['Earth'] },
    { name: 'Squirrel Girl', gender: 'Female', role: 'Duelist', team: 'Young Avengers', origins: ['Earth'] },
    { name: 'Iron Fist', gender: 'Male', role: 'Duelist', team: 'Defenders', origins: ['Earth'] },
    { name: 'Black Widow', gender: 'Female', role: 'Duelist', team: 'Avengers', origins: ['Earth'] },
    { name: 'Wolverine', gender: 'Male', role: 'Duelist', team: 'Mutants', origins: ['Canada', 'Earth'] },
    { name: 'Mister Fantastic', gender: 'Male', role: 'Duelist', team: 'Fantastic Four', origins: ['Earth'] },
    { name: 'Human Torch', gender: 'Male', role: 'Duelist', team: 'Fantastic Four', origins: ['Earth'] },
    { name: 'Phoenix', gender: 'Female', role: 'Duelist', team: 'Mutants', origins: ['Earth'] },
    { name: 'Blade', gender: 'Male', role: 'Duelist', team: 'Anti-Heroes', origins: ['Earth'] },
    { name: 'Daredevil', gender: 'Male', role: 'Duelist', team: 'Defenders', origins: ['Earth'] },
    
    // Strategists
    { name: 'Luna Snow', gender: 'Female', role: 'Strategist', team: 'Agents', origins: ['Korea', 'Earth'] },
    { name: 'Loki', gender: 'Male', role: 'Strategist', team: 'Anti-Heroes', origins: ['Asgard', 'Earth'] },
    { name: 'Rocket Raccoon', gender: 'Male', role: 'Strategist', team: 'Guardians', origins: ['Space'] },
    { name: 'Mantis', gender: 'Female', role: 'Strategist', team: 'Guardians', origins: ['Space', 'Earth'] },
    { name: 'Adam Warlock', gender: 'Male', role: 'Strategist', team: 'Guardians', origins: ['Space'] },
    { name: 'Jeff the Land Shark', gender: 'Male', role: 'Strategist', team: 'Guardians', origins: ['Space'] },
    { name: 'Cloak & Dagger', gender: 'Female', role: 'Strategist', team: 'Defenders', origins: ['Earth'] },
    { name: 'Invisible Woman', gender: 'Female', role: 'Strategist', team: 'Fantastic Four', origins: ['Earth'] },
    { name: 'Ultron', gender: 'Male', role: 'Strategist', team: 'Avengers', origins: ['Earth'] },
    { name: 'Gambit', gender: 'Male', role: 'Strategist', team: 'Mutants', origins: ['Earth'] },
    { name: 'Elsa Bloodstone', gender: 'Female', role: 'Strategist', team: 'Anti-Heroes', origins: ['Earth'] },
  ];

  const [secretCharacter, setSecretCharacter] = useState(null);
  const [guesses, setGuesses] = useState([]);
  const [input, setInput] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const roles = ['Duelist', 'Strategist', 'Vanguard'];
  const teams = ['Avengers', 'Defenders', 'Guardians', 'Mutants', 'Spider-Verse', 'Fantastic Four', 'Anti-Heroes', 'Asgardians', 'Agents', 'Atlantis', 'Young Avengers'];
  const origins = ['Earth', 'Space', 'Asgard', 'Wakanda', 'Sokovia', 'Limbo', 'Africa', 'Canada', 'Korea', 'Atlantis'];

  useEffect(() => {
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    setSecretCharacter(randomCharacter);
  }, []);

  useEffect(() => {
    if (input.length > 0) {
      const filtered = characters.filter(char =>
        char.name.toLowerCase().includes(input.toLowerCase()) &&
        !guesses.some(g => g.name === char.name)
      );
      setSuggestions(filtered.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  }, [input, guesses]);

  const getAttributeMatch = (guess, secret, attribute) => {
    if (attribute === 'origins') {
      // Check if any origin matches
      const guessOrigins = guess.origins;
      const secretOrigins = secret.origins;
      const hasMatch = guessOrigins.some(origin => secretOrigins.includes(origin));
      return hasMatch ? 'partial' : 'incorrect';
    }
    if (attribute === 'role') {
      // Handle Deadpool's multiple roles
      const guessRole = Array.isArray(guess.role) ? guess.role : guess.roles || [guess.role];
      const secretRole = Array.isArray(secret.role) ? secret.role : secret.roles || [secret.role];
      const hasMatch = guessRole.some(role => secretRole.includes(role));
      return hasMatch ? (guessRole.length === secretRole.length && guessRole.every(r => secretRole.includes(r)) ? 'correct' : 'partial') : 'incorrect';
    }
    const guessValue = guess[attribute];
    const secretValue = secret[attribute];
    if (guessValue === secretValue) return 'correct';
    return 'incorrect';
  };

  const handleGuess = (character) => {
    if (gameOver || won) return;

    const newGuess = character;
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
    setInput('');
    setShowSuggestions(false);

    if (newGuess.name === secretCharacter.name) {
      setWon(true);
      setGameOver(true);
    } else if (newGuesses.length >= 6) {
      setGameOver(true);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (character) => {
    handleGuess(character);
  };

  const resetGame = () => {
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    setSecretCharacter(randomCharacter);
    setGuesses([]);
    setInput('');
    setGameOver(false);
    setWon(false);
    setShowSuggestions(false);
  };

  if (!secretCharacter) return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-4 md:p-8 font-sans relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-black mb-2 bg-gradient-to-r from-red-500 via-yellow-400 to-red-600 bg-clip-text text-transparent tracking-tighter">
            MARVEL RIVALS
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-300 tracking-widest">CHARACTER WORDLE</h2>
          <p className="text-gray-400 mt-2 text-sm">Guess the character in 6 tries</p>
        </div>

        {/* Game Stats */}
        <div className="grid grid-cols-4 gap-3 mb-8">
          <div className="bg-gray-800/50 border border-gray-700 p-3 rounded-lg text-center backdrop-blur">
            <div className="text-2xl font-black text-red-500">{guesses.length}/6</div>
            <div className="text-xs text-gray-400 mt-1">GUESSES</div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 p-3 rounded-lg text-center backdrop-blur">
            <div className="text-2xl font-black text-yellow-400">{roles.length}</div>
            <div className="text-xs text-gray-400 mt-1">ROLES</div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 p-3 rounded-lg text-center backdrop-blur">
            <div className="text-2xl font-black text-blue-400">{teams.length}</div>
            <div className="text-xs text-gray-400 mt-1">TEAMS</div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 p-3 rounded-lg text-center backdrop-blur">
            <div className="text-2xl font-black text-purple-400">{origins.length}</div>
            <div className="text-xs text-gray-400 mt-1">ORIGINS</div>
          </div>
        </div>

        {/* Guesses Display */}
        {guesses.length > 0 && (
          <div className="space-y-3 mb-8">
            {guesses.map((guess, idx) => (
              <div key={idx} className="grid grid-cols-5 gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="bg-gray-700 text-white p-3 rounded font-bold text-center text-sm md:text-base truncate">
                  {guess.name}
                </div>
                <div className={`p-3 rounded font-bold text-center text-xs md:text-sm transition-all duration-300 flex items-center justify-center ${
                  getAttributeMatch(guess, secretCharacter, 'gender') === 'correct'
                    ? 'bg-green-600 text-white scale-110'
                    : 'bg-red-600 text-white'
                }`}>
                  {guess.gender}
                </div>
                <div className={`p-3 rounded font-bold text-center text-xs md:text-sm transition-all duration-300 flex items-center justify-center ${
                  getAttributeMatch(guess, secretCharacter, 'role') === 'correct'
                    ? 'bg-green-600 text-white scale-110'
                    : getAttributeMatch(guess, secretCharacter, 'role') === 'partial'
                    ? 'bg-yellow-600 text-white scale-105'
                    : 'bg-red-600 text-white'
                }`}>
                  <div className="text-center">
                    {Array.isArray(guess.roles) ? (
                      guess.roles.map((r, i) => (
                        <div key={i} className="text-xs leading-tight">{r}</div>
                      ))
                    ) : (
                      guess.role
                    )}
                  </div>
                </div>
                <div className={`p-3 rounded font-bold text-center text-xs md:text-sm transition-all duration-300 flex items-center justify-center ${
                  getAttributeMatch(guess, secretCharacter, 'team') === 'correct'
                    ? 'bg-green-600 text-white scale-110'
                    : 'bg-red-600 text-white'
                }`}>
                  {guess.team}
                </div>
                <div className={`p-3 rounded font-bold text-center text-xs md:text-sm transition-all duration-300 overflow-hidden flex items-center justify-center ${
                  getAttributeMatch(guess, secretCharacter, 'origins') === 'correct'
                    ? 'bg-green-600 text-white scale-110'
                    : getAttributeMatch(guess, secretCharacter, 'origins') === 'partial'
                    ? 'bg-yellow-600 text-white scale-105'
                    : 'bg-red-600 text-white'
                }`}>
                  <div className="text-center">
                    {guess.origins.map((origin, i) => (
                      <div key={i} className="text-xs leading-tight">{origin}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Legend */}
        <div className="grid grid-cols-5 gap-2 mb-6 text-gray-400 text-xs font-bold px-1">
          <div className="text-center">CHARACTER</div>
          <div className="text-center">GENDER</div>
          <div className="text-center">ROLE</div>
          <div className="text-center">TEAM</div>
          <div className="text-center">ORIGINS</div>
        </div>

        {/* Input Section */}
        {!gameOver && (
          <div className="relative mb-8">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Search a character..."
                  className="w-full bg-gray-800 border-2 border-gray-700 text-white p-4 rounded-lg placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all"
                  disabled={gameOver}
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
              </div>
              <button
                onClick={resetGame}
                className="bg-gray-800 border-2 border-gray-700 text-white p-4 rounded-lg hover:bg-gray-700 hover:border-gray-600 transition-all duration-200 flex items-center gap-2"
              >
                <RotateCcw size={20} />
              </button>
            </div>

            {/* Suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border-2 border-gray-700 rounded-lg overflow-hidden z-20 shadow-xl">
                {suggestions.map((char, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSuggestionClick(char)}
                    className="w-full text-left px-4 py-3 text-white hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-b-0 flex justify-between items-center"
                  >
                    <span className="font-semibold">{char.name}</span>
                    <span className="text-xs text-gray-400">{char.role}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Game Over States */}
        {gameOver && (
          <div className={`p-8 rounded-xl border-2 mb-8 text-center animate-in fade-in scale-95 duration-300 ${
            won
              ? 'bg-gradient-to-r from-green-900 to-emerald-900 border-green-500'
              : 'bg-gradient-to-r from-red-900 to-rose-900 border-red-500'
          }`}>
            <h3 className={`text-3xl md:text-4xl font-black mb-2 ${
              won ? 'text-green-400' : 'text-red-400'
            }`}>
              {won ? '✓ YOU WON!' : '✗ GAME OVER'}
            </h3>
            <p className="text-white text-xl font-bold mb-4">
              The character was: <span className="text-yellow-400">{secretCharacter.name}</span>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 text-left max-w-sm mx-auto">
              <div className="bg-black/30 p-3 rounded">
                <div className="text-gray-400 text-xs font-bold mb-1">GENDER</div>
                <div className="text-white font-bold">{secretCharacter.gender}</div>
              </div>
              <div className="bg-black/30 p-3 rounded">
                <div className="text-gray-400 text-xs font-bold mb-1">ROLE</div>
                <div className="text-white font-bold">
                  {Array.isArray(secretCharacter.roles) ? (
                    secretCharacter.roles.map((r, i) => (
                      <div key={i} className="text-sm">{r}</div>
                    ))
                  ) : (
                    secretCharacter.role
                  )}
                </div>
              </div>
              <div className="bg-black/30 p-3 rounded">
                <div className="text-gray-400 text-xs font-bold mb-1">TEAM</div>
                <div className="text-white font-bold">{secretCharacter.team}</div>
              </div>
              <div className="bg-black/30 p-3 rounded">
                <div className="text-gray-400 text-xs font-bold mb-1">ORIGINS</div>
                <div className="text-white font-bold">
                  {secretCharacter.origins.map((origin, i) => (
                    <div key={i} className="text-sm">{origin}</div>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={resetGame}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 text-lg"
            >
              Play Again
            </button>
          </div>
        )}

        {/* Info Section */}
        {!gameOver && (
          <div className="bg-gray-800/40 border border-gray-700 p-6 rounded-lg backdrop-blur">
            <p className="text-gray-300 text-sm md:text-base mb-4">
              <span className="text-green-400 font-bold">🎯 Green</span> = Correct match •{' '}
              <span className="text-yellow-400 font-bold">🎯 Yellow</span> = Shared origin •{' '}
              <span className="text-red-400 font-bold">🎯 Red</span> = Incorrect
            </p>
            <div className="text-xs text-gray-400 mt-4">
              <p className="font-bold text-gray-300 mb-2">Possible Origins:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {origins.map((origin, idx) => (
                  <div key={idx} className="bg-gray-700/50 px-3 py-1 rounded">{origin}</div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarvelRivalsWordle;