// This file defines how bidders on an auction site are notified.
// When a bid is placed all bidders are notified of the price increase

interface Listing {
    state: State;
    addBidder(bidder: Bidder): void;
    removeBidder(bidder: Bidder): void;
    notifyBidder(): void;
}

interface State {
    id: number,
    price: number
}

interface Bidder {
    update(auctionListing: Listing): number;
}

class AuctionListing implements Listing {
    public state: State

    constructor(state: State) {
        this.state = state
    }

    private bidders: Bidder[] = [];

    public addBidder(bidder: Bidder): void {
        if (this.bidders.includes(bidder)) {
            return console.log('this bidder is already subscribed to this listing')
        }
        console.log('Bidder added');
        this.bidders.push(bidder);
    }

    public removeBidder(bidder: Bidder): void {
        const bidderIndex = this.bidders.indexOf(bidder);
        if (bidderIndex === -1) {
            return console.log('This bidder never subscribed to this listing')
        }

        this.bidders.splice(bidderIndex, 1)
        console.log("Removed the bidder")
    }

    public notifyBidder(): void {
        console.log("Notifying bidders of price inrease");
        this.bidders.forEach((bidder) => {
            bidder.update(this)
        })
    }

    public placeBid(price: number): void {
        this.state.price = price;
        console.log(`someone bid ${price} on ${this.state.id}`)
        this.notifyBidder();
    }
}

class Bidder1 implements Bidder {
    public update(auctionListing: Listing): number {
        console.log(`Bidder received new price ${auctionListing.state.price}`)
        return auctionListing.state.price
    }
}

export {Bidder1, AuctionListing}