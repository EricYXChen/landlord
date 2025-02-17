using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Security;
using System.Text;
using System.Threading.Tasks;

namespace landlord_backend
{
    public class Card(int power, string number, string suit)
    {
        private int _power = power;

        private string _number = number;

        private string _suit = suit;

        public string getSuit()
        {
            return _suit;   
        }
        public string getNumber()
        {
            return _number;
        }
        public int getPower()
        {
            return _power;
        }
        
    }
}
