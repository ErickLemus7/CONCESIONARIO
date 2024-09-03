using System.ComponentModel.DataAnnotations.Schema;

namespace Concesionario.Models
{
    public class Vehiculo
    {
        public int Id { get; set; }
        public int anio { get; set; }
        public string? Modelo { get; set; }

        public int cantidadPuertas { get; set; }

        [ForeignKey("Marca")]
        public int MarcaId { get; set; }
        public Marca? Marca { get; set; }
    }
}
