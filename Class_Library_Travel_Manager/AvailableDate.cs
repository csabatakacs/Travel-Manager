using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Class_Library_Travel_Manager
{
    public class AvailableDate
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }

        public int AttractionId { get; set; }
        public Attraction Attraction { get; set; }

        public AvailableDate(int Id, DateTime Date, int AttractionId)
        {
            this.Id = Id;
            this.Date = Date;
            this.AttractionId = AttractionId;
        }
    }
}
