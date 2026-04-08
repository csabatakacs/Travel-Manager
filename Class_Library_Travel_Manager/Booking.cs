using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Class_Library_Travel_Manager
{
    public class Booking
    {
        public int Id { get; set; }
        public int UserID { get; set; }
        public ICollection<Ticket> Tickets { get; set; }
        public int Quantity { get; set; }
        public int TotalPrice { get; set; }
        public DateOnly DateOfPurchase { get; set; }

        public Booking(int Id, int UserID, int Quantity, int TotalPrice, DateOnly DateOfPurchase)
        {
            this.Id = Id;
            this.UserID = UserID;
            Tickets = new List<Ticket>();
            this.Quantity = Quantity;
            this.TotalPrice = TotalPrice;
            this.DateOfPurchase = DateOfPurchase;
        }
    }
}
