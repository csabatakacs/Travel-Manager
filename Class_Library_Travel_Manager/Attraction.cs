using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Class_Library_Travel_Manager
{
    public class Attraction
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
        public string Location { get; set; }
        public int Capacity { get; set; }
        public int EntryPrice { get; set; }
        public ICollection<AvailableDate> AvailableDates { get; set; }


        public Attraction(int Id, string Name, string Type, string Description, string Location, int Capacity, int EntryPrice)
        {
            this.Id = Id;
            this.Name = Name;
            this.Type = Type;
            this.Description = Description;
            this.Location = Location;
            this.Capacity = Capacity;
            this.EntryPrice = EntryPrice;
            AvailableDates = new List<AvailableDate>();
        }
       
    }
}
