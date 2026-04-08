using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Class_Library_Travel_Manager
{
    public class Reviews
    {
        public int Id { get; set; }
        public int UserID { get; set; }
        public int AttractionID { get; set; }
        public string Comment { get; set; }
        public int Rating { get; set; }
        public DateOnly DateOfReview { get; set; }

        public Reviews(int Id, int UserID, int AttractionID, string Comment, int Rating, DateOnly DateOfReview)
        {
            this.Id = Id;
            this.UserID = UserID;
            this.AttractionID = AttractionID;
            this.Comment = Comment;
            this.Rating = Rating;
            this.DateOfReview = DateOfReview;
        }
    }
}
