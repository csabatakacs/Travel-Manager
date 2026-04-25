using System;

namespace Class_Library_Travel_Manager
{
    public class AvailableDate
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int AttractionId { get; set; }
        public Attraction Attraction { get; set; }

        private AvailableDate() { }

        public AvailableDate(DateTime date, int attractionId)
        {
            Date = date;
            AttractionId = attractionId;
        }
    }
}