using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Class_Library_Travel_Manager
{
    public class Ticket
    {
        public int Id {  get; set; }
        public int AttractionID { get; set; }
        public DateOnly EntryDate { get; set; }

        // need to implement the barcode generation

        public Ticket(int Id, int AttractionID, DateOnly EntryDate)
        {
            this.Id = Id;
            this.AttractionID = AttractionID;
            this.EntryDate = EntryDate;
        }

       
    }
}
