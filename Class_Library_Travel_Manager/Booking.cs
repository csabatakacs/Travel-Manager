using System;
using System.Collections.Generic;

namespace Class_Library_Travel_Manager
{
    public class Booking
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public ICollection<Ticket> Tickets { get; set; }
        public int Quantity { get; set; }
        public int TotalPrice { get; set; }
        public DateOnly DateOfPurchase { get; set; }

        private Booking() { }

        public Booking(int userId, int quantity, int totalPrice, DateOnly dateOfPurchase)
        {
            UserId = userId;
            Quantity = quantity;
            TotalPrice = totalPrice;
            DateOfPurchase = dateOfPurchase;
            Tickets = new List<Ticket>();
        }
    }
}