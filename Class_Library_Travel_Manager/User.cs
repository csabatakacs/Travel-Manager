using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Class_Library_Travel_Manager
{
    public class User
    {
        public int Id {  get; set; }
        public string Name { get; set; }
        public string Surname {  get; set; }
        public string Email {  get; set; }
        public string Password {  get; set; }
        public List<Booking> Bookings { get; set; }
        public List<Reviews> Reviews { get; set; }
        public List<Attraction> FavoriteAttractions { get; set; }

        public User(int Id, string Name, string Surname, string Email, string Password)
        {
            this.Id = Id;
            this.Name = Name;
            this.Surname = Surname;
            this.Email = Email;
            this.Password = Password;
            Bookings = new List<Booking>();
            Reviews = new List<Reviews>();
            FavoriteAttractions = new List<Attraction>();
        }
    }
}
