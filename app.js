// DATA
const canaaniteAlphabet = {
    1: { letter: "Aleph", symbol: "𐤀", meaning: "Ox", phonetic: "/ʔ/" },
    2: { letter: "Beth", symbol: "𐤁", meaning: "House", phonetic: "/b/" },
    3: { letter: "Gimel", symbol: "𐤂", meaning: "Camel", phonetic: "/g/" },
    4: { letter: "Daleth", symbol: "𐤃", meaning: "Door", phonetic: "/d/" },
    5: { letter: "He", symbol: "𐤄", meaning: "Window", phonetic: "/h/" },
    6: { letter: "Waw", symbol: "𐤅", meaning: "Hook or Peg", phonetic: "/w/" },
    7: { letter: "Zayin", symbol: "𐤆", meaning: "Weapon", phonetic: "/z/" },
    8: { letter: "Heth", symbol: "𐤇", meaning: "Fence", phonetic: "/ħ/" },
    9: { letter: "Teth", symbol: "𐤈", meaning: "Wheel", phonetic: "/tʰ/" },
    10: { letter: "Yodh", symbol: "𐤉", meaning: "Hand", phonetic: "/j/" },
    11: { letter: "Kaph", symbol: "𐤊", meaning: "Palm of the Hand", phonetic: "/k/" },
    12: { letter: "Lamedh", symbol: "𐤋", meaning: "Goad", phonetic: "/l/" },
    13: { letter: "Mem", symbol: "𐤌", meaning: "Water", phonetic: "/m/" },
    14: { letter: "Nun", symbol: "𐤍", meaning: "Snake or Fish", phonetic: "/n/" },
    15: { letter: "Samekh", symbol: "𐤎", meaning: "Support or Peg", phonetic: "/s/" },
    16: { letter: "Ayin", symbol: "𐤏", meaning: "Eye", phonetic: "/ʕ/" },
    17: { letter: "Pe", symbol: "𐤐", meaning: "Mouth", phonetic: "/p/" },
    18: { letter: "Tsade", symbol: "𐤑", meaning: "Hook", phonetic: "/ts/" },
    19: { letter: "Qoph", symbol: "𐤒", meaning: "Needle or Monkey", phonetic: "/q/" },
    20: { letter: "Resh", symbol: "𐤓", meaning: "Head", phonetic: "/r/" },
    21: { letter: "Shin", symbol: "𐤔", meaning: "Tooth", phonetic: "/ʃ/" },
    22: { letter: "Taw", symbol: "𐤕", meaning: "Mark", phonetic: "/t/" },
    // Duplicate entries to access by letter since data is small and static this is efficient
    "Aleph": { number: 1, symbol: "𐤀", meaning: "Ox", phonetic: "/ʔ/" },
    "Beth": { number: 2, symbol: "𐤁", meaning: "House", phonetic: "/b/" },
    "Gimel": { number: 3, symbol: "𐤂", meaning: "Camel", phonetic: "/g/" },
    "Daleth": { number: 4, symbol: "𐤃", meaning: "Door", phonetic: "/d/" },
    "He": { number: 5, symbol: "𐤄", meaning: "Window", phonetic: "/h/" },
    "Waw": { number: 6, symbol: "𐤅", meaning: "Hook or Peg", phonetic: "/w/" },
    "Zayin": { number: 7, symbol: "𐤆", meaning: "Weapon", phonetic: "/z/" },
    "Heth": { number: 8, symbol: "𐤇", meaning: "Fence", phonetic: "/ħ/" },
    "Teth": { number: 9, symbol: "𐤈", meaning: "Wheel", phonetic: "/tʰ/" },
    "Yodh": { number: 10, symbol: "𐤉", meaning: "Hand", phonetic: "/j/" },
    "Kaph": { number: 11, symbol: "𐤊", meaning: "Palm of the Hand", phonetic: "/k/" },
    "Lamedh": { number: 12, symbol: "𐤋", meaning: "Goad", phonetic: "/l/" },
    "Mem": { number: 13, symbol: "𐤌", meaning: "Water", phonetic: "/m/" },
    "Nun": { number: 14, symbol: "𐤍", meaning: "Snake or Fish", phonetic: "/n/" },
    "Samekh": { number: 15, symbol: "𐤎", meaning: "Support or Peg", phonetic: "/s/" },
    "Ayin": { number: 16, symbol: "𐤏", meaning: "Eye", phonetic: "/ʕ/" },
    "Pe": { number: 17, symbol: "𐤐", meaning: "Mouth", phonetic: "/p/" },
    "Tsade": { number: 18, symbol: "𐤑", meaning: "Hook", phonetic: "/ts/" },
    "Qoph": { number: 19, symbol: "𐤒", meaning: "Needle or Monkey", phonetic: "/q/" },
    "Resh": { number: 20, symbol: "𐤓", meaning: "Head", phonetic: "/r/" },
    "Shin": { number: 21, symbol: "𐤔", meaning: "Tooth", phonetic: "/ʃ/" },
    "Taw": { number: 22, symbol: "𐤕", meaning: "Mark", phonetic: "/t/" }
};
const canAlp = {}
canAlp.decode = function(text){
      let t = "";
    let cerr = 0;

    for (const char of text) {
      if(parseInt(char)){
        t += canaaniteAlphabet[char].meaning+"-";
      }else{
        cerr++;
        console.log(cerr+" your text contains non numeral characters or 0 which can't be decoded");
      }
    }

    console.log(t);
}

canAlp.decode("32191529233425239");
