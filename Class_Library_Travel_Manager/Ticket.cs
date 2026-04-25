using System;
using System.IO;
using ZXing;
using ZXing.Common;
using ZXing.ImageSharp; // Adus de bindings
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats.Png;
using SixLabors.ImageSharp.PixelFormats; // Conține Rgba32

namespace Class_Library_Travel_Manager
{
    public class Ticket
    {
        public int Id { get; set; }
        public int BookingId { get; set; }
        public Booking Booking { get; set; }
        public int AttractionId { get; set; }
        public Attraction Attraction { get; set; }
        public DateOnly EntryDate { get; set; }

        private Ticket() { }

        public Ticket(int bookingId, int attractionId, DateOnly entryDate)
        {
            BookingId = bookingId;
            AttractionId = attractionId;
            EntryDate = entryDate;
        }

        /// <summary>
        /// Generează codul de bare ca array de bytes (PNG) folosind ImageSharp.
        /// </summary>
        /// <param name="width">Lățimea imaginii (implicit 300px).</param>
        /// <param name="height">Înălțimea imaginii (implicit 100px).</param>
        /// <returns>Imaginea PNG sub formă de byte[].</returns>
        public byte[] GenerateBarcodeBytes(int width = 300, int height = 100)
        {
            // Construim codul unic (ex: TKT-000123)
            string barcodeContent = $"TKT-{Id:D6}";

            // Inițializăm writer-ul cu ImageSharp
            var writer = new ZXing.ImageSharp.BarcodeWriter<Rgba32>
            {
                Format = BarcodeFormat.CODE_128,
                Options = new EncodingOptions
                {
                    Width = width,
                    Height = height,
                    Margin = 1,
                    PureBarcode = false  // păstrează textul sub bare
                }
            };

            // Generăm imaginea (ImageSharp)
            using (Image<Rgba32> image = writer.Write(barcodeContent))
            using (var ms = new MemoryStream())
            {
                // Salvăm ca PNG în fluxul de memorie
                image.Save(ms, new PngEncoder());
                return ms.ToArray();
            }
        }

        /// <summary>
        /// Salvează codul de bare direct într-un fișier PNG.
        /// </summary>
        public void SaveBarcodeToFile(string filePath, int width = 300, int height = 100)
        {
            string barcodeContent = $"TKT-{Id:D6}";

            var writer = new ZXing.ImageSharp.BarcodeWriter<Rgba32>
            {
                Format = BarcodeFormat.CODE_128,
                Options = new EncodingOptions
                {
                    Width = width,
                    Height = height,
                    Margin = 1,
                    PureBarcode = false
                }
            };

            using (Image<Rgba32> image = writer.Write(barcodeContent))
            {
                image.SaveAsPng(filePath); // Salvare directă în fișier
            }
        }
    }
}