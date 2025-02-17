using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace landlord_backend.Engine
{
    class Game
    {
        public List<Card> CreateCards()
        {
            var suits = new List<string> { "Diamonds", "Clubs", "Hearts", "Spades" };
            var values = new List<(int, string)>
            {
                (1, "3"), (2, "4"), (3, "5"), (4, "6"), (5, "7"), (6, "8"), (7, "9"), (8, "10"),
                (9, "J"), (10, "Q"), (11, "K"), (12, "A"), (13, "2")
            };

            var allCards = new List<Card>();

            foreach (var suit in suits)
            {
                foreach (var (rank, value) in values)
                {
                    allCards.Add(new Card(rank, value, suit));
                }
            }

            // Add Jokers
            allCards.Add(new Card(15, "Joker", "High"));
            allCards.Add(new Card(14, "Joker", "Low"));

            // Display cards (for testing)
            foreach (var card in allCards)
            {
                Console.WriteLine($"{card.getPower()} of {card.getNumber()}");
            }

            return allCards;
        }
    }
}
