import { Card } from './card'

export class Player {
    private hand: Card[] = [];
    private name: string;
    private bet: number;
    private bags: number;
    private difficulty: number;

    public checkSuit(someSuit){
        this.hand.forEach(card => {
            if (card.suit() == someSuit){
                return true;
            }
        });
        return false;
    }

    public placeCard(aCard, someDifficulty){
        if (this.checkSuit(aCard)) {

        }
        else // evaluate how soon to use spades
        {

        }
    }

}
