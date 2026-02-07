$(document).ready(function() {
    // Set the hourly rate
    const HOURLY_RATE = 50.00;

    // Calculate button click handler
    $('#calculateBtn').click(function() {
        calculateTotal();
    });

    // Allow Enter key to trigger calculation
    $('#hours').keypress(function(e) {
        if (e.which === 13) { // Enter key
            e.preventDefault();
            calculateTotal();
        }
    });

    // Clear error message when user starts typing
    $('#hours').on('input', function() {
        $('#hoursError').hide();
        $('#total').val('');
    });

    function calculateTotal() {
        // Get the hours input value
        var hoursInput = $('#hours').val().trim();

        // Hide error message initially
        $('#hoursError').hide();

        // Validate input is not empty
        if (hoursInput === '' || hoursInput === null) {
            showError('Please enter the number of hours');
            return;
        }

        // Convert to number
        var hours = parseFloat(hoursInput);

        // Validate input is a valid number
        if (isNaN(hours)) {
            showError('Please enter a valid number');
            return;
        }

        // Validate input is positive
        if (hours <= 0) {
            showError('Please enter a positive number');
            return;
        }

        // Validate input is not unreasonably large (prevent overflow)
        if (hours > 10000) {
            showError('Please enter a reasonable number of hours (maximum 10,000)');
            return;
        }

        // Calculate total
        var total = hours * HOURLY_RATE;

        // Format and display the total
        $('#total').val('$' + total.toFixed(2));

        // Optional: Add success animation
        $('#total').addClass('bg-success bg-opacity-10');
        setTimeout(function() {
            $('#total').removeClass('bg-success bg-opacity-10');
        }, 1000);
    }

    function showError(message) {
        $('#hoursError').text(message).show();
        $('#total').val('');
        $('#hours').focus();

        // Add error styling to input
        $('#hours').addClass('border-danger');
        setTimeout(function() {
            $('#hours').removeClass('border-danger');
        }, 2000);
    }
});
