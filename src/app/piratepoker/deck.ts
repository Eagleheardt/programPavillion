import { Card } from './card';

export class Deck {
    
    private cards: Card[] = [];
    

        
    public getCard() {
        private randIndex: number = this.cards[Math.floor(Math.random() * this.cards.length)];

        return cards(randIndex);
    }

}
