/**
 * Tutoring Calculator JavaScript
 * Handles user input validation and cost calculation for language tutoring sessions
 * Requires jQuery library
 */

// Wait for the DOM to fully load before executing any code
$(document).ready(function() {
    // Constant: Fixed hourly rate for tutoring services in USD
    const HOURLY_RATE = 50.00;

    /**
     * Event Handler: Calculate button click
     * Triggers the cost calculation when user clicks the "Calculate Total" button
     */
    $('#calculateBtn').click(function() {
        calculateTotal();
    });

    /**
     * Event Handler: Enter key press
     * Allows users to press Enter in the hours input field to trigger calculation
     * Prevents default form submission behavior
     */
    $('#hours').keypress(function(e) {
        if (e.which === 13) { // 13 is the keycode for Enter key
            e.preventDefault(); // Prevent default form submission
            calculateTotal();
        }
    });

    /**
     * Event Handler: Input field change
     * Clears error messages and resets output when user starts typing
     * Provides immediate visual feedback that previous errors are cleared
     */
    $('#hours').on('input', function() {
        $('#hoursError').hide();    // Hide any displayed error messages
        $('#total').val('');         // Clear the calculated total
    });

    /**
     * Main calculation function
     * Validates user input and calculates the total tutoring cost
     * Performs multiple validation checks before calculation:
     * - Empty input check
     * - Valid number check
     * - Positive number check
     * - Reasonable maximum check (prevents overflow)
     */
    function calculateTotal() {
        // Get the hours input value and remove whitespace
        var hoursInput = $('#hours').val().trim();

        // Hide any previous error messages at the start of validation
        $('#hoursError').hide();

        // Validation 1: Check if input is empty
        if (hoursInput === '' || hoursInput === null) {
            showError('Please enter the number of hours');
            return; // Exit function early if validation fails
        }

        // Convert string input to floating point number
        var hours = parseFloat(hoursInput);

        // Validation 2: Check if conversion resulted in a valid number
        if (isNaN(hours)) {
            showError('Please enter a valid number');
            return;
        }

        // Validation 3: Ensure the number is positive
        if (hours <= 0) {
            showError('Please enter a positive number');
            return;
        }

        // Validation 4: Prevent unreasonably large values that could cause overflow
        if (hours > 10000) {
            showError('Please enter a reasonable number of hours (maximum 10,000)');
            return;
        }

        // Perform the calculation: hours × hourly rate
        var total = hours * HOURLY_RATE;

        // Format the result as currency with 2 decimal places and display it
        $('#total').val('$' + total.toFixed(2));

        // Visual feedback: Add a brief success animation to the total field
        $('#total').addClass('bg-success bg-opacity-10');
        setTimeout(function() {
            $('#total').removeClass('bg-success bg-opacity-10');
        }, 1000); // Remove animation after 1 second
    }

    /**
     * Error display function
     * Shows validation error messages to the user with visual feedback
     *
     * @param {string} message - The error message to display
     */
    function showError(message) {
        // Display the error message below the hours input field
        $('#hoursError').text(message).show();

        // Clear any previously calculated total
        $('#total').val('');

        // Return focus to the hours input field for easy correction
        $('#hours').focus();

        // Visual feedback: Add red border to indicate error
        $('#hours').addClass('border-danger');
        setTimeout(function() {
            // Remove red border after 2 seconds
            $('#hours').removeClass('border-danger');
        }, 2000);
    }
});
