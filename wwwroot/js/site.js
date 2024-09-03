// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$('.btn-editar').click(function () {
    var id = $(this).data('id');
    var nombre = $(this).data('nombre');
    var apellido = $(this).data('apellido');
    var telefono = $(this).data('telefono');
    var dui = $(this).data('dui');

    // Asignar los valores a los campos del modal
    $('#edit-id').val(id);
    $('#edit-nombre').val(nombre);
    $('#edit-apellido').val(apellido);
    $('#edit-telefono').val(telefono);
    $('#edit-dui').val(dui);

    // Mostrar el modal
    $('#editModal').modal('show');
});
//Boton de eliminar
$(document).on('click', '.btn_eliminar', function () {
    var id = $(this).data("id"); // Obtener el id del empleado desde el atributo data-id
    Swal.fire({
        title: '¿Está seguro de eliminar el registro?',
        text: "Verifique antes de continuar",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar!'
    }).then((result) => {
        if (result.isConfirmed) {
            // Realizar solicitud AJAX para eliminar
            $.ajax({
                url: '/Empleado/DeleteEmployee/' + id, // La URL para la eliminación
                type: 'POST',
                success: function () {
                    Swal.fire(
                        'Eliminado',
                        'Se eliminó el registro correctamente.',
                        'success'
                    ).then(() => {
                        location.reload(); // Recargar la página para actualizar la tabla
                    });
                },
                error: function () {
                    Swal.fire(
                        'Error',
                        'Hubo un error al eliminar el registro.',
                        'error'
                    );
                }
            });
        }
    })
});
