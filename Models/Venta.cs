using System.ComponentModel.DataAnnotations.Schema;

namespace Concesionario.Models
{
    public class Venta
    {
        public int Id { get; set; }
        public decimal TotalVenta { get; set; }
        public int Cantidad { get; set; }

        [ForeignKey("Vehiculo")]
        public int VehiculoId { get; set; }
        public Vehiculo? Vehiculo { get; set; }
        public DateTime FechaVenta { get; set; }
    }
}
