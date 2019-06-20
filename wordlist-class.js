class WordList {
    shuffleWordList() {
        // Fisher-Yates shuffle
        var i = this.wordList.length, temp, index;
        while (i > 0) {
            index = Math.floor(i * Math.random());
            --i;
            temp = this.wordList[index];
            this.wordList[index] = this.wordList[i];
            this.wordList[i] = temp;
        }
        this.wordListIndex = 0
    }

    constructor(wordList) {
        var wordListClone = wordList.slice(0)
        this.wordList = wordListClone
        this.shuffleWordList()
    }

    nextWord() {
        if (this.wordListIndex == this.wordList.length) {
            this.shuffleWordList()
        }
        return this.wordList[this.wordListIndex++]
    }
}


