namespace mission5.Models;

/// <summary>
/// View model for displaying error information to users
/// Contains request tracking information for debugging purposes
/// </summary>
public class ErrorViewModel
{
    /// <summary>
    /// Unique identifier for the HTTP request that caused the error
    /// Used for tracing and troubleshooting issues in logs
    /// </summary>
    public string? RequestId { get; set; }

    /// <summary>
    /// Determines whether the Request ID should be displayed to the user
    /// Only shows the ID if it exists and is not empty
    /// </summary>
    public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
}