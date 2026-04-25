using System;

namespace Class_Library_Travel_Manager
{
    public class Reviews
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int AttractionId { get; set; }
        public Attraction Attraction { get; set; }
        public string Comment { get; set; }
        public int Rating { get; set; }
        public DateOnly DateOfReview { get; set; }
        private Reviews() { }

        public Reviews(int userId, int attractionId, string comment, int rating, DateOnly dateOfReview)
        {
            UserId = userId;
            AttractionId = attractionId;
            Comment = comment;
            Rating = rating;
            DateOfReview = dateOfReview;
        }
    }
}