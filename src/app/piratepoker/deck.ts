import { Card } from './card';

export class Deck {
    
    private cards: Card[] = [
        
    ];
        
    public getCard() {
        return this.cards[(Math.floor(Math.random() * this.cards.length))];
    }
}
